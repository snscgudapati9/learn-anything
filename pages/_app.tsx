import type { AppProps } from "next/app";
import { UserContextProvider } from "../hooks/authUser";
import { supabase } from "../lib/initSupabase";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <UserContextProvider supabaseClient={supabase}>
        <Component {...pageProps} />;
      </UserContextProvider>
    </main>
  );
}
export default MyApp;
