import React, { useEffect, useState } from 'react';
import './App.css';
import { Provider } from './Context';
import Navbar from './Components/Navbar/Navbar';
import Music from './Components/Music/Music';
import Pagination from './Components/Pagination/Pagination';
import {getMusic} from './NapsterApi/api';

function App() {

  // States
  const [page, setPage] = useState(1);
  const [music, setMusic] = useState([]);
  const [genreId, setGenreId] = useState('g.115'); //g.115 -> pop id

  // React Hook
  useEffect( () => {

    getMusic(genreId, page).then(response => {
        setMusic([...response.tracks]); 
        console.log(...music);
    });

  }, 
  [genreId, page]);

  // JSX
  return (
    <Provider value={
      {
        page: page,
        music: music,
        genreId: genreId,
        actions: {
          setPage: setPage,
          setMusic: setMusic,
          setGenreId: setGenreId
        }
      }
    } >
      <div className="app_container">
        <Navbar />
        <Music />
        <Pagination />
      </div>
    </Provider>
  );

}

export default App;
