import {
  AuthenticateWithRedirectCallback,
  ClerkLoaded,
  ClerkLoading,
  RedirectToSignIn,
  SignUp,
  useAuth,
  UserButton,
  UserProfile,
  useSignIn,
  useUser,
} from "@clerk/nextjs";
import { Loading } from "../components/Loading";

export const Clerk = () => {
  const { signIn } = useSignIn();
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <div>
      <ClerkLoading>
        <Loading />
      </ClerkLoading>

      <ClerkLoaded>
        <button className={"btn-accent btn"} onClick={() => signOut()}>
          Sign Out
        </button>
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
