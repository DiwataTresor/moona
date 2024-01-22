"use client"
import React, { useEffect, useState,useRef } from 'react'
import Tableau from "@/components/table/Tableau"
import Link from "next/link"
import { Modal as ModalAnt, Spin, notification } from "antd"
import Section2 from '../_layouts/section/Section2'
import { EyeFilled, LockOutlined, MessageOutlined } from '@ant-design/icons'
import { SITEWEB_URL, deleteData, getData, postData } from '@/fcts/helper'
import { Button,Input,Select,SelectItem, Modal, ModalBody, ModalHeader,ModalContent ,ModalFooter,useDisclosure, Textarea, Divider} from '@nextui-org/react'
import { Eye } from '@/components/icons/Eye'
import { MailIcon } from '@/components/icons/MailIcon'
import { Delete } from '@/components/icons/Delete'
import {LockIcon} from "@/components/icons/LockIcon"
import moment from 'moment'
import { NewspaperIcon, Send } from 'lucide-react'
import { Editor } from '@tinymce/tinymce-react';

const page = () => {
    const [data, setData] = useState([]);
    const [api, contextHolder] = notification.useNotification();
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [spinning, setSpinning] = useState(false);
    const [feedBack, setFeedBack] = useState("")
    const [isSaving, setIsSaving] = useState(false)
    const editorRef = useRef(null);
    const colones = [
        { name: "ID", uid: "id", sortable: true },
        { name: "DATE INSC", uid: "dateCreation" },
        { name: "EMAIL", uid: "emailAdresse", sortable: true },
        { name: "ACTIONS", uid: "actions" },
    ];
    const INITIAL_VISIBLE_COLUMNS = ["id", "dateCreation", "emailAdresse", "actions"];
    const cellule = (ligne, colone) => {
        const cellValue = ligne[colone];
        switch (colone) {
            case "dateCreation":
                return (
                    <div className='text-center justify-center'>
                        {moment(ligne[colone]).format("DD/MM/YYYY HH:mm:ss")}
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
                            title: "Suppression",
                            content: `Voulez-vous vraiment supprimer ${ligne.emailAdresse}?`,
                            okText: "Supprimer",
                            cancelText: "Annuler",
                            onOk: () => {
                                deleteData("newsletters", { mail: ligne.id }).then(r => {
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
                'Opération bien éffectuée',
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
       onOpen()
    }
    const handleAdd=(e)=>{
        e.preventDefault();
        setIsSaving(true);
        let f=Object.fromEntries(new FormData(e.target));
        f.contenu=editorRef.current.getContent()
       
        postData("sendNewsletters",f).then(r=>{
            if(r.success){
                openNotification();
                onOpenChange();
            }else{
                openNotificationError();
            }
           
        }).catch(err => {
            openNotificationError();
            console.log(err);
        }).finally(()=>{
            setIsSaving(false);
        })
        // log();
    }
    const log = () => {
        if (editorRef.current) {
          console.log(editorRef.current.getContent());
        }
      };
    const datas=()=>{
        getData("newsletters").then(r=>{setData(r.data)});
    }
    useEffect(() => {
        datas();
    }, [])
    
    return (
        <>
        {contextHolder}
        <Section2 titre={"Gestion newsletters"} titreIcone={<MessageOutlined />}>
            <Tableau
                hideBtnNouveau={false}
                handleBtnNouveau={handleBtnNouveau}
                btnnouveauText="Nouveau newsletters"
                coloneSearch={"emailAdresse"}
                columns={colones}
                datas={data}
                INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS}
                cellule={cellule} />
        </Section2>
        <Modal 
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="top-center"
        >
          <ModalContent>
            {(onClose) => (
            <form onSubmit={handleAdd}>
              <>
                <ModalHeader className="flex flex-col gap-1 mb-5">
                    <div className='flex gap-4'>
                        <NewspaperIcon />
                        Nouveau newsletters
                    </div>
                </ModalHeader>
                <ModalBody className="">
                
                  {/* <Divider /> */}
                  <div className="flex flex-col gap-8">
                  <Input
                        isRequired
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    name="objet"
                    type="text"
                    label="Votre objet"
                    labelPlacement="outside"
                  
                  />
                  
                    {/* <Textarea
                        name='contenu'
                        rows={8}
                        isRequired
                        endContent={
                            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                          }
                        minRows={7}
                        label="Votre message"
                        labelPlacement='outside'
                        className='max-w-full' /> */}
                    <h5>Votre message</h5>
                    <Editor
                    onExecCommand={()=>onOpen()}
                    tagName='contenu'
                        apiKey='cglpv6qgadh8qekgh1qakp108inqvgw5hi7pki6qft7h7z2k'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue=""
                        init={{
                        height: 500,
                        menubar: false,
                        
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                    />
                
                </div>
                  <div className="text-center items-center">{feedBack}</div>
                </ModalBody>
                <ModalFooter>
                  <Button startContent={<Send />} isLoading={isSaving} type="submit" color="primary">
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
    )
}

export default page