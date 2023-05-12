import { api } from "../utils/api";

const Discord = () => {
  const test = api.example.connectDiscord.useQuery({});

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Discord;