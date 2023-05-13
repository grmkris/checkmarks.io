import { QRCodeSVG } from "./svg/QRCodeSVG";

export interface ICredential {
  text: string;
  action: () => void;
}

const CredentialSelector = ({
  text,
  action,
}: {
  text: string;
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
  return (
    <>
      <div className={"flex flex-nowrap content-center"}>
        <h1 className="grow text-center  text-2xl font-bold text-primary">
          {title}
        </h1>
        <QRCodeSVG />
      </div>

      {credentials.map((cred, index) => (
        <CredentialSelector key={index} text={cred.text} action={cred.action} />
      ))}

      <div className="modal-action justify-center">
        <button className="btn-secondary btn" onClick={() => close()}>
          Done
        </button>
      </div>
    </>
  );
};