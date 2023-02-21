import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from "@/shared/types";

type Props = {
    page:string;
    selectedPage:SelectedPage,
    setSelectedPage:(value:SelectedPage)=>void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    const lowerCasepage=page.toLowerCase().replace(/ /g,'') as SelectedPage;
    
  return (
    <AnchorLink
        href={`#${lowerCasepage}`}
        className={`${selectedPage === lowerCasepage ? "text-primary-500":""} transition duration-500 hover:text-primary-300`}
        onClick={()=>setSelectedPage(lowerCasepage)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link