
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoute from './components/Router';
import Footer from "./components/Base_element/Footer";
import Nav from "./components/Base_element/Nav";
function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <MainRoute />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/* devo aggiungere:

about me; bottone che manda ad un altra pagina
project almeno 2; una gallery con le img che apre una card nella card è possibile passare all altra direttamente
soft-skills;
technical skills;
contact (con opione iserimento azienda)
footer
jest icon
figma
git
swagger


*/
/*
ALTRE AGGIUNTE:
set di base dei colori
*/
//footer con radius btn che apre una nuovo form?


/* video solo 2 size per il testo e magari un obreggiatura in piu per lo slogan */


//devo far si che si mostri una sola volta tutti i titoli 
//devo far si che il button sappia che dopo i primo deve restare in opacity 1
//le img dei progetti devo essere racchiuse in un shadow tipo pellicola