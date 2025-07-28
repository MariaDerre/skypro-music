import * as S from './signin.style'
import App from '../../App' 
import SignUp from '../signup/signup'

function SignIn() {
    return(
    <S.Wrapper>
      <S.GlobalStyles/>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin action="#">
            <a href="../">
              <S.ModalLogo>
                <S.ModalLogoImg src="img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              class="login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              class="password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter>
              <S.ModalBtnEnterA onClick={(e) => {
                  e.preventDefault();
                  App();}}>
                Войти</S.ModalBtnEnterA>
            </S.ModalBtnEnter>
            <S.ModalBtnSignUp>
              <S.ModalBtnSignUpA onClick={(e) => {
                  e.preventDefault();
                  SignUp();}}>
                Зарегистрироваться</S.ModalBtnSignUpA>
            </S.ModalBtnSignUp>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
    )
}

export default SignIn