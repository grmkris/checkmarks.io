import {
  AuthenticateWithRedirectCallback,
  ClerkLoaded,
  ClerkLoading,
  RedirectToSignIn,
  SignIn,
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

      <ClerkLoaded></ClerkLoaded>
    </div>
  );
};
