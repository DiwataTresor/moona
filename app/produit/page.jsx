"use client"
import {useState,useEffect} from "react"
import {postData,getData,deleteData,updateData,SITEWEB_URL} from "@/fcts/helper"
import Tableau from "@/components/table/Tableau"
import Layout from "@/components/layouts/LayoutDashboard"
import Section from "@/app/_layouts/section/Section"
import Section2 from "@/app/_layouts/section/Section2"
import { Tabs,Tab } from '@nextui-org/react';
import Nouveau from "./Nouveau"
import Liste from "./Liste"
const page=()=>{
    const [produits,setProduits]=useState([]);
    const getProduits=()=>{
        alert("bien fait");
    }
    const getListe=()=>{
        getData("produits").then(r=>{
            setProduits(r?.data);
        })
    }
    useEffect(()=>{
        getListe();
    },[])
    return(
        <Section2 titre="Gestion de produits page d'accueil">
            <Tabs 
                fullWidth={true}
                aria-label="Options" 
                color="primary" 
                variant="underlined"
                classNames={{
                tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                cursor: "w-full bg-[#22d3ee]",
                tab: "max-w-full px-0 h-12",
                tabContent: "group-data-[selected=true]:text-[#06b6d4]"
                }}
            >
                <Tab
                key="photos"
                title={
                    <div className="flex items-center space-x-2">
                    
                    <span>Nouveau produit</span>
                    
                    </div>
                }
                >
                    <Nouveau getProduits={getProduits} />
                </Tab>
                <Tab
                key="music"
                title={
                    <div className="flex items-center space-x-2">
                    
                    <span>Liste des produits en cours</span>
                    
                    </div>
                }
                >
                     <Liste produits={produits} />
                </Tab>
            </Tabs>
        </Section2>
    )
}
export default page