import React from 'react'
import PlayListImg01 from "../img/playlist01.png"
import PlayListImg02 from "../img/playlist02.png"
import PlayListImg03 from "../img/playlist03.png"

class Sidebar extends React.Component {
    render() {
    return(
              <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__icon">
            <svg alt="logout">
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={PlayListImg01}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={PlayListImg02}
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className="sidebar__item">
              <a className="sidebar__link" href="#">
                <img
                  className="sidebar__img"
                  src={PlayListImg03}
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
}

export default Sidebar;