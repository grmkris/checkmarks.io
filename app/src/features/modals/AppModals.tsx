import { APP_MODALS_ID, SocialNames, useModalStore } from "./useModalStore";
import { TwitterModal } from "./TwitterModal";
import { DiscordModal } from "./DiscordModal";
import { FacebookModal } from "./FacebookModal";
import { RedditModal } from "./RedditModal";
import { OnchainModal } from "./OnchainModal";
import { SismoModal } from "./SismoModal";
import { LensModal } from "./LensModal";
import { TikTokModal } from "./TikTokModal";
import { GithubModal } from "./GithubModal";

export const AppModals = () => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={APP_MODALS_ID} className="modal-toggle" />
      <label
        htmlFor={APP_MODALS_ID}
        className="modal modal-bottom cursor-pointer sm:modal-middle "
      >
        <label className="modal-box relative bg-neutral" htmlFor={""}>
          <ModalViews />
        </label>
      </label>
    </>
  );
};

const ModalViews = () => {
  const view = useModalStore((state) => state.view);
  switch (view) {
    case SocialNames.Twitter:
      return <TwitterModal />;
    case SocialNames.Facebook:
      return <FacebookModal />;
    case SocialNames.Discord:
      return <DiscordModal />;
    case SocialNames.Reddit:
      return <RedditModal />;
    case SocialNames.Lens:
      return <LensModal />;
    case SocialNames.Sismo:
      return <SismoModal />;
    case SocialNames.Onchain:
      return <OnchainModal />;
    case SocialNames.TikTok:
      return <TikTokModal />;
    case SocialNames.Github:
      return <GithubModal />;
    default:
      return <></>;
  }
};

const HelloWorldView2 = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));
  return (
    <>
      <h3 className="text-lg font-bold">
        Congratulations random Internet user! {data?.HelloWorldView2?.name}
      </h3>
      <p className="py-4">
        You are selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
      <div className="modal-action">
        <button className="btn" onClick={() => close()}>
          Close
        </button>
      </div>
    </>
  );
};
