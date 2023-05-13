import { useRouter } from "next/router";
import { useModalStore } from "../features/modals/useModalStore";

interface Social {
  name: string;
}

const Socials = () => {
  const router = useRouter();

  const socialsButtons: Social[] = [
    { name: "Facebook" },
    { name: "Twitter" },
    { name: "Reddit" },
    { name: "Discord" },
  ];

  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-base-100"></div>
      <div className="hero-content text-center text-neutral-content">
        <div class="flex flex-col">
          {socialsButtons.map((social, index) => {
            return (
              <div key={index} className="py-2">
                <button
                  onClick={() =>
                    openModal({ data: undefined, view: "HelloWorldView2" })
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