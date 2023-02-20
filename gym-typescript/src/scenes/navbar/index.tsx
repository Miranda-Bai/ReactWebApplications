import { useState } from "react"
import { XMarkIcon, Bars3Icon} from "@heroicons/react/24/outline"
import Logo from "@/assets/Logo.png"
import Link from "./Link"

type Props = {
  selectedPage:string,
    setSelectedPage:(value:string)=>void;
}

const Navbar = ({selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    
  return (
    <nav>
        <div
            className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
        >
          <div className={`${flexBetween} mx-auto w-5/6`}>
            <div className={`${flexBetween} w-full gap-16`}>
              <img src={Logo} alt="logo" />
              {/* Right side */}
              <div className={`${flexBetween} w-full`}>
                {/* inner left side */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link 
                    page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    />
                  <Link 
                  page="Benefits"
                  selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                     />
                  <Link 
                  page="Our Classes"
                  selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} 
                    />
                  <Link 
                  page="Contact Us" 
                  selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <Bars3Icon className="h-6 w-6 text-blue-500">Sign In</Bars3Icon>
                  <XMarkIcon className="h-6 w-6 text-blue-500">Become a member</XMarkIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar