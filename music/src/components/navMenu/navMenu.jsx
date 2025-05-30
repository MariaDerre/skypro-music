import BurgerMenu from '../burgerMenu/burgerMenu'
import * as S from './navMenu.style'

function NavMenu() {
return(
    <S.MainNav>
        <S.NavLogo >
        <S.LogoImage src="img/logo.png" alt="logo" />
        </S.NavLogo>
        <BurgerMenu />
    </S.MainNav>
)
    }

export default NavMenu