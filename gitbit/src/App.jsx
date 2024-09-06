import { useEffect } from 'react';
import './components/css/bootstrap.min.css';
import './components/css/style.css';
import './components/lib/animate/animate.min.css';
import './components/lib/owlcarousel/assets/owl.carousel.min.css';
import './App.css'
import './components/Mods.css'

import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Part5 from './components/Part5';
import Part6 from './components/Part6';
import Part7 from './components/Part7';
import Part8 from './components/Part8';
import Part9 from './components/Part9';
import Part10 from './components/Part10';
import Part11 from './components/Part11';
import Part12 from './components/Part12';

import Accounts from './components/Accounts/Accounts';
import Analysis from './components/PrimaryPage/Analysis';

import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';







function Approutes() {




  return (
      <Routes>
        <Route path="/" element={
          <>
            <div className="container-xxl bg-white p-0 main-container">
              <Part2/>
              <Part4/>
              <Part5/>
              <Part7/>
              <Part10/>
              <Part11/>
            </div>
            <Part12/>
          </>
        }>
        </Route>
        <Route path='/accounts' element={<Accounts/>}></Route>
        <Route path='/analysis' element={<Analysis/>}></Route>
      </Routes>
  );
}






function App() {
  return(
    <Router>
      <Approutes/>
    </Router>
  );
}

export default App;