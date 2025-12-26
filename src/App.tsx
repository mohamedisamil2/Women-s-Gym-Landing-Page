import { useEffect, useState } from "react"
import NavBar from "./Navigation/NavBar"
import { SelectedPage } from "./Shared/share"
import Home from "./Page/Home"
import Benefits from "./Page/Benefits"
import OurClasses from "./Page/OurClasses"
import ContactUs from "./Page/ContactUs"

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
      <div className="container flex flex-col mx-auto bg-gray-50">
      <NavBar
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      
      <Home
      // isTopOfPage={isTopOfPage}
      // selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage}/>
      </div>  
  )
}

export default App
