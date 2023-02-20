import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page:string;
    selectedPage:string,
    setSelectedPage:(value:string)=>void;
}

const Link = ({
    page,
    selectedPage,
    setSelectedPage
}: Props) => {
    const lowerCasepage=page.toLowerCase().replace(/ /g,'')
    
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