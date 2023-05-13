import { ClerkLoaded, ClerkLoading, UserProfile } from "@clerk/nextjs";
import { Loading } from "../components/Loading";

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
