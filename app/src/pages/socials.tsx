import { useRouter } from "next/router";
import { SocialNames, useModalStore } from "../features/modals/useModalStore";
import clsx from "clsx";

export interface Social {
  name: SocialNames;
}

const Socials = () => {
  const router = useRouter();
  const selectedTab = router.query.tab || "web2";

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

  const web2Classes = clsx(
    "tab-bordered tab",
    selectedTab === "web2" ? "tab-active" : ""
  );

  const web3Classes = clsx(
    "tab-bordered tab",
    selectedTab === "web3" ? "tab-active" : ""
  );

  const handleTabChange = (tab: string) => {
    void router.push({
      pathname: router.pathname,
      query: { ...router.query, tab },
    });
  };

  const TabWeb2 = () => (
    <div className=" hero-content min-h-screen  text-neutral-content">
      <div className="flex flex-col justify-start">
        {web2SocialsButtons.map((social, index) => {
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

  const TabWeb3 = () => (
    <div className="hero-content min-h-screen  text-neutral-content">
      <div className="flex flex-col">
        {web3SocialsButtons.map((social, index) => {
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

  return (
    <div className="container mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center bg-base-100">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="tabs">
          <a
            className={web2Classes}
            onClick={() => {
              handleTabChange("web2");
            }}
          >
            <span
              className={
                (selectedTab === "web2" && "text-accent") || "text-secondary"
              }
            >
              web 2
            </span>
          </a>
          <a
            className={web3Classes}
            onClick={() => {
              handleTabChange("web3");
            }}
          >
            <span
              className={
                (selectedTab === "web3" && "text-accent") || "text-secondary"
              }
            >
              web 3
            </span>
          </a>
        </div>
      </div>

      {selectedTab === "web2" && <TabWeb2 />}
      {selectedTab === "web3" && <TabWeb3 />}
    </div>
  );
};

export default Socials;