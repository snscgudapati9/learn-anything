import { supabase } from "../lib/initSupabase";
import { Auth } from "@supabase/ui";

export default function Home() {
  const { user } = Auth.useUser();
  console.log(user);

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
