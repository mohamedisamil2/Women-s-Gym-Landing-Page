import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import logo from "../assets/Logo.png"
import Link from "./Link"
import type { SelectedPage } from "../Shared/share"
import { useState } from "react"
import Button from "../Components/Button"

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function NavBar({isTopOfPage ,selectedPage, setSelectedPage}: Props) {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const navbarBackground = isTopOfPage ? "":"bg-pink-200 drop-shadow";

    return (
    
        <nav className="w-5/6">
        <div className= {`${navbarBackground } container flex justify-between items-center fixed top-0 z-30 p-6 w-full `}>  
            {/* logo and links */}
            <div className="flex space-x-20">
                {/* logo */}
                <div>
                    <img src={logo} alt="" />
                </div>
                {/* links */}
                <div className="max-[479px]:hidden flex space-x-6 min-[480px]:block">
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
              </div>
              
              {/* button */}
              <div className="max-[479px]:hidden min-[480px]:block flex flex-row-reverse space-x-4">
                  <button>Sign Up</button>
                  <Button setSelectedPage={setSelectedPage}>Become a Member</Button>
              </div>

              {/* menu */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="max-[479px]:block min-[480px]:hidden cursor-pointer bg-amber-500 rounded-full p-3">
              <Bars3Icon className="h-6 w-6 text-gray-50"/>    
              </button>
          </div>
          
          {/* Mobile Menu */}
      {isMenuOpen && (
          <div className="z-40 max-[479px]:block fixed right-0 bottom-0 h-full w-80 bg-pink-100 p-6 min-[480px]:hidden">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
              <XMarkIcon className="h-8 w-8 text-gray-700" />
            </button>
          </div>

            {/* Menu Items */}
            <div className="ml-[33%] flex flex-col space-y-6 text-2xl">
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
      </div>  
    )
    }

  </nav>
  )
}

export default NavBar
