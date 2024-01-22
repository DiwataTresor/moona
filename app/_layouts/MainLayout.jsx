"use client"
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme, Alert } from 'antd';
import LayoutHeader from "./Header/Header";

import LayoutLogin from "./../login/LayoutLogin"
import { ContextProvider, useStateContext } from './../context/ContextProvider'
import { NextUIProvider } from "@nextui-org/react";
import { SiteHeader } from "@/components/site-header"
import Cookies from "js-cookie"
// import {antd} from "antd"

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  LaptopOutlined
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const items2 =
  [
    {
      "menu": "Accueil",
      "icon": UserOutlined
    },
    { "menu": "Saisie", "icon": UserOutlined },
    { "menu": "Rapport", "icon": LaptopOutlined },
    { "menu": "Ressources", "icon": NotificationOutlined },
    { "menu": "Parametres", "icon": ShopOutlined }
  ].map((icon, index) => {
    const key = String(index + 1);
    return {
      key: `${icon.menu} ${key}`,
      icon: React.createElement(icon.icon),
      label: `${icon.menu}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  });
const MainLayout = ({ children }) => {
  const colorBgContainer = "blue";
  const statut = Cookies.get("connected") ? Cookies.get("connected") : false;
  const [connected, setConnected] = useState(Cookies.get("connected") ? Cookies.get("connected") : false);
  const cl = (id) => {
    alert(id);
  }
  return (
    <NextUIProvider>
      <ContextProvider>
        {
          connected ?
            <Layout hasSider className="text-white overflow-hidden">

              <Layout
                className="site-layout"
                style={{
                  marginLeft: 0,
                }}
              >
                <Header
                  style={{
                    padding: 0,
                    position: "fixed"
                  }}
                  className="bg-gray-300 border-b-0 w-screen"
                >
                  {/* <LayoutHeader /> */}
                  <SiteHeader />
                </Header>
                <Content
                  style={{
                    margin: '4px 4px 0',
                    overflow: 'initial',
                  }}
                  className="px-3 p-5 min-h-[800px]"
                >
                  <div
                    style={{
                      padding: 5,
                      color: "black"
                    }}
                    className="light min-h-[400px] mt-[100px] mx-[130px] py-3 px-5"
                  >
                    {/* <Alert className="" messsage="connecté comme :" type="info" /> */}
                    {children}
                  </div>
                </Content>
                <Footer
                  style={{
                    textAlign: 'center',
                  }}
                >
                  Moona SARL ©2024 Developpé par TDL
                </Footer>
              </Layout>
            </Layout>
            :
            <div className="h-screen bg-gray-200 py-auto flex flex-col justify-between items-center pt-[100px]" style={{backgroundSize:"cover",backgroundImage:`url(https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHdhbGxwYXBlciUyMHRleHR1cmV8ZW58MHx8MHx8fDA%3D)`}}>
              <LayoutLogin />
            </div>

        }
      </ContextProvider>
    </NextUIProvider>
  );
};
export default MainLayout;
