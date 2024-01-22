import {getData} from "./helper";
export const roles=[
    {
        code:"AS",
        libelle:"Administrateur Système"
    },
    {
        code:"AE",
        libelle:"Administrateur Entité"
    },
    {
        code:"CAIS",
        libelle:"Caissier"
    },
    {
        code:"SEC",
        libelle:"Sécretaire"
    }
];
export const getCaisses=async(entite)=>{
    let resultat={};
    getData(`caisses&id=${entite}`).then(r=>{
        resultat=r.data;
    }).catch(err=>{
        resultat={
            success:false,
            msg:err
        }
    });
}
export const getDataForEntite=async(entite,qry)=>{
    let resultat={};
    await getData(`${qry}&entite=${entite}`).then(r=>{
        resultat=r;
    }).catch(err=>{
        resultat={
            success:false,
            msg:err
        }
    });
    return resultat;
}