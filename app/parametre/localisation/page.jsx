"use client"
import { useState, useEffect } from "react"
import { postData, getData, deleteData, updateData, SITEWEB_URL } from "@/fcts/helper"
import Tableau from "@/components/table/Tableau"
import Layout from "@/components/layouts/LayoutDashboard"
import Section from "@/app/_layouts/section/Section"
import Section2 from "@/app/_layouts/section/Section2"
import { Tabs, Tab, Select, SelectItem } from '@nextui-org/react';
import { Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@nextui-org/react"
import { Delete } from "@/components/icons/Delete"
import { Modal as ModalAnt, Spin, notification } from "antd"
import SelectorIcon from "@/components/icons/SelectorIcon"
// import Nouveau from "./Nouveau"
// import Liste from "./Liste"
const page = () => {
    const [produits, setProduits] = useState([]);
    const [dataProvinces, setDataProvinces] = useState([]);
    const [dataTerritoires, setDataTerritoires] = useState([]);
    const [territoiresByProvince,setTerritoiresByProvince]=useState([]);
    const [dataVilles, setDataVilles] = useState([]);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [api, contextHolder] = notification.useNotification();
    const [spinning, setSpinning] = useState(false);
    const [feedBack, setFeedBack] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [formulaireSelected, setFormulaireSelected] = useState("province")

    // POUR TABLEAU
    // PROVINCES
    const colonesProvinces = [
        { name: "ID", uid: "id", sortable: true },
        { name: "PROVINCES", uid: "province" },
        { name: "NBRE PROFILS", uid: "nbProfil" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const INITIAL_VISIBLE_COLUMNS_PROVINCES = ["province", "nbProfil", "actions"];
    const celluleProvince = (ligne, colone) => {
        const cellValue = ligne[colone];
        switch (colone) {
            case "province":
                return (
                    <div className="text-center items-center justify-center">
                        {ligne.province}
                    </div>
                )
                break;
            case "actions":
                return (<div className="flex flex-row gap-3 justify-center items-center">
                    <Button onPress={() => {
                        ModalAnt.confirm({
                            title: "Suppression",
                            content: `Voulez-vous vraiment supprimer la province ${ligne.province}?`,
                            okText: "Supprimer",
                            cancelText: "Annuler",
                            onOk: () => {
                                deleteData("province", { idProvince: ligne.id }).then(r => {
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
    const handleBtnNouveauProvince = () => {
        setFormulaireSelected("province");
        onOpen();
    }
    const handleAddProvince = (e) => {
        e.preventDefault();
        ModalAnt.confirm({
            title: "Ajout secteur",
            content: "Voulez-vous vraiment ajouter cette province ?",
            okText: "Ajouter",
            cancelText: "Annuler",
            onOk: () => {
                setIsSaving(true);
                let data = Object.fromEntries(new FormData(e.target));
                onOpen();
                postData("creationProvince", data).then(r => {
                    if (r.success) {
                        setIsSaving(false);
                        openNotification();
                        onOpenChange();
                        getProvinces();
                        document.querySelector("#f").reset();
                    } else {
                        openNotificationError(r.msg);
                        onOpen();
                    }
                }).finally(() => {
                    setIsSaving(false);
                })
            }
        })
    }
    // TERRITOIRES
    const colonesTerritoires = [
        { name: "ID", uid: "id", sortable: true },
        { name: "TERRITOIRE/DISTRICT", uid: "territoire" },
        { name: "PROVINCE", uid: "province" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const INITIAL_VISIBLE_COLUMNS_TERRITOIRES = [ "territoire", "province", "actions"];
    const celluleTerritoire = (ligne, colone) => {
        const cellValue = ligne[colone];
        switch (colone) {
            case "province":
                return (
                    <div className="text-center items-center justify-center">
                        {ligne.province}
                    </div>
                )
                break;
            case "actions":
                return (<div className="flex flex-row gap-3 justify-center items-center">
                    <Button onPress={() => {
                        ModalAnt.confirm({
                            title: "Suppression",
                            content: `Voulez-vous vraiment supprimer le territoire ${ligne.territoire}?`,
                            okText: "Supprimer",
                            cancelText: "Annuler",
                            onOk: () => {
                                deleteData("territoire", { idTerritoire: ligne.id }).then(r => {
                                    if (r.success) {
                                        getTerritoire();
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
    const handleBtnNouveauTerritoire = () => {
        setFormulaireSelected("territoire");
        onOpen();
    }
    const handleAddTerritoire = (e) => {
        e.preventDefault();
        ModalAnt.confirm({
            title: "Ajout territoire",
            content: "Voulez-vous vraiment ajouter ce territoire ?",
            okText: "Ajouter",
            cancelText: "Annuler",
            onOk: () => {
                setIsSaving(true);
                let data = Object.fromEntries(new FormData(e.target));
                console.log(data);
                onOpen();
                postData("creationTerritoire", data).then(r => {
                    if (r.success) {
                        setIsSaving(false);
                        openNotification();
                        onOpenChange();
                        getTerritoire();
                        document.querySelector("#f").reset();
                    } else {
                        openNotificationError(r.msg);
                        onOpen();
                    }
                }).finally(() => {
                    setIsSaving(false);
                })
            }
        })
    }
    // VILLES
    const colonesVilles = [
        { name: "ID", uid: "id", sortable: true },
        { name: "VILLE/COMMUNE", uid: "ville" },
        { name: "PROVINCE", uid: "province" },
        { name: "TERRITOIRE/DISTRICT", uid: "territoire" },
        { name: "ACTIONS", uid: "actions" },
    ];
    const INITIAL_VISIBLE_COLUMNS_VILLES = ["ville", "province", "territoire", "actions"];
    const celluleVille = (ligne, colone) => {
        const cellValue = ligne[colone];
        switch (colone) {
            case "province":
                return (
                    <div className="text-center items-center justify-center">
                        {ligne.province}
                    </div>
                )
                break;
            case "actions":
                return (<div className="flex flex-row gap-3 justify-center items-center">
                    <Button onPress={() => {
                        ModalAnt.confirm({
                            title: "Suppression",
                            content: `Voulez-vous vraiment supprimer le territoire ${ligne.territoire}?`,
                            okText: "Supprimer",
                            cancelText: "Annuler",
                            onOk: () => {
                                deleteData("territoire", { idTerritoire: ligne.id }).then(r => {
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
    const handleBtnNouveauVille = () => {
        setFormulaireSelected("ville");
        onOpen();
    }
    const handleAddVille = (e) => {
        e.preventDefault();
        ModalAnt.confirm({
            title: "Ajout Ville",
            content: "Voulez-vous vraiment ajouter cette ville ?",
            okText: "Ajouter",
            cancelText: "Annuler",
            onOk: () => {
                setIsSaving(true);
                let data = Object.fromEntries(new FormData(e.target));
                console.log(data);
                onOpen();
                postData("creationVille", data).then(r => {
                    if (r.success) {
                        setIsSaving(false);
                        openNotification();
                        onOpenChange();
                        getVille();
                        document.querySelector("#f").reset();
                    } else {
                        openNotificationError(r.msg);
                        onOpen();
                    }
                }).finally(() => {
                    setIsSaving(false);
                })
            }
        })
    }
    // TABLEAU
    const getProduits = () => {
        alert("bien fait");
    }
    const getListe = () => {
        getData("produits").then(r => {
            setProduits(r?.data);
        })
    }

    const getProvinces = () => {
        getData("provinces").then(r => {
            setDataProvinces(r.data);
        })
    }
    const getTerritoire = () => {
        getData("territoires").then(r => {
            setDataTerritoires(r?.data);
        })
    }
    const getVille= () => {
        getData("villes").then(r => {
            setDataVilles(r?.data);
        })
    }

    const selectProvince = async (e) => {
        const s=e.target.value;
        // setTerritoiresByProvince(dataProvinces.filter(r => r.id === s));
        console.log(dataProvinces);
        console.log(s);
        const t=dataTerritoires.filter(r => r.provinceId === parseInt(e.target.value));
        setTerritoiresByProvince(t);
    }   

    useEffect(() => {
        // getListe();
        getProvinces();
        getTerritoire();
        getVille()
    }, [])
    const openNotification = () => {
        api.success({
            message: 'Mise à jour',
            description:
                'Modification bien éffectuée',
            duration: 4,
        });
    };
    const openNotificationError = (msg = "") => {
        api.error({
            message: 'Mise à jour',
            description:
                msg == "" ? 'Echec de mise à jour, veuillez reessayer plutard' : msg,
            duration: 4,
        });
    };
    return (
        <>
            {contextHolder}

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

                                <span>Province</span>

                            </div>
                        }
                    >
                        <Tableau
                            handleBtnNouveau={handleBtnNouveauProvince}
                            btnnouveauText="Nouvelle province"
                            coloneSearch={"province"}
                            columns={colonesProvinces}
                            datas={dataProvinces}
                            INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS_PROVINCES}
                            cellule={celluleProvince} />
                    </Tab>
                    <Tab
                        key="territoire"
                        title={
                            <div className="flex items-center space-x-2">

                                <span>Territoire/District</span>

                            </div>
                        }
                    >
                        <Tableau
                            handleBtnNouveau={handleBtnNouveauTerritoire}
                            btnnouveauText="Nouveau territoire"
                            coloneSearch={"territoire"}
                            columns={colonesTerritoires}
                            datas={dataTerritoires}
                            INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS_TERRITOIRES}
                            cellule={celluleTerritoire} />
                    </Tab>
                    <Tab
                        key="ville"
                        title={
                            <div className="flex items-center space-x-2">

                                <span>Ville/Commune</span>

                            </div>
                        }
                    >
                         <Tableau
                            handleBtnNouveau={handleBtnNouveauVille}
                            btnnouveauText="Nouvelle ville"
                            coloneSearch={"ville"}
                            columns={colonesVilles}
                            datas={dataVilles}
                            INITIAL_VISIBLE_COLUMNS={INITIAL_VISIBLE_COLUMNS_VILLES}
                            cellule={celluleVille} />
                    </Tab>
                </Tabs>
            </Section2>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            {
                                formulaireSelected === "province" &&
                                <form id="f" onSubmit={handleAddProvince}>
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Nouvelle province</ModalHeader>
                                        <ModalBody className="">

                                            <div className="flex flex-col gap-8">
                                                <Input
                                                    isRequired

                                                    name="province"
                                                    type="text"
                                                    label="Nom province"
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
                            }
                            {
                                formulaireSelected === "territoire" &&
                                <form id="fTerritoire" onSubmit={handleAddTerritoire}>
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Nouveau Territoire</ModalHeader>
                                        <ModalBody className="">

                                            <div className="flex flex-col gap-8">
                                                <Select label="Province"
                                                    isRequired
                                                    placeholder="Selectionner la province"
                                                    labelPlacement="outside"
                                                    name="province"
                                                    disableSelectorIconRotation
                                                >
                                                    {
                                                        dataProvinces.map((p, i) =>
                                                            <SelectItem key={p.id} value={p.id}>{p.province}</SelectItem>
                                                        )
                                                    }
                                                </Select>
                                                <Input
                                                    isRequired
                                                    name="territoire"
                                                    type="text"
                                                    label="Nom territoire"
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
                            }
                            {
                                formulaireSelected === "ville" &&
                                <form id="fTerritoire" onSubmit={handleAddVille}>
                                    <>
                                        <ModalHeader className="flex flex-col gap-1">Nouvelle ville</ModalHeader>
                                        <ModalBody className="">

                                            <div className="flex flex-col gap-8">
                                                <Select label="Province"
                                                    isRequired
                                                    placeholder="Selectionner la province"
                                                    labelPlacement="outside"
                                                    name="province"
                                                    disableSelectorIconRotation
                                                    onChange={selectProvince}
                                                >
                                                    {
                                                        dataProvinces.map((p, i) =>
                                                            <SelectItem key={p.id} value={p.id}>{p.province}</SelectItem>
                                                        )
                                                    }
                                                </Select>
                                                <Select label="Territoire/District"
                                                    isRequired
                                                    placeholder="Selectionner le territoire"
                                                    labelPlacement="outside"
                                                    name="territoire"
                                                    disableSelectorIconRotation
                                                >
                                                    {
                                                        territoiresByProvince.map((p, i) =>
                                                            <SelectItem key={p.id} value={p.id}>{p.territoire}</SelectItem>
                                                        )
                                                    }
                                                </Select>
                                                <Input
                                                    isRequired
                                                    name="ville"
                                                    type="text"
                                                    label="Nom ville/commune"
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
                            }
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default page