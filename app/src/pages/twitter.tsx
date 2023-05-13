import { api } from "../utils/api";

const Twitter = () => {
  const test = api.example.connectTwitter.useQuery();

  return <div>{JSON.stringify(test.data)}</div>;
};

export default Twitter;
