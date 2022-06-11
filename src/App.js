import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

import Accueil from "./page/Welcome/Accueil";
import Connexion from "./page/Welcome/Connexion";
import Inscription from "./page/Welcome/inscription";


class App extends React.Component {

  render() { 
    return (
      <Router>
           <Routes>
              <Route exact path='/' element={< Accueil/>}></Route>
              <Route exact path='/connexion' element={< Connexion/>}></Route>
              <Route exact path='/inscription' element={< Inscription/>}></Route>          
          </Routes>
       </Router>
    );
  }
}

export default App;
