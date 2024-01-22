"use client"
import { useEffect, useState } from "react";
import Tableau from "@/components/table/Tableau"
import Layout from "@/components/layouts/LayoutDashboard"
import moment from "moment"
import { postData, getData, deleteData, updateData, SITEWEB_URL } from "@/fcts/helper"
import { Button } from "@nextui-org/react"
import { Edit } from "@/components/icons/Edit"
import { Delete } from "@/components/icons/Delete"
import { Eye } from "@/components/icons/Eye"
import { MailIcon } from "@/components/icons/MailIcon"
import Link from "next/link"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input } from "@nextui-org/react";
import { Modal as ModalAnt, Spin, notification } from "antd"
import { LockOutlined, UnlockOutlined } from "@ant-design/icons"
import Section from "@/app/_layouts/section/Section2"
import Cookies from "js-cookie"
import { Users } from "lucide-react";
const page = () => {
    const [data, setData] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const [spinning, setSpinning] = useState(false);

    const colones = [
        { name: "VILLE", uid: "ville" },
        { name: "VISITEURS", uid: "nb", sortable: true }
    ];
    const INITIAL_VISIBLE_COLUMNS = [ "ville", "nb"];
    const cellule = (ligne, colone) => {
        const cellValue = ligne[colone];
        switch (colone) {
            case "datecreation":
                return (
                    <div>
                        {moment(ligne[colone]).format("DD/MM/YYYY")}
                    </div>
                )
                break;
            case "nom":
                return (
                    <div>
                        {ligne.nom} {ligne.postnom} {ligne.prenom}
                    </div>
                )
                break;
            case "actions":
                return (<div className="flex flex-row gap-3 justify-center items-center">
                    <Button onPress={() => {
                        ModalAnt.confirm({
                            title: "Profil",
                            content: `Voulez-vous vraiment ${ligne.enabled === 'A' ? 'bloquer' : 'debloquer'} ${ligne?.secteur}?`,
                            okText: `${ligne.enabled === 'A' ? 'Bloquer' : 'debloquer'}`,
                            cancelText: "Annuler",
                            onOk: () => {
                                updateData("block", { id: ligne.id, v: ligne.enabled == 'A' ? 'B' : 'A' }).then(r => {
                                    if (r.success) {
                                        datas();
                                        openNotification();
                                    } else {
                                        openNotificationError();
                                    }
                                }).catch(r => {

                                }).finally(() => {
                                    setSpinning(false);
                                })
                            }
                        })
                    }} isIconOnly size="md" color={"primary"} variant="light"><Edit /></Button>
                    {/* <Link href={`${SITEWEB_URL}${ligne.slug}`} target="_blank"><Button isIconOnly size="md" color={"success"} variant="light"><Eye /></Button></Link> */}
                    {/* <Link href={`/message/${ligne.idUser}`}><Button isIconOnly size="md" color={"success"} variant="light"><MailIcon /></Button></Link> */}
                    <Button onPress={() => {
                        ModalAnt.confirm({
                            title: "Suppression",
                            content: `Voulez-vous vraiment supprimer ${ligne?.secteur}?`,
                            okText: "Supprimer",
                            cancelText: "Annuler",
                            onOk: () => {
                                deleteData("secteur", { idSecteur: ligne.id }).then(r => {
                                    if (r.success) {
                                        datas();
                                        openNotification();
                                    } else {
                                        openNotificationError();
                                    }
                                }).catch(r => {

                                }).finally(() => {
                                    setSpinning(false);
                                })
                            }
                        })
                    }} isIconOnly size="md" color={"danger"} variant="light"><Delete />
                    </Button>
                </div>);
                break;
            default:
                return <div className="text-center items-center justify-center">{cellValue}</div>
        }

    }
   
    
   
    const datas = () => {
        getData("visitesparville").then(r => {
            setData(r?.data);
        }).catch(err => {
            console.log("erreur : ", err);
        })
    }
    useEffect(() => {
        datas();
    }, []);
    return (
        <>
            {contextHolder}
            <Section 
                showRootLink={true} 
                titre={"Visiteurs par ville"} 
                cl="text-xl" 
                titreIcone={
                    <Users />
                }>
                <Spin spinning={spinning}>
                    <Tableau
                        color={"primary"}
                        hideBtnNouveau={true}
                        showStatus={false}
                        nbOfRows={10}
                        btnnouveauText="Nouveau secteur"
                        coloneSearch={"ville"}
                        columns={colones}
                        datas={data}
                        INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                        cellule={cellule} />
                </Spin>
            </Section>
           
        </>
    );
}
export default page