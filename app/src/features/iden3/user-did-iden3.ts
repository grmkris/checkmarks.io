import {
  BjjProvider,
  CredentialStatusType,
  CredentialStorage,
  CredentialWallet,
  EthConnectionConfig,
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
import { O_TRUNC, O_CREAT, O_RDWR, O_EXCL, O_RDONLY } from "constants";

export const getUserDID = async (config: { username: string }) => {
  console.log("getUserDID - Initialize DataStorage:", config);
  /**
   * Initialize DataStorage:
   */

  const defaultEthConnectionConfig: EthConnectionConfig = {
    url: "http://localhost:8545",
    defaultGasLimit: 600000,
    minGasPrice: "0",
    maxGasPrice: "100000000000",
    confirmationBlockCount: 5,
    confirmationTimeout: 600000,
    contractAddress: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    receiptTimeout: 600000,
    rpcResponseTimeout: 5000,
    waitReceiptCycleTime: 30000,
    waitBlockCycleTime: 3000,
  };
  const dataStorage = {
    credential: new CredentialStorage(new InMemoryDataSource<W3CCredential>()),
    identity: new IdentityStorage(
      new InMemoryDataSource<Identity>(),
      new InMemoryDataSource<Profile>()
    ),
    mt: new InMemoryMerkleTreeStorage(40),
    states: new EthStateStorage({
      contractAddress: "0x134B1BE34911E39A8397ec6289782989729807a4",
      url: "https://polygon-testnet.public.blastapi.io",
      confirmationTimeout: 600000,
      confirmationBlockCount: 5,
      defaultGasLimit: 600000,
      maxGasPrice: "100000000000",
      receiptTimeout: 600000,
      rpcResponseTimeout: 5000,
      waitReceiptCycleTime: 30000,
      waitBlockCycleTime: 3000,
    }),
  };

  console.log("getUserDID - Initialize KMS:", config);
  /**
   * Initialize CredentialWallet and IdentityWallet
   */
  const memoryKeyStore = new InMemoryPrivateKeyStore();
  const bjjProvider = new BjjProvider(KmsKeyType.BabyJubJub, memoryKeyStore);
  const kms = new KMS();
  kms.registerKeyProvider(KmsKeyType.BabyJubJub, bjjProvider);

  const credWallet = new CredentialWallet(dataStorage);
  const wallet = new IdentityWallet(kms, dataStorage, credWallet);

  const byteEncoder = new TextEncoder();

  /*
  const seedPhrase1: Uint8Array = byteEncoder.encode(
    "seedseedseedseedseedseedseedseed"
  );
   */
  // TODO fix this.. is not safe xD
  const seedPhrase2: Uint8Array = byteEncoder.encode(
    config.username.slice(0, 32)
  );

  const { did, credential } = await wallet.createIdentity({
    method: DidMethod.Iden3,
    blockchain: Blockchain.Polygon,
    networkId: NetworkId.Mumbai,
    seed: seedPhrase2,
    revocationOpts: {
      type: CredentialStatusType.Iden3ReverseSparseMerkleTreeProof,
      baseUrl: "http://rhs.com/node",
    },
  });

  return { did, credential };
};
