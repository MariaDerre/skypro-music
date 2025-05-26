import './App.css'
import NavMenu from './components/navMenu/navMenu';
import Tracklist from './components/tracklist';
import Sidebar from './components/sidebar';
import AudioPlayer from './components/audioplayer';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100%;
  height: 100%;
  font-family: "StratosSkyeng", sans-serif;
  color: #ffffff;
}

@font-face {
  font-family: "StratosSkyeng";
  src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("../fonts/StratosSkyeng.woff2") format("woff2"),
    url("../fonts/StratosSkyeng.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: "StratosSkyeng", sans-serif;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
}

ul li {
  list-style: none;
}
`


function App() {
return(
  <div className="wrapper">
  <div className="container">
    <main className="main">
      <NavMenu/>
      <Tracklist/>
      <Sidebar/>
    </main>
    <AudioPlayer/>
    <footer className="footer"></footer>
  </div>
</div>
);
}

export default App
