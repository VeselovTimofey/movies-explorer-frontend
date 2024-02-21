import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../index.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
            </>
          } />
        </Routes>
      </>
    );
  }
}

export default App;
