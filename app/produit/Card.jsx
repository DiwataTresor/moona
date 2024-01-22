import { inter, lora, poiret, pignon, poppins, michroma } from "@/styles/fonts";
import {CalendarOutlined} from "@ant-design/icons"
// import {Divider} from "antd"
import {Chip,Button} from "@nextui-org/react"
import {BACKEND_URL} from "@/fcts/helper"
import moment from "moment"
import Section from "@/app/_layouts/section/Section"
import Section2 from "@/app/_layouts/section/Section2"
import { nl2br } from 'react-js-nl2br';
import {Card as CardN, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

const Card=({id,nom,dateCreation,img,proprietaire,description,lieu,del})=>{
    return(
        // <Section titre={<div>{nom}</div>}
        // >
        <CardN className="max-w-fit h-full max-w-[500px]">
            <CardHeader className="flex gap-3">
                {/* <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
                /> */}
                <div className="flex flex-col">
                <p className="text-md">{nom}</p>
                {/* <p className="text-small text-default-500">nextui.org</p> */}
                </div>
            </CardHeader>
            <Divider/>
            <CardBody>
                <div className="flex flex-col gap-4">
                    <div className="max-w-[100%]">
                        <Image src={BACKEND_URL+img} className="h-full max-h-52 w-fit" />
                    </div>
                    <p>{nl2br(description)}</p>
                </div>
            </CardBody>
            <Divider/>
            <CardFooter>
                {/* <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
                >
                
                Supprimer
                </Link> */}
                <Button onPress={()=>del(id)} color="primary">Supprimer</Button>
            </CardFooter>
        </CardN>
            
        // </Section>
    )
}
export default Card



{/* <div className="flex gap-4">
            <div className="bg-white rounded-md shadow-md mb-[20px] w-[40%] h-[300px] relative mt-8" style={{backgroundImage:`url(${BACKEND_URL}${img})`, backgroundSize:"cover"}}>
                
                <h3 className="text-black flex  mx-[0%] h-[70px]  px-2 bg-white bg-opacity-50 bottom-[0%] absolute w-[100%] justify-center items-center text-md text-center">{"Rien du tout"}</h3>
            </div>
                <div className="flex flex-col justify-between h-full ">
                    <div className="flex items-end justify-end">
                        <Chip color="primary" size="sm">Publié le {moment(dateCreation).format("DD/MM/YYYY")}</Chip>
                    </div>
                    <div className="text-md pt-[50px]">{description?.substr(0,200)}</div>
                    <Divider />
                    <div className="flex flex-row  justify-between">
                        <div className="flex flex-row gap-2 justify-start items-start text-md">
                            <svg width="25px" height="25px" stroke-width="1.4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#fb6a09"><path d="M12 19a7 7 0 100-14 7 7 0 000 14zM12 19v2M5 12H3M12 5V3M19 12h2" stroke="#fb6a09" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>
                                LIEU : 
                            </span>
                            {lieu}
                        </div>
                        <div>
                            <Button isIconOnly color={"danger"} onPress={()=>del(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div> */}