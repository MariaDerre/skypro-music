import React from 'react'
import './App.css'
import NavMenu from './components/navMenu';
import Tracklist from './components/tracklist';
import Sidebar from './components/sidebar';
import AudioPlayer from './components/audioplayer';

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
