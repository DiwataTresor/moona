
import Cookies from "js-cookie"
export const BACKURL="http://localhost/root/api/backend-rva-tresorerie/";
export const APIURL=`${BACKURL}api.php`;
// const entite=JSON.parse(Cookies.get("profil"))?.entite || null;
const entite=null;
export const capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
export const getData=async (query)=>{
    let response={};
    await fetch(`${APIURL}?qry=${query}&entite=${entite}`,{method:"GET"})
    .then(r=>r.json())
    .then(r=>{response=r});
    return response;
}
export const postData=async (query,dataToPost)=>{
    let response=[];
    try
    {
    let form=new FormData();
    form.append("qry",query);
    form.append("data",JSON.stringify(dataToPost));
    // form.append("entite",entite);
    await fetch(`${APIURL}`,{method:"POST",body:form})
    .then(r=>r.json())
    .then(r=>{response=r});
    
    }catch(r)
    {
        response={"success":false,"msg":r}
    }
    return response;
}
export const deleteData=async (query,dataToPost)=>{
    let response=[];
    try
    {
        let form=new FormData();
        form.append("delete",query);
        form.append("data",JSON.stringify(dataToPost));
        // form.append("entite",entite);
       
        await fetch(`${APIURL}`,{method:"POST",body:form})
        .then(r=>r.json())
        .then(r=>{response=r});
        
    }catch(r)
    {
        response={"success":false,"msg":r}
    }
    return response;
}
export const updateData=async (query,dataToPost)=>{
    let response=[];
    try
    {
    let form=new FormData();
    form.append("update",query);
    form.append("data",JSON.stringify(dataToPost));
    // form.append("entite",entite);
    await fetch(`${APIURL}`,{method:"POST",body:form})
    .then(r=>r.json())
    .then(r=>{response=r});
    
    }catch(r)
    {
        response={"success":false,"msg":r}
    }
    return response;
}
export const getEntites=async()=>{
    let resultat=[];
    await getData("entites").then(r=>{resultat=r.data});
    return resultat;
}