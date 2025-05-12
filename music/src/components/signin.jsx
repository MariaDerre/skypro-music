import React from "react";
import '../signin.css' 
import LogoModal from "../img/logo_modal.png"

function SignIn() {
    return(
    <div class="wrapper">
      <div class="container-enter">
        <div class="modal__block">
          <form class="modal__form-login" action="#">
            <a href="../">
              <div class="modal__logo">
                <img src={LogoModal} alt="logo" />
              </div>
            </a>
            <input
              class="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              class="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button class="modal__btn-enter">
              <a href="../index.html">Войти</a>
            </button>
            <button class="modal__btn-signup">
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}

export default SignIn