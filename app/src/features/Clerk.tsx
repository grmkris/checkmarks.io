import {UserButton} from "@clerk/nextjs";
import {api} from "../utils/api";
import {useState} from "react";

export const Clerk = () => {
    const [text, setText] = useState("");
    const hello = api.example.hello.useQuery({text1 : text}, {enabled: text.length > 10});
    const hello = api.example.helloMutation.useMutation();

    hello.isLoading && <div>Loading...</div>;
    return (
        <UserButton
            afterSignOutUrl="/"
            userProfileProps={{
                additionalOAuthScopes: {
                    discord: ["guilds", "guilds.members.read"],
                    github: ["read:user"],
                    tiktok: ["user.info.basic"],

                },
            }}
        />
    );
}
