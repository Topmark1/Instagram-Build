import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Modal from '../components/Modal';
import {useSession} from 'next-auth/react';
import {db} from '../firebase';
import {collection,orderBy,query,getDocs} from 'firebase/firestore';


export default function Home({posts}){
 
//const{data:session} = useSession();
 

return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Instagram</title>
      </Head>
      {/*Header*/}
      <Header />
     {/*Feed*/}
      <Feed />
     {/*Modal*/}
     <Modal />
    </div>
  )
}