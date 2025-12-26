import AnchorLink from "react-anchor-link-smooth-scroll"
import type { SelectedPage } from "../Shared/share";

type Props = {
    page:string ;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

function Link({ page, selectedPage, setSelectedPage, }: Props) {
    
    const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "") as SelectedPage;


  return (
        <AnchorLink
            className={`${selectedPage == lowerCasePage ? "text-red-500" : ""}
            transition duration-500 hover:text-red-400
            `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
  )
}

export default Link
