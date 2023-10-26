import { useAuthorizer } from "@authorizerdev/authorizer-react";

export default function Dashboard() {
  const { token, user } = useAuthorizer();
  console.log(token, user);
  return (
    <div>
      <h1>Token</h1>
      <p> {JSON.stringify(token, null, 6)}</p>
      <h1>User</h1>
      <p>{JSON.stringify(user, null, 2)}</p>
    </div>
  );
}
