import { useRouter } from "next/router";
import { SocialNames, useModalStore } from "../features/modals/useModalStore";

interface Social {
  name: SocialNames;
}

const Socials = () => {
  const router = useRouter();

  const socialsButtons: Social[] = [
    { name: SocialNames.Facebook },
    { name: SocialNames.Twitter },
    { name: SocialNames.Reddit },
    { name: SocialNames.Discord },
    { name: SocialNames.TikTok },
    { name: SocialNames.Lens },
    { name: SocialNames.Sismo },
    { name: SocialNames.Onchain },
  ];

  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col">
          {socialsButtons.map((social, index) => {
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
    </div>
  );
};

export default Socials;
