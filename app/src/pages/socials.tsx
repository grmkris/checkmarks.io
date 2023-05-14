import { useUser } from "@clerk/nextjs";
import { useWeb2Web3Selector } from "../features/web2Web3SelectorStore";
import { Loading } from "../components/Loading";
import { SocialNames, useModalStore } from "../features/modals/useModalStore";
import Onboarding from "./onboarding";

export interface Social {
  name: SocialNames;
}

const Socials = () => {
  const user = useUser();
  const { selected } = useWeb2Web3Selector((state) => state);
  const openModal = useModalStore((state) => state.openModal);
  const hasConnectedAccounts = user.user?.externalAccounts;

  if (!user.isLoaded)
    return (
      <div className="hero min-h-screen">
        <Loading />
      </div>
    );

  if (!hasConnectedAccounts.length) return <Onboarding></Onboarding>;

  const web2SocialsButtons: Social[] = [
    { name: SocialNames.Facebook },
    { name: SocialNames.Twitter },
    { name: SocialNames.Reddit },
    { name: SocialNames.Discord },
    { name: SocialNames.TikTok },
    { name: SocialNames.Github },
  ];

  const web3SocialsButtons: Social[] = [
    { name: SocialNames.Lens },
    { name: SocialNames.Sismo },
    { name: SocialNames.Onchain },
  ];

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay mt-6 min-h-screen bg-base-100"></div>
      <div className="hero-content min-h-screen text-center text-neutral-content">
        <div className="mt-6 flex min-h-screen flex-col">
          {(selected === "web2" ? web2SocialsButtons : web3SocialsButtons).map(
            (social, index) => {
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
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Socials;