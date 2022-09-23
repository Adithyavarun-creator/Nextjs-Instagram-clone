import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  return (
    <div
      className="bg-gray-50 h-screen overflow-y-scroll
    scrollbar-hide"
    >
      {/* <h1>Signed in as {session.user.email} </h1>
        <button onClick={() => signOut()}>Sign out</button> */}

      <Head>
        <title>Instagram App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Feed */}
      <Feed />
      {/* Modal */}
    </div>
  );
}
