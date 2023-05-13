import { SocialNames, useModalStore } from "../features/modals/useModalStore";
import { useUser } from "@clerk/nextjs";
import { Loading } from "../components/Loading";
import { useWeb2Web3Selector } from "../features/web2Web3SelectorStore";

export interface Social {
  name: SocialNames;
}

const Socials = () => {
  const user = useUser();
  const { selected, setSelected } = useWeb2Web3Selector((state) => state);

  const web2SocialsButtons: Social[] = [
    { name: SocialNames.Facebook },
    { name: SocialNames.Twitter },
    { name: SocialNames.Reddit },
    { name: SocialNames.Discord },
    { name: SocialNames.TikTok },
  ];

  const web3SocialsButtons: Social[] = [
    { name: SocialNames.Lens },
    { name: SocialNames.Sismo },
    { name: SocialNames.Onchain },
  ];

  const openModal = useModalStore((state) => state.openModal);

  console.log("qweqwe", user.user?.externalAccounts);
  const displayOnboardingText = user.user?.externalAccounts.length === 0;

  if (!user.isLoaded)
    return (
      <div className="hero min-h-screen">
        <Loading />
      </div>
    );

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col">
          {displayOnboardingText && (
            <div className="py-2">
              <h1 className="text-5xl font-bold">Welcome to Checkmarks!</h1>
              <p className="py-4">
                Unleash the power of account verification by clicking that
                button below!
              </p>
            </div>
          )}
          {!displayOnboardingText &&
            (selected === "web2" ? web2SocialsButtons : web3SocialsButtons).map(
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
