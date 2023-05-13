import { useModalStore } from "./useModalStore";

export const DiscordModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  return (
    <>
      <h3 className="text-lg font-bold">
        Congratulations random Internet user! {data?.HelloWorldView1?.name}
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