import { AuthorizerProvider } from "@authorizerdev/authorizer-react";
import App from "./App";

function Root() {
  return (
    <>
      <AuthorizerProvider
        config={{
          authorizerURL: import.meta.env.VITE_AUTHORIZER_URL,
          redirectURL:
            import.meta.env.VITE_RETURN_URL || window.location.origin,
          clientID: import.meta.env.VITE_CLIENT_ID,
        }}
      >
        <App />
      </AuthorizerProvider>
    </>
  );
}

export default Root;
