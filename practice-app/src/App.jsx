import React from 'react';
import { HomePage } from './Pages/Home';
import { TableForm } from './Pages/TableComponent';
import { MapComponent } from './Pages/GoogleMaps';
import { NavBar } from './Pages/Nav';
import { SecretLair } from './Pages/SecretLair';
import { PhineasContact } from './Pages/Phineas';
import { FerbContact } from './Pages/Ferb';
import { DoofenshmirtzContact } from './Pages/Doofenshmirtz';
import { MonogramContact } from './Pages/Monogram';
import { Footer } from './Pages/Footer';
import { Events } from './Pages/Events';
import { IndividualOrg } from './Pages/IndividualOrg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from './background.jpg'

function App() {

  const backImg = {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    minHeight:'100vh',
    overflow: 'hidden'
  }

  return (
    <Router>
    <div style={backImg}>
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="table" element={<TableForm />} />
        <Route path="/maps" element={<MapComponent />} />
        <Route path="/secretlair" element={ <SecretLair />}/>
        <Route path="/Phineas" element={ <PhineasContact />}/>
        <Route path="/Ferb" element={ <FerbContact />}/>
        <Route path="/Doofenshmirtz" element={ <DoofenshmirtzContact />}/>
        <Route path="/Monogram" element={ <MonogramContact />}/>
        <Route path="/Events" element={ <Events />}/>
        <Route path="/IndividualOrg" element={ <IndividualOrg />}/>
      </Routes>
      <Footer />
    </>
    </div>
    </Router>
  );
}

export default App;
