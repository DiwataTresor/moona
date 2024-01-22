"use client";
import {useState,useEffect} from "react"
import Image from "next/image"
import { telephone,email,adresse } from "@/app/utils/helper";
import { Input } from 'antd';
import Card from "./Card"
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Spin,Modal,notification} from 'antd';
import Section from "@/app/_layouts/section/Section"
import Section2 from "@/app/_layouts/section/Section2"
import {getData,deleteData} from "@/fcts/helper"

const Liste=({produits})=>{
  const [getProduits,setGetProduits]=useState(produits)
  const [spinning,setSpinning]=useState(false);
  const [api, contextHolder] = notification.useNotification();
 
  const del=(id)=>{
    Modal.confirm({
      title:"Suppression",
      content:"Voulez-vous vraiment supprimer ce produit",
      okText:"Supprimer",
      cancelText:"Annuler",
      onOk:()=>{
        setSpinning(true);
        deleteData("produit",{id:id})
          .then(r=>{
            if(r.success){
              openNotification();
              datas()
            }else
            {
              openNotificationError();
            }
          }).catch(e=>openNotificationError()).finally(()=>{
            setSpinning(false);
          })
      }
    })
  }
  const openNotification = () => {
    api.success({
    message: 'Mise à jour',
    description:
        'Opération bien éffectuée',
    duration: 4,
    });
};
const openNotificationError = () => {
    api.error({
    message: 'Message',
    description:
        'Echec d\'operation, veuillez reessayer plutard',
    duration: 4,
    });
};

const datas=()=>{
  getData("produits").then(r=>setGetProduits(r.data));
}
  useEffect(()=>{
    //datas();
  },[])
  return (
    <Spin spinning={spinning}>
      {contextHolder}
        <div cl="bg-" bg="bg-slate-200" titre="Liste des produits enregistrés">
        <div className={" py-[30px]"}>
            
            <div className="grid grid-cols-3 gap-6">
                {
                getProduits?.map((e,i)=>{
                    return(
                    <div className="">
                        <Card id={e.id} nom={e.nom} dateCreation={e.dateCreation}  img={e.img} proprietaire={e.proprietaire} lieu={e.lieu} description={e.description} del={del} />
                    </div>
                    )
                })
                }
            </div>
        </div>
        </div>
    </Spin>
  );
}
export default Liste
