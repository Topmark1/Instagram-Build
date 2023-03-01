import {getProviders,signIn as signIntoProvider} from "next-auth/react";
import Header from "../../components/Header";

function signin({providers}) {
  return (
    <>
    <Header />

    <div className="flex flex-col items-center justify-center min-h-screen py-2  px-14 text-center">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
    <p className="font-xs itallic">
        This is not a REAL app, it is built for educational purposes only
    </p>
    <div className="mt-40">
    {Object.values(providers).map((provider) => (
      <div key={provider.name}>
        <button className="p-3 bg-blue-500 rounded-lg text-white -mt-24" onClick={() => signIntoProvider(provider.id,{callbackUrl:"/"})}>
          Sign in with {provider.name}
        </button>
      </div>
    ))}
    </div>
    </div>
  </>
  )
}
///////redirect_uri=http://localhost:3000/api/auth/callback/google
//server
export async function getServerSideProps(){
  const providers = await getProviders();
  return{
    props:{
        providers
    }
  }
}

export default signin