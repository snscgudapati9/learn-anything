import type { AppProps } from "next/app";
import { UserContextProvider } from "../hooks/authUser";
import { supabase } from "../lib/initSupabase";
import Error from "next/error";

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }

  return (
    <>
      <Head>
        <title>Learn Anything</title>
      </Head>

      <Layout>
        <UserContextProvider supabaseClient={supabase}>
          <Component {...pageProps} />
        </UserContextProvider>
      </Layout>
    </>
  );
}
export default MyApp;
