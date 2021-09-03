import { Auth } from "@supabase/ui";
import { supabase } from "../lib/initSupabase";

import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Login() {
  const { user } = Auth.useUser();

  const router = useRouter();

  useEffect(() => {
    console.log({ user });
    if (user) {
      router.push({
        pathname: "/",
      });
    }
  }, []);

  return (
    <>
      {!user && (
        <Auth
          supabaseClient={supabase}
          providers={["google", "github"]}
          socialLayout="horizontal"
          socialButtonSize="xlarge"
        />
      )}
    </>
  );
}
