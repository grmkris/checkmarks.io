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
import { useState } from "react";

export const Clerk = () => {
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
