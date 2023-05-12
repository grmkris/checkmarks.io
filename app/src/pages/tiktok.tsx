import { api } from "../utils/api";

const Tiktok = () => {
  const test = api.example.connectTiktok.useQuery({});

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Tiktok;