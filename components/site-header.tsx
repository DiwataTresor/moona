"use client"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import Menu from "@/components/menubar/Menu"
import {Card,Button} from "@nextui-org/react"
import {Modal} from "antd"
import Image from "next/image"
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import logo from "@/app/assets/logo.png"
import { useRouter } from 'next/navigation';

export function SiteHeader() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 sticky fixed top-0 z-990 w-full border-b-0 shadow-md flex items-center justify-center h-[110px]">
      <Link href="/" className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-center space-x-4">
          <Image src={logo} width={250} height={100} alt="Logo" />
        </div>
        {/* <MainNav items={siteConfig.mainNav} /> */}
      </Link>
      <div className="px-[200px] pb-2 bg-none">
      {/* MENU */}
        <Menubar className="border-0 bg-blue-500 text-white">
          <MenubarMenu>
            <MenubarTrigger>Profil</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/profil/nouveau">
                  Nouveau
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/profil/profils">
                  Profils
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/profil/profilparprovince">
                  Profil par province
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/profil/profilparsecteur">
                  Profil par secteur
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/profil/profilparsecteur">
                  Profil par type de compte
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/profil/suspended">
                  Utilisateurs bloqués
                </Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Recherche</MenubarTrigger>
            <MenubarContent>
              {/* <MenubarItem>
                Un profil 
              </MenubarItem>
              <MenubarSeparator /> */}
              <MenubarItem>
                <Link href="/recherche/motcle">
                  Profil par mot clé
                </Link>
              </MenubarItem>
             
              {/* <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                  <MenubarItem>Notes</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                Print... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem> */}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Statistiques</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
              <Link href="/statistique/statistiqueparville">
                  Visites par villes
                </Link>
              </MenubarItem>
              <MenubarItem>
              <Link href="/statistique/recherche">
                  Recherche
                </Link>
              </MenubarItem>
              <MenubarItem>
                Inscriptions 
              </MenubarItem>
              <MenubarItem>
                Visites 
              </MenubarItem>
              <MenubarSeparator />
              {/* <MenubarSub>
                <MenubarSubTrigger>Find</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Search the web</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Find...</MenubarItem>
                  <MenubarItem>Find Next</MenubarItem>
                  <MenubarItem>Find Previous</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator /> */}
              {/* <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem> */}
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Evenements</MenubarTrigger>
            <MenubarContent>
              
              <MenubarItem>
                <Link href="/evenement/nouveau">
                  Nouveau
                </Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/evenement/liste">
                  Liste
                </Link>
              </MenubarItem>
             
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Messages</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/message/to_all">
                  Nouveau à tous
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/message/envoye">
                  {"Boite d'envois"}
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <Link href="/message/reception">
                  Boite Reception
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              
              {/* <MenubarItem>Lus</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Non lus</MenubarItem>
              <MenubarSeparator /> */}
              <MenubarItem>Archives</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Parametres</MenubarTrigger>
            <MenubarContent>
             
              <MenubarItem><Link href="/parametre/contact">Gestion de nos contacts</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem><Link href="/parametre/secteur">Gestion des secteurs</Link></MenubarItem>
              <MenubarItem><Link href="/parametre/province">Provinces</Link></MenubarItem>
              <MenubarItem><Link href="/parametre/commune">Commune</Link></MenubarItem>
              <MenubarSeparator />
              <MenubarItem><Link href="/parametre/utilisateur">Utilisateur</Link></MenubarItem>
              <MenubarSeparator />
              
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger><Button onPress={()=>{
              Modal.confirm({
                title:"Quitter",
                content:"Voulez-vous vraiment vous deconnecter ?",
                okText:"Oui",
                cancelText:"Annuler",
                onOk:()=>{
                  router.push("/");
                  localStorage.removeItem("connected");
                }
              })
            }} variant="ghost" className="border-none" color="default">Deconnexion</Button></MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      {/* MENU */}
      </div>
    </div>
  )
}

// import {
//   Menubar,
//   MenubarCheckboxItem,
//   MenubarContent,
//   MenubarItem,
//   MenubarMenu,
//   MenubarRadioGroup,
//   MenubarRadioItem,
//   MenubarSeparator,
//   MenubarShortcut,
//   MenubarSub,
//   MenubarSubContent,
//   MenubarSubTrigger,
//   MenubarTrigger,
// } from "@/components/ui/menubar"

// export function MenubarDemo() {
//   return (
//     <Menubar>
//       <MenubarMenu>
//         <MenubarTrigger>File</MenubarTrigger>
//         <MenubarContent>
//           <MenubarItem>
//             New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem>
//             New Window <MenubarShortcut>⌘N</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem disabled>New Incognito Window</MenubarItem>
//           <MenubarSeparator />
//           <MenubarSub>
//             <MenubarSubTrigger>Share</MenubarSubTrigger>
//             <MenubarSubContent>
//               <MenubarItem>Email link</MenubarItem>
//               <MenubarItem>Messages</MenubarItem>
//               <MenubarItem>Notes</MenubarItem>
//             </MenubarSubContent>
//           </MenubarSub>
//           <MenubarSeparator />
//           <MenubarItem>
//             Print... <MenubarShortcut>⌘P</MenubarShortcut>
//           </MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>Edit</MenubarTrigger>
//         <MenubarContent>
//           <MenubarItem>
//             Undo <MenubarShortcut>⌘Z</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem>
//             Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
//           </MenubarItem>
//           <MenubarSeparator />
//           <MenubarSub>
//             <MenubarSubTrigger>Find</MenubarSubTrigger>
//             <MenubarSubContent>
//               <MenubarItem>Search the web</MenubarItem>
//               <MenubarSeparator />
//               <MenubarItem>Find...</MenubarItem>
//               <MenubarItem>Find Next</MenubarItem>
//               <MenubarItem>Find Previous</MenubarItem>
//             </MenubarSubContent>
//           </MenubarSub>
//           <MenubarSeparator />
//           <MenubarItem>Cut</MenubarItem>
//           <MenubarItem>Copy</MenubarItem>
//           <MenubarItem>Paste</MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>View</MenubarTrigger>
//         <MenubarContent>
//           <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
//           <MenubarCheckboxItem checked>
//             Always Show Full URLs
//           </MenubarCheckboxItem>
//           <MenubarSeparator />
//           <MenubarItem inset>
//             Reload <MenubarShortcut>⌘R</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem disabled inset>
//             Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
//           </MenubarItem>
//           <MenubarSeparator />
//           <MenubarItem inset>Toggle Fullscreen</MenubarItem>
//           <MenubarSeparator />
//           <MenubarItem inset>Hide Sidebar</MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>Profiles</MenubarTrigger>
//         <MenubarContent>
//           <MenubarRadioGroup value="benoit">
//             <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
//             <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
//             <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
//           </MenubarRadioGroup>
//           <MenubarSeparator />
//           <MenubarItem inset>Edit...</MenubarItem>
//           <MenubarSeparator />
//           <MenubarItem inset>Add Profile...</MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//     </Menubar>
//   )
// }

