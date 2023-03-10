import Image from "next/image";
import {signOut,useSession,signIn} from 'next-auth/react';
import {
    MagnifyingGlassIcon,
PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars4Icon
} from "@heroicons/react/24/outline";
import {
    HomeIcon
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import {useRecoilState} from "recoil"
import { modalState } from "../atoms/modalAtoms";



function Header(){
const {data:session} = useSession();
console.log('session')
console.log(session)
const router = useRouter();
const [open,setOpen] = useRecoilState(modalState)

    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

            {/*Left */}
            <div onClick={()=>router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
            <img className="mt-4" src="https://links.papareact.com/ocw" alt="" />
            </div>
            <div onClick={()=>router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
            <img className="mt-4" src="https:links.papareact.com/jjm"
            alt='' />
            </div>

            {/*Middle */}
            <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input className="bg-gray-100 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" type="text" placeholder="search" />
            </div>
            </div>

            {/*Right */}
            <div className="flex items-center justify-end space-x-4">
        <HomeIcon onClick={()=>router.push('/')} className="navBtn"/>
        <Bars4Icon className="h-6 md:hidden cursor-pointer" />
        {session?(
            <>
            <div className="relative navBtn animate-pulse hover:animate-none"> 
        <PaperAirplaneIcon className="navBtn -rotate-45" />
        <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white">3</div>
        </div>
        <PlusCircleIcon onClick={()=>setOpen(true)} className="navBtn"/>
        <UserGroupIcon className="navBtn"/>
        <HeartIcon className="navBtn"/>

        <img src={session.user.image}
        onClick={signOut}  alt='profile pic' className="h-10 w-10 rounded-full cursor-pointer" /> 
            </>

        ):
        (
        <button onClick={signIn}>Sign In</button>
        )
        }
            </div>
            </div>
            </div>
        )
}
//"./profile.PNG"
export default Header