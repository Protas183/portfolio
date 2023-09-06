import { FaUserAlt, FaAtom, FaTelegramPlane } from "react-icons/fa";
import { HeaderBlock, Menu, Logo, NavUl, NavLi, Link} from "./Header.styled";


export default function Header() {
    return (
           <HeaderBlock>
                <Menu>
                    <Logo>Protas</Logo> 
                    <NavUl >
                        <NavLi >
                            <Link to="/"><FaUserAlt />About</Link>
                        </NavLi>
                        <NavLi >
                            <Link to="/skills"><FaAtom />Skills</Link>
                        </NavLi>
                        <NavLi >
                            <Link to="/contact"><FaTelegramPlane />Contact</Link>
                        </NavLi>
                    </NavUl>
                </Menu> 
            </HeaderBlock>              
    )
};