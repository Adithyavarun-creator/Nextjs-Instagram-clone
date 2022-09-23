import { getProviders, signIn } from "next-auth/react";

export default function SignIn({ providers }) {
  const checkProviders = providers && providers.length;

  return (
    <>
      {checkProviders &&
        Object.keys(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  //console.log({ context });
  const providers = await getProviders(context);
  return {
    props: { providers: providers },
  };
}

/*
// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
  return {
    providers: await getProviders()
  }
}
*/
