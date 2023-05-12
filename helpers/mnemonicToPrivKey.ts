import { ethers } from "ethers";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

export const mnemonicToPrivKey = () => {
  dotenv.config();
  const mnemonic = process.env.MNEMONIC;
  console.log("MNEMONIC: ", mnemonic);
  let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic as string);
  console.log("PRIVATE KEY: ", mnemonicWallet.privateKey);
  return mnemonicWallet.privateKey;
};

mnemonicToPrivKey();
