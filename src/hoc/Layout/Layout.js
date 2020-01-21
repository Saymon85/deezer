import React from 'react';
import Header from '../../Components/Header/Header';
import Main from '../../Components/Main/Main';
import AudioPlayer from '../../Components/AudioPlayer/AudioPlayer';


const Layout = () => {
    return (
        <div>
          <Header />
          <Main />
          <AudioPlayer />
        </div>
    )
}

export default Layout;
