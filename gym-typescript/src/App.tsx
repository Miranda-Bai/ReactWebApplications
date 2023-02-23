import Navbar from "@/scenes/navbar"
import { useEffect, useState,useRef } from "react"
import { SelectedPage } from "@/shared/types";
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import OurClasses from '@/scenes/ourclasses'
import ContactUs from "@/scenes/contactus"
import Footer from "@/scenes/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfpage, setIsTopOfpage] = useState<boolean>(true)
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement>(null)
  const sidebarMenuBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfpage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfpage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    
    const closeSidebar = (event:Event)=>{
      // console.log("@click", isMenuToggled)
      if(sidebarRef && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)&& sidebarMenuBtnRef && sidebarMenuBtnRef.current && !sidebarMenuBtnRef.current.contains(event.target as Node)){
        // console.log("click", isMenuToggled)
        setIsMenuToggled(false)
      }
    }
    document.addEventListener("click", closeSidebar)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", closeSidebar)
      // console.log("unmount", isMenuToggled)
    }
    
  },[])
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfpage={isTopOfpage}
        isMenuToggled={isMenuToggled}
        setIsMenuToggled={setIsMenuToggled}
        sidebarRef={sidebarRef}
        sidebarMenuBtnRef={sidebarMenuBtnRef}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
