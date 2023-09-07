import { FaUserAlt,  FaTelegramPlane, FaAtom } from "react-icons/fa";
import { HeaderBlock, Menu, Logo, NavUl, NavLi, Link} from "./Header.styled";

// FaAtom,
export default function Header() {
    return (
<HeaderBlock>
    <Menu>
        <Logo>Protas</Logo>
        <NavUl >
            <NavLi >
                <Link to="/"><FaUserAlt />About</Link>
            </NavLi>
            <NavLi>
                <Link to="/projects"><FaAtom />Projects</Link>
            </NavLi>
            <NavLi >
                <Link to="/contact"><FaTelegramPlane />Contact</Link>
            </NavLi>
        </NavUl>
    </Menu>
</HeaderBlock>
    )
};
