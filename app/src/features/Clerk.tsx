import {
  AuthenticateWithRedirectCallback,
  ClerkLoaded,
  ClerkLoading,
  RedirectToSignIn,
  SignUp,
  UserButton,
  UserProfile,
  useSignIn,
  useUser,
} from "@clerk/nextjs";
import { Loading } from "../components/Loading";

export const Clerk = () => {
  const { signIn } = useSignIn();
  const { user } = useUser();

  const signInWithDiscord = () =>
    signIn?.authenticateWithRedirect({
      strategy: "oauth_discord",
      redirectUrlComplete: "/",
      redirectUrl: "/",
    });
  return (
    <div>
      <ClerkLoading>
        <Loading />
      </ClerkLoading>
      <ClerkLoaded>
        <UserProfile
          additionalOAuthScopes={{
            discord: ["guilds", "guilds.members.read"],
            github: ["read:user"],
            tiktok: ["user.info.basic"],
          }}
        />
      </ClerkLoaded>
    </div>
  );
};
