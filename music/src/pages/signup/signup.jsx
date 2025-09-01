import * as S from './signup.style'
import App from '../../App'
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    localStorage.setItem('user', 'true');
    navigate('/');
  };

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
              className="login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              className="password-first"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              className="password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignUpEnt>
              <S.ModalBtnSignUpEntA onClick={handleRegister}>Зарегистрироваться</S.ModalBtnSignUpEntA>
            </S.ModalBtnSignUpEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignUp>
    </S.Wrapper>
    )
}

export default SignUp;