import NavMenu from './components/navMenu/navMenu';
import Tracklist from './components/tracklist/tracklist';
import Sidebar from './components/sidebar/sidebar';
import AudioPlayer from './components/audioplayer/audioplayer';
import * as S from './app.style'
import { AppRoutes } from './routes';

function App() {
return(
    <S.Wrapper>
    <S.GlobalStyles/>
    <S.Container>
      <AppRoutes/>
      <S.Main>
        <NavMenu/>
        <Tracklist/>
        <Sidebar/>
      </S.Main>
      <AudioPlayer/>
      <footer className="footer"></footer>
    </S.Container>
  </S.Wrapper>
);
}

export default App
