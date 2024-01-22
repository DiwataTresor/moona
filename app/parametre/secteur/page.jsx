"use client"
import {useEffect,useState} from "react";
import Tableau from "@/components/table/Tableau"
import Layout from "@/components/layouts/LayoutDashboard"
import moment from "moment"
import {postData,getData,deleteData,updateData,SITEWEB_URL, secteurs as getSecteurs} from "@/fcts/helper"
import {Button} from "@nextui-org/react"
import {Edit} from "@/components/icons/Edit"
import {Delete} from "@/components/icons/Delete"
import {Eye} from "@/components/icons/Eye"
import {MailIcon} from "@/components/icons/MailIcon"
import Link from "next/link"
import {Modal as ModalAnt,Spin,notification} from "antd"
import {LockOutlined,UnlockOutlined} from "@ant-design/icons"
import Section from "@/app/_layouts/section/Section2"
import {Select, SelectItem,Modal,ModalContent,ModalHeader,ModalBody,ModalFooter,Input,useDisclosure,Checkbox} from "@nextui-org/react"

const page=()=>{
    const [data,setData]=useState([]); 
    const [api, contextHolder] = notification.useNotification();
    const [spinning,setSpinning]=useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [feedBack,setFeedBack]=useState("");
    const [isLoading,setIsLoading]=useState(false)
    const [isSaving,setIsSaving]=useState(false);

    const colones = [
        {name: "ID", uid: "id", sortable: true},
        {name: "SECTEUR", uid: "secteur" },
        {name: "SLUG", uid: "slug",sortable: true},
        {name: "NOMBRE UTILISATEURS", uid: "secteurNb",sortable: true},
        {name: "IMG", uid: "img",sortable: true},
       
        {name: "ACTIONS", uid: "actions"},
      ];
      const INITIAL_VISIBLE_COLUMNS = ["id","secteur", "slug","img",'secteurNb',"actions"];
      const cellule=(ligne,colone)=>{
        const cellValue=ligne[colone];
        switch(colone)
        {
            
            case "secteur":
                return(
                    <div className="text-center items-center justify-center">
                        {ligne.secteur} 
                    </div>
                )
            break;
            case "slug":
                return(
                    <div className="text-center items-center justify-center">
                        {ligne.slug} 
                    </div>
                )
            break;
            case "actions":
                return (<div className="flex flex-row gap-3 justify-center items-center">
                    <Button onPress={()=>{
                        ModalAnt.confirm({
                            title:"Profil",
                            content:`Voulez-vous vraiment ${ligne.enabled==='A'?'bloquer':'debloquer'} le secteur ${ligne.secteur}?`,
                            okText:`${ligne.enabled==='A'?'Bloquer':'debloquer'}`,
                            cancelText:"Annuler",
                            onOk:()=>{
                               updateData("adminBlockSecteur",{id:ligne.id,v:ligne.enabled=='A'?'B':'A'}).then(r=>{
                                if(r.success)
                                {
                                    datas();
                                    openNotification();
                                }else
                                {
                                    openNotificationError();
                                }
                               }).catch(r=>{
                                
                               }).finally(()=>{
                                setSpinning(false);
                               })
                            }
                        })
                    }} isIconOnly size="md" color={"primary"} variant="light">{ligne.enabled==='A'?<LockOutlined />:<UnlockOutlined style={{color:"red"}} />}</Button>
                    <Link href={`/parametre/secteur/${ligne.slug}`}><Button isIconOnly size="md" color={"success"} variant="light"><Eye /></Button></Link>
                    {/* <Link href={`/message/${ligne.idUser}`}><Button isIconOnly size="md" color={"success"} variant="light"><MailIcon /></Button></Link> */}
                    <Button onPress={()=>{
                        ModalAnt.confirm({
                            title:"Suppression",
                            content:`Voulez-vous vraiment supprimer le secteur ${ligne.secteur}?`,
                            okText:"Supprimer",
                            cancelText:"Annuler",
                            onOk:()=>{
                               deleteData("secteur",{id:ligne.id}).then(r=>{
                                if(r.success)
                                {
                                    datas();
                                    openNotification();
                                }else
                                {
                                    openNotificationError();
                                }
                               }).catch(r=>{
                                
                               }).finally(()=>{
                                setSpinning(false);
                               })
                            }
                        })
                    }} isIconOnly size="md" color={"danger"} variant="light"><Delete /></Button>
                </div>);
            break;
            default:
                return <div className="text-center items-center justify-center">{cellValue}</div>
        }

      }
      const openNotification = () => {
        api.success({
        message: 'Mise à jour',
        description:
            'Modification bien éffectuée',
        duration: 4,
        });
    };
    const openNotificationError = (msg="") => {
        api.error({
        message: 'Mise à jour',
        description:
            msg==""?'Echec de mise à jour, veuillez reessayer plutard':msg,
        duration: 4,
        });
    };
    const handleBtnNouveau=()=>{
        onOpen();
    }
    const handleAdd=(e)=>{
       e.preventDefault();
       ModalAnt.confirm({
        title:"Ajout secteur",
        content:"Voulez-vous vraiment ajouter ce secteur ?",
        okText:"Ajouter",
        cancelText:"Annuler",
        onOk:()=>{
            setIsSaving(true);
            let data=Object.fromEntries(new FormData(e.target));
            onOpen();
            postData("creationSecteur",data).then(r=>{
                if(r.success){
                    setIsSaving(false);
                    openNotification();
                    onOpenChange();
                    datas();
                    document.querySelector("#f").reset();
                }else
                {
                    openNotificationError(r.msg);
                    onOpen();
                }
            }).finally(()=>{
                setIsSaving(false);
            })
        }
       })
    }

      const datas=()=>{
        getData("secteursAll").then(r=>{
            setData(r.data);
        })
      }
    useEffect(()=>{
        datas();
    },[]);
  return(
    <>
    {contextHolder}
    <Section 
        showRootLink={true} 
        titre={"Gestion des secteurs"} cl="text-xl" 
        titreIcone={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>}
    >
        <Spin spinning={spinning}>
        <Tableau 
                hideBtnNouveau={false} 
                handleBtnNouveau={handleBtnNouveau} 
                btnnouveauText="Nouveau secteur"
                coloneSearch={"secteur"} 
                columns={colones} 
                datas={data} 
                INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS} 
                cellule={cellule} />
        </Spin>
    </Section>
    <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
            <form id="f" onSubmit={handleAdd}>
              <>
                <ModalHeader className="flex flex-col gap-1">Nouveau secteur</ModalHeader>
                <ModalBody className="">
                
                  <div className="flex flex-col gap-8">
                  <Input
                        isRequired
                    
                    name="secteur"
                    type="text"
                    label="Nom secteur"
                    labelPlacement="outside"
                  
                  />
                  <Input
                    isRequired
                    
                    name="slug"
                    type="text"
                    label="Slug"
                    labelPlacement="outside"
                  
                  />
                </div>
                  <div className="text-center items-center">{feedBack}</div>
                </ModalBody>
                <ModalFooter>
                  <Button isLoading={isSaving} type="submit" color="primary">
                    Enregistrer
                  </Button>
                  <Button type="reset" variant="light" color="danger">
                    Annuler
                  </Button>
                </ModalFooter>
              </>
            </form>
            )}
          </ModalContent>
        </Modal>
    </>
    );
}
export default page