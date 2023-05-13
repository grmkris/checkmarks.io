import { SignInWithLens } from "@lens-protocol/widgets-react";

async function onSignIn(tokens: any, profile: any) {
  console.log("tokens: ", tokens);
  console.log("profile: ", profile);
}

export const ConnectWithLens = () => {
  return <SignInWithLens onSignIn={onSignIn} />;
};
