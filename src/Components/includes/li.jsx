import { Link } from "react-scroll"
const Li = ({ text, link = null }) => {

    return (
      <li>
        {
          link?
          <Link  activeClass='text-yellow-500' className='text-white font-bold text-sm' to={link} spy={true} duration={500} smooth={true}  > {text.toLocaleUpperCase()}</Link>
          :
          <span>{text}</span>
        }

      </li>
    )
  }


export default Li ;
