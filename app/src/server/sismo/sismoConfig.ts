import { SismoConnectServerConfig } from "@sismo-core/sismo-connect-server";
import { env } from "../../env.mjs";

const config: SismoConnectServerConfig = {
  appId: env.NEXT_PUBLIC_SISMO_APP_ID,
};
