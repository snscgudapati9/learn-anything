import { Auth } from "@supabase/ui";
import Link from "next/link";

export default function Home() {
  const { user } = Auth.useUser();

  return (
    <div className="w-full h-full">
      {!user ? (
        <div className="text-center mt-5">
          <h1 className="font-bold text-xl">Learn Anything</h1>
          <h2>
            You can save and search all your notes and links with this tool.
            Have to
            <Link href="/login">
              <a>login/signup</a>
            </Link>
            first!
          </h2>
        </div>
      ) : (
        <div>Hello, you are logged in!</div>
      )}
    </div>
  );
}
