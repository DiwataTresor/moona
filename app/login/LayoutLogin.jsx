"use client"
import Image from "next/image"
import login from "./../assets/login.png"
import Form from "./Form.jsx"
import logo from "./../assets/logo.png"
import { Divider } from "antd"
const LayoutLogin=()=>{
    return (
        <div className="flex-1 justify-between items-center pt-[40px]">
            <h2 className=" text-3xl font-bold text-center flex text-gray-300 justify-center items-center">Bienvenue chez <span className="font-bold ml-4 text-3xl">« Moona »</span></h2>
            <div className="flex flex-row shadow-md rounded-md min-h-[500px] w-[850px] m-auto bg-white overflow-hidden mt-4">
                <div className="flex-1 flex flex-col gap-4 justify-center px-3 text-center bg-white">
                    {/* <div className="items-center justify-center align-center  w-full">
                        <Image src="/logo_moona.png" width={200} height={90} className="m-auto" />
                    </div> */}
                    <div className="items-center">
                        <div className="mb-4 text-xl">Se connecter</div>
                        <Form />
                    </div>
                    <h4 className="text-center text-gray-500 flex items-center justify-center">Vous n'avez pas de compte ? 
                        <span className="flex ml-3"><a href="#" className="underline cursor-pointer">s'inscrire</a></span>
                    </h4>
                </div>
                <div className="flex-1 relative" style={{backgroundSize:"cover", backgroundImage:`url(https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=3308&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}>
                    <Image src={""} className="w-full h-full grayscale-0 opacity-10" />
                    <Image src="/logo_moona.png" width={200} height={90} className="m-auto absolute top-2 left-[25%]" />
                </div>
            </div>
            <p className="text-sm text-center text-white mt-4">2024 © Moona SARL </p>
        </div>
        )
    }
    
    export default LayoutLogin;