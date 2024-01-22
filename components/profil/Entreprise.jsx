"use client"
import {useState,useEffect} from "react"
import Layout from "@/app/components/layouts/LayoutClient"
import {getSecteurBySlug} from "@/app/utils/data";
import {GlobalOutlined,HomeOutlined} from "@ant-design/icons"
import Link from "next/link"
import {Button,Image} from "@nextui-org/react"
import {MailIcon} from "@/app/components/icons/MailIcon"
import {BACKEND_URL,VisiteSiteOfUserFromLink} from "@/app/fcts/helper"
const Entreprise=({detail})=>{ 

    const handleVisiteSiteweb=(id,site)=>{
        VisiteSiteOfUserFromLink(id,site);
    }
       
    return (
        <div className="shadow-sm bg-white mt-4 rounded-md overflow-hidden">
            <div className="border-b  border-gray-100 py-2 flex flex-row gap-2 justify-between items-end px-2 py-1 text-white font-bold ">
                <h2 className="text-xl text-blue-400 flex-1 font-bold">
                    {detail.utilisateurNom || detail.nom}
                </h2>
                <h2 className="text-sm text-blue-400 text-[11px] flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                    </svg>

                    {detail.utilisateurVille || detail.ville}
                </h2>
                {/* <div alt="Ajouter au favoris" className="flex gap-3">
                    <svg width="24px" height="24px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M45.35 6.1709H19.41C16.8178 6.17618 14.3333 7.20827 12.5003 9.04123C10.6674 10.8742 9.63528 13.3587 9.62999 15.9509V52.2709C9.6272 53.3655 9.92973 54.4392 10.5036 55.3713C11.0775 56.3034 11.9 57.057 12.8787 57.5474C13.8573 58.0377 14.9533 58.2454 16.0435 58.1471C17.1337 58.0488 18.1748 57.6484 19.05 56.9909L31.25 47.8509C31.5783 47.6074 31.9762 47.4759 32.385 47.4759C32.7938 47.4759 33.1917 47.6074 33.52 47.8509L45.71 56.9809C46.5842 57.6387 47.6246 58.0397 48.7142 58.1387C49.8038 58.2378 50.8994 58.0311 51.8779 57.5418C52.8565 57.0525 53.6793 56.3001 54.2537 55.3689C54.8282 54.4378 55.1317 53.365 55.13 52.2709V15.9509C55.1247 13.3587 54.0926 10.8742 52.2597 9.04123C50.4267 7.20827 47.9422 6.17618 45.35 6.1709Z" fill="#ffffff"></path> </g>
                    </svg>
                    <MailIcon size="24px" />
                </div> */}
            </div>
            <div className="py-2 flex flex-row">
                <div className="mr-7 px-6 border-r border-white">
                    {
                        detail.logo!==null ?
                            <Image isZoomed width={300} className="h-full min-h-[220px]" src={BACKEND_URL+detail.logo}  />:
                            <Image isZoomed width={300} className="h-full min-h-[220px]" src={"https://cdn.dribbble.com/users/2063813/screenshots/5934965/media/e6338ab02e83c112c5127f321aff0e09.png"}  />

                    }
                    <div className='mt-2 items-center w-full justify-center flex'>
                        <Link href={`/${detail.utilisateurSlug || detail.slug}`}>
                            <Button color="primary" size="sm" variant="light">visiter</Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-1 justify-between w-full border-l pl-7">
                    <div className=" border-b border-white">
                        <div className="font-bold"><u>Adresse : </u></div>
                        <div className="text-sm">{detail.utilisateurAdresse || detail.adresse}</div>
                    </div>
                    <div className="flex-1 text-justify py-5 text-sm pr-3">
                        <h2 className="font-bold"><u>A Propos</u></h2>
                        <div className="text-md">{detail.description || detail.description}</div>
                    </div>
                    <div className="flex-col gap-1">
                        <h2 className="font-bold"><u>Contact</u></h2>
                        <div className="border-t border-white text-sm w-full flex gap-1">
                            <span className="mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </span>
                            <Link href={`mailto:${detail?.emailAdresse}`}><Button color="primary" size="sm" variant="light">{"Email : "+detail.emailAdresse}</Button></Link>
                        </div>
                        <div className="border-t border-white text-sm w-full py-2 flex gap-1">
                            <span className="mt-1"><GlobalOutlined style={{height:2}} /></span>
                            <Button onPress={()=>handleVisiteSiteweb(detail.id,detail.siteweb)} color="primary" size="sm" variant="light">{"site web : "+detail.siteweb}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Entreprise