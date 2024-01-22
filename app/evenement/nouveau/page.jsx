"use client"
import {useState,useEffect} from "react"
import Section from "@/app/_layouts/section/Section"
import Section2 from "@/app/_layouts/section/Section2"
import {Textarea,Button,Input,Checkbox,Image} from "@nextui-org/react"
import {postData,getData,updateData, API_URL,BACKEND_URL} from "@/fcts/helper"
import {Modal,Alert,Divider,notification} from "antd"
import {Delete} from "@/components/icons/Delete"
import {Upload} from "@/components/icons/Upload"
import moment from "moment"
import Cookies from "js-cookie"
const page=()=>{
    const [feedBack,setFeedBack]=useState("");
   
    const [isLoading,setIsLoading]=useState(false);
    const [isLoadingLogo,setIsLoadingLogo]=useState(false);
    const [logo,setLogo]=useState("");
    const [associationsaffiliees,setAssociationsAffiliees]=useState(null);
    const [api, contextHolder] = notification.useNotification();
    const [profil,setProfil]=useState({});
    const [values,setValues]=useState({
        nom:"",
        dateDebut:moment().format("YYYY-MM-DD"),
        dateFin:moment().format("YYYY-MM-DD"),
        lieu:"",
        organisateur:"",
        datePublication:moment().format("YYYY-MM-DD"),
        description:""
    });
    const selectLogo=(e)=>{
        
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.addEventListener('load', (event) => {
            const imageProperties = {
            name: file.name,
            type: file.type,
            size: file.size,
            dataURL: event.target.result
            };
            setLogo(imageProperties.dataURL);
            console.log(logo);

            // Ajoutez l'élément image à votre page HTML où vous le souhaitez
        });

        reader.readAsDataURL(file);
    }
    const saveLogo=(e)=>{
        let pr=JSON.parse(Cookies.get('profil'));
        let fichier=document.querySelector("#photo");
        const formData = new FormData();
        formData.append("add","logo");
        formData.append('file', fichier.files[0]); 
        formData.append('utilisateur',pr.id);
        const options = {
            method: 'POST',
            body: formData,
            // headers: {
            //   // Ajouter les en-têtes nécessaires, par exemple pour spécifier le type de contenu
            //   'Content-Type': 'multipart/form-data'
            // }
        };
        setIsLoadingLogo(true);
        fetch(API_URL, options)
            .then(r=>r.json()).then(response => {
                openNotification();
            })
            .catch(error => {
                // Gérer les erreurs de la requête
                openNotificationError();
            }).finally(()=>{
                setIsLoadingLogo(false);
            })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
       
        Modal.confirm({
            title:"Profil",
            content:"Confirmez-vous cette mise à jour ?",
            okText:"Oui, enregistrer",
            cancelText:"Annuler",
            onOk:()=>{
                let pr=JSON.parse(localStorage.getItem('profil'));
                let fichier=document.querySelector("#photo");
                const formData = new FormData();
                formData.append("add","adminEvenemetNew");
                formData.append('file', fichier.files[0]); 
                formData.append("data",JSON.stringify(Object.fromEntries(new FormData(e.target))))
                formData.append('id',pr.id);
                const options = {
                    method: 'POST',
                    body: formData,
                    // headers: {
                    //   // Ajouter les en-têtes nécessaires, par exemple pour spécifier le type de contenu
                    //   'Content-Type': 'multipart/form-data'
                    // }
                };
                setIsLoading(true);
                fetch(API_URL, options)
                    .then(r=>r.json()).then(response => {
                        openNotification();
                        document.querySelector("#f").reset();
                        setImgActu("");
                        getEvenements();
                    })
                    .catch(error => {
                        // Gérer les erreurs de la requête
                        openNotificationError();
                    }).finally(()=>{
                        setIsLoading(false);
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
    return(
        <>
        <Section2 titre="Nouvel evenement ">
               {contextHolder}
                    <div className={ " flex flex-col gap-4"}>
                       
                        <div className="flex flex-row gap-7 w-full">
                            <div className="flex flex-col gap-4 w-[220px] justify-center items-center bg-gray-200 rounded-md">
                                Image evenement
                                <Button color="success" onClick={()=>{
                                    document.getElementById("photo").click(); 
                                }}><Upload /> Uploader</Button>
                                
                                {
                                   
                                    <div className=" pb-3 border-t flex flex-col gap-4 w-[220px] justify-center items-center bg-gray-200 rounded-md">
                                        <Image isZoomed width="200" height="200" src={logo} />
                                    </div>
                                }
                            </div>
                            <form onSubmit={handleSubmit} className="flex-1">
                                <input onChange={selectLogo} id="photo" type="file" className="hidden" name="photo" />
                                <input  type="text" className="hidden" name="add" value="test" />
                                <div className="flex-1 gap-2 flex flex-col">
                                    <div className="flex flex-row gap-3">
                                            <Input name="nom" type="text" label="Nom de l'événement" isRequired value={values.nom} onChange={(e)=>{
                                                setValues({...values, nom:e.target.value});
                                            }} />
                                        </div>
                                    <div className="flex flex-row gap-3">
                                            <Input name="dateDebut" type="date" label="Début" isRequired value={values.dateDebut} onChange={(e)=>{setValues({...values,dateDebut:e.target.value})}}  />
                                            <Input name="dateFin" type="date" label="Fin" isRequired value={values.dateFin} onChange={(e)=>{setValues({...values,dateFin:e.target.value})}}  />
                                        </div>
                                    <div className="flex flex-row gap-3">
                                            <Input name="lieu" type="text" label="Lieu " isRequired value={values.lieu} onChange={(e)=>{setValues({...values,lieu:e.target.value})}}  />
                                            <Input name="datePublication" type="date" label="Date publication " isRequired value={values.datePublication} onChange={(e)=>{setValues({...values,datePublication:e.target.value})}}  />
                                        </div>
                                    <div className="flex flex-row gap-3">
                                            <Input name="organisateur" type="text" label="Organisateur " isRequired value={values.organisateur} onChange={(e)=>{setValues({...values,organisateur:e.target.value})}}  />
                                        </div>
                                    <div className="flex flex-row gap-3">
                                            <Textarea name="description" type="text" label="Description " 
                                                isRequired 
                                                value={values.description} 
                                                onChange={(e)=>{setValues({...values,description:e.target.value})}}  
                                                className="max-w-full"
                                                minRows={4}
                                            />
                                        </div>
                                    <div className="items-center text-center mt-3 flex gap-4">
                                        <Button color="primary" type="submit">Enregistrer</Button>
                                        <Button color="primary" variant="light" type="reset">Annuler</Button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
               
            </Section2>
        </>
    )
}
export default page