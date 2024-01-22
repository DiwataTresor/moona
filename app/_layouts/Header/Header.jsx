import React from "react"
import Link from "next/link"
import {useRouter} from "next/navigation";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User,Input} from "@nextui-org/react";
import Cookies from "js-cookie"
const LayoutHeader=()=>{
  const router=useRouter();
    return (
        <div className="flex flex-row justify-between px-7 items-center">
          <h2 className="text-white font-bold text-2xl">
              <Link href={"/"}>GESTION TRESORERIE</Link>
          </h2>
          <div className="flex-1 flex-wrap md:flex-wrap md:mb-0 gap-1 mx-[35px]">
                <div className="flex flex-row overflow-hidden pl-6 pr-2 py-1 bg-white rounded-md mt-2">
                  <input type="text" className="h-[30px] outline-none flex-1" placeholder="Rechercher..." />
                  <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ccc">
                    <path d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z" stroke="#ccc" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                </div>
          </div>
          <div className="flex items-center gap-4 pt-3">
     
            <Dropdown placement="bottom-start">
              <DropdownTrigger className="w-[40px]">
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                  }}
                  className="transition-transform w-[45px] h-[45px] rounded-full"
                  // description="@tonyreichert"
                  // name="Trésor Diwata"
                />
              </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat" className="flex flex-col py-2 px-4 -mt-[6px]  rounded-md">
              {/* <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-bold">Signed in as</p>
                <p className="font-bold">@tonyreichert</p>
              </DropdownItem> */}
              <DropdownItem key="settings">
                Mon profil
              </DropdownItem>
              <DropdownItem key="team_settings">Mon journal</DropdownItem>
              {/* <DropdownItem key="analytics">
                Analytics
              </DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem> */}
              <DropdownItem key="logout" color="danger">
                <button onClick={()=>{
                Cookies.set("connected","false");
                window.location.reload()
                }}>Deconnexion</button>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    )
}

export default LayoutHeader;