import {
  BjjProvider,
  byteEncoder,
  CredentialStatusType,
  CredentialStorage,
  CredentialWallet,
  defaultEthConnectionConfig,
  EthStateStorage,
  Identity,
  IdentityStorage,
  IdentityWallet,
  InMemoryDataSource,
  InMemoryMerkleTreeStorage,
  InMemoryPrivateKeyStore,
  KMS,
  KmsKeyType,
  Profile,
  W3CCredential,
} from "@0xpolygonid/js-sdk";
import { Blockchain, DidMethod, NetworkId } from "@iden3/js-iden3-core";

export const getUserDID = async (config: { username: string }) => {
  /**
   * Initialize DataStorage:
   */
  const dataStorage = {
    credential: new CredentialStorage(new InMemoryDataSource<W3CCredential>()),
    identity: new IdentityStorage(
      new InMemoryDataSource<Identity>(),
      new InMemoryDataSource<Profile>()
    ),
    mt: new InMemoryMerkleTreeStorage(40),
    states: new EthStateStorage(defaultEthConnectionConfig),
  };
  /**
   * Initialize CredentialWallet and IdentityWallet
   */
  const memoryKeyStore = new InMemoryPrivateKeyStore();
  const bjjProvider = new BjjProvider(KmsKeyType.BabyJubJub, memoryKeyStore);
  const kms = new KMS();
  kms.registerKeyProvider(KmsKeyType.BabyJubJub, bjjProvider);

  const credWallet = new CredentialWallet(dataStorage);
  const wallet = new IdentityWallet(kms, dataStorage, credWallet);

  const seedPhrase: Uint8Array = byteEncoder.encode(
    "seedseedseedseedseedseedseedseed"
  );

  const { did, credential } = await wallet.createIdentity({
    method: DidMethod.Iden3,
    blockchain: Blockchain.Polygon,
    networkId: NetworkId.Mumbai,
    seed: seedPhrase,
    revocationOpts: {
      type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
      baseUrl: "http://rhs.com/node",
    },
  });

  return { did, credential };
};
