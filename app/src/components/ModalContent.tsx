import { QRCodeSVG as QRCodeIcon } from "./svg/QRCodeSVG";
import { useModalStore } from "../features/modals/useModalStore";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

export interface ICredential {
  text: string | JSX.Element;
  action: () => void;
}

const CredentialSelector = ({
  text,
  action,
}: {
  text: string | JSX.Element;
  action: any;
}) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text text-primary">{text}</span>
        <input
          onChange={action}
          type="checkbox"
          className="checkbox-primary checkbox"
        />
      </label>
    </div>
  );
};

export const ModalContent = ({
  title,
  credentials,
}: {
  title: string;
  credentials: ICredential[];
}) => {
  const { close } = useModalStore((state) => ({
    close: state.closeModal,
  }));
  const [showQr, setShowQr] = useState(false);
  return (
    <>
      <div className={"flex flex-nowrap content-center"}>
        <h1 className="grow text-center  text-2xl font-bold text-primary">
          {title}
        </h1>
        <div
          className={"cursor-pointer hover:bg-accent"}
          onClick={() => {
            console.log("clicked");
            setShowQr(!showQr);
          }}
        >
          <QRCodeIcon />
        </div>
      </div>
      {showQr && (
        <>
          <div className="mb-2 flex justify-center text-secondary">
            <p>Export the verifiable credential to VC compatible wallet:</p>
          </div>
          <div className="flex justify-center">
            <QRCodeSVG
              value={"helloWorld"}
              className={"bg-neutral"}
              size={200}
            />
          </div>
        </>
      )}
      {!showQr && (
        <>
          <p className={"text-secondary"}>Public information:</p>
          {credentials.map((cred, index) => (
            <CredentialSelector
              key={index}
              text={cred.text}
              action={cred.action}
            />
          ))}
        </>
      )}
      <div className="modal-action justify-center">
        <button className="btn-secondary btn" onClick={() => close()}>
          Done
        </button>
      </div>
    </>
  );
};
