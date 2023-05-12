import { api } from "../utils/api";

const Github = () => {
  const test = api.example.connectGithub.useQuery({});

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Github;