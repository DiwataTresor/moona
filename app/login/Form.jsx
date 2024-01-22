"use client";
import React,{useState} from 'react';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined } from '@ant-design/icons';
import {Modal, Space,Spin,Alert } from 'antd';
import { Button,Input } from '@nextui-org/react';
import {postData,BACKEND_URL} from "./../../fcts/helper";
import Cookies from "js-cookie"

const Form = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [spinning,setSpinning]=useState(false);
  const [feedBack,setFeedBack]=useState("");
  const [isLoading,setIsLoading] = useState(false);
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(e.target[1].value)
   
    setFeedBack("");
    setIsLoading(true);
    const datas=Object.fromEntries(new FormData(e.target));

    // let f=new FormData();
    // f.append("action","adminLogin");
    // f.append("data",JSON.stringify({login:datas.login,password:datas.password}))
      
    // fetch(BACKEND_URL+"api.php",{method:"POST",body:f}).then(r=>r.json()).then(r=>{
    //     if(r.success)
    //     {
    //       setFeedBack(<Alert message="Connexion bien etablie" type="success" showIcon />);
    //       Cookies.set("connected","true");
    //       Cookies.set("profil",JSON.stringify(r.profil));
    //       window.location.reload();
    //     }else
    //     {
    //         setFeedBack(<Alert message="Echec de connexion" type="error" showIcon />);
    //     }
    //   }).catch(e=>{
    //     Modal.error({
    //       title:"Connexion", content:"Une erreur s'est produite dans le systeme"
    //     });
    //     console.log(e);
    //   }).finally(()=>{
    //     setSpinning(false)
    //   })
  }
  return (
    <Spin  spinning={spinning}>
      <form id="formulaire" onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3 px-7'>
          <Input name="login" placeholder="Votre login" className="h-[60xp]" />
          <Input
            type='password'
            name="password"
            autoComplete='off'
            placeholder="Votre Mot de passe" className="w-full" 
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          />
           
            <Button isLoading={isLoading} type='submit' color='success' size='lg' className='text-white w-full'>Connexion</Button>
            <div className="mt-4">{feedBack}</div>
        </div>
      </form>
    </Spin>
   
  );
};
export default Form;