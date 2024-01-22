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
const page = () => {
    const [data, setData] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [api, contextHolder] = notification.useNotification();
    const [spinning, setSpinning] = useState(false);
    const [btnLoading,setBtnLoading] = useState(false);
    const colones = [
        { name: "ID", uid: "id", sortable: true },
        { name: "SECTEUR", uid: "secteur" },
        { name: "SLUG", uid: "slug", sortable: true },
        { name: "PROFILS", uid: "secteurNb", sortable: true },
        { name: "ACTIONS", uid: "actions" },
    ];
    const INITIAL_VISIBLE_COLUMNS = ["id", "secteur", "slug", "secteurNb", "actions"];
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
    const openNotification = () => {
        api.success({
            message: 'Mise à jour',
            description:
                'Modification bien éffectuée',
            duration: 4,
        });
    };
    const openNotificationError = () => {
        api.error({
            message: 'Mise à jour',
            description:
                'Echec de mise à jour, veuillez reessayer plutard',
            duration: 4,
        });
    };
    const handleBtnNouveau = () => {
        onOpen();
    }
    const handleAdd=(e)=>{
        e.preventDefault();
       ModalAnt.confirm({
        title:"Ajout",
        content:"Voulez-vous vraiment ajouter ?",
        okText:"Ajouter",
        cancelText:"Annuler",
        onOk:()=>{
            setBtnLoading(true);
            let dataForm=Object.fromEntries(new FormData(e.target));
            postData("secteur")
        }
       })
    }
    const datas = () => {
        getData("secteurs").then(r => {
            setData(r.data);
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
            <Section showRootLink={true} titre={"Gestion des secteurs"} cl="text-xl" titreIcone={<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" /></svg>}>
                <Spin spinning={spinning}>
                    <Tableau
                        color={"primary"}
                        hideBtnNouveau={false}
                        showStatus={false}
                        nbOfRows={10}
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
                        <>
                            <ModalHeader className="flex flex-col gap-1">Ajout secteur</ModalHeader>
                            <ModalBody>
                                <form name="f" id="f" onSubmit={handleAdd} className="flex flex-col gap-4">
                                    <Input
                                        autoFocus
                                        //   endContent={
                                        //     <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        //   }
                                        label="Secteur"
                                        placeholder="Entrer le nom du secteur"
                                        variant="bordered"
                                        isRequired
                                        name="secteur"
                                    />
                                    <Input
                                        //   endContent={
                                        //     <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                        //   }
                                        label="Slug"
                                        placeholder="Entrer le slug"
                                        type="text"
                                        variant="bordered"
                                        isRequired
                                        name="slug"
                                    />
                                    <Button type="submit" className="hidden" id="test">ok</Button>
                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button type="button" color="danger" variant="flat" onPress={onClose}>
                                    Annuler
                                </Button>
                                <Button type="button" isLoading={btnLoading} color="primary" onPress={()=>{
                                    document.querySelector("#test").click();
                                }}>
                                    Enregistrer
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default page