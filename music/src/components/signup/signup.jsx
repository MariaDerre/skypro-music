import React from "react";
import * as S from './signup.style'
import App from '../../App'

function SignUp() {
    return(
      <S.Wrapper>
      <S.GlobalStyles/>
      <S.ContainerSignUp>
        <S.ModalBlock>
          <S.ModalFormLogin>
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
              class="password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              class="password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignUpEnt>
              <S.ModalBtnSignUpEntA onClick={(e) => {
                  e.preventDefault();
                  App();}}>Зарегистрироваться</S.ModalBtnSignUpEntA>
            </S.ModalBtnSignUpEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
    )
}

export default SignUp;