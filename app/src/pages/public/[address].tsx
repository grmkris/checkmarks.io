import { useRouter } from "next/router";
import {
  SocialNames,
  useModalStore,
} from "../../features/modals/useModalStore";
import { Social } from "../socials";
import { createAvatar } from "@dicebear/core";
import { thumbs } from "@dicebear/collection";
import { useMemo } from "react";

const PublicPage = () => {
  const address = useRouter().query.address;
  const openModal = useModalStore((state) => state.openModal);

  const avatar = useMemo(() => {
    return createAvatar(thumbs, {
      size: 128,
      seed: address as string,
    }).toDataUriSync();
  }, []);

  const socialButtons: Social[] = [
    { name: SocialNames.Discord },
    { name: SocialNames.TikTok },
    { name: SocialNames.Github },
    { name: SocialNames.Lens },
    { name: SocialNames.Sismo },
    { name: SocialNames.Onchain },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center bg-base-100 text-neutral-content">
      <img
        src={avatar}
        alt="Avatar"
        className="mt-12 w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100"
      />
      <p className="mt-2 text-secondary">Kris.eth</p>
      <div className="mt-6 flex flex-col items-center">
        {socialButtons.map((social, index) => {
          return (
            <div key={index} className="py-2">
              <button
                onClick={() =>
                  openModal({ data: undefined, view: social.name })
                }
                className="btn-primary btn w-80"
              >
                {social.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicPage;
