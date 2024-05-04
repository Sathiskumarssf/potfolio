 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar/Navbar';
import Indroduction  from './components/indroduction/Indroduction';
import Skills  from './components/skills/Skills';
import Projects  from './components/projectdisplay/Project';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Indroduction/>
     <Skills/>
     <Projects/>
      
    </div>
  );
}

export default App;
