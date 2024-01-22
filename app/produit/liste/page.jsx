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

const page=()=>{
  const [evnts,setEvnts]=useState([])
  const [spinning,setSpinning]=useState(false);
  const [api, contextHolder] = notification.useNotification();
 
  const del=(id)=>{
    Modal.confirm({
      title:"Suppression",
      content:"Voulez-vous vraiment supprimer cet événement",
      okText:"Supprimer",
      cancelText:"Annuler",
      onOk:()=>{
        setSpinning(true);
        deleteData("evenement",{id:id})
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
        'Message bien envoyé',
    duration: 4,
    });
};
const openNotificationError = () => {
    api.error({
    message: 'Message',
    description:
        'Echec d\'envoie, veuillez reessayer plutard',
    duration: 4,
    });
};
const datas=()=>{
  getData("adminEvenement").then(r=>setEvnts(r.data));
}
  useEffect(()=>{
    datas();
  },[])
  return (
    <Spin spinning={spinning}>
      {contextHolder}
    <Section2 cl="bg-" bg="bg-slate-200" titre="Liste des événements enregistrés">
      <div className={" py-[30px]"}>
          
          <div className="grid grid-cols-2 gap-3 flex-wrap">
             {
              evnts?.map((e,i)=>{
                return(
                  <div className="">
                    <Card id={e.id} dateDebut={e.dateDebut} dateFin={e.dateFin} dtPublication={e.datePublication} img={e.img} titre={e.nom} lieu={e.lieu} description={e.description} del={del} />
                  </div>
                )
              })
             }
          </div>
      </div>
    </Section2>
    </Spin>
  );
}
export default page
