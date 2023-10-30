import './App.scss';
import { HashRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor"
import Mouse from './components/Base_element/external_element/Mouse.jsx';
import MainRoute from './components/Route/Router';
import Nav from "./components/Base_element/Nav";
import ScrollNavigation from './components/Base_element/external_element/ScrollNavigation';
import Footer from './components/Base_element/Footer';
function App() {
  const isDesktop = window.innerWidth > 840;
  return (
    <div className="App">
         <HashRouter basename="/">
        <ScrollNavigation />
        {isDesktop ? <Mouse /> : null}
        {isDesktop ? <AnimatedCursor
          className="cursor-image"
          innerSize={10}
          outerSize={10}
          outerScale={1}
          outerStyle={{
            border: 'none',
            backgroundColor: 'none',
            backgroundImage: 'none',
            backgroundSize: '20% 20%',
            color: 'white',
          }}
          innerStyle={{
            border: 'none',
            backgroundImage: 'none',
            backgroundColor: 'white',
            backgroundSize: '20% 20%',
          }} /> : null}
        <Nav />
        <MainRoute />
        {isDesktop ? <Footer /> : null}
        </HashRouter>
    </div>
  );
}

export default App;


/*
PROBLEMI:
-about page - const non usata, risoloto con console.log
*/


/* TO ADD:
un flash per far capire di selzionare i titoli service
la descrizione logotag fuori schermo
ricordarsi introduzione con state
aggiustare testo desktop services
ingresso mobile intrudction
cv?
animazione di entrata per service luce sui btn mobile
*/

/* TO MODIFY:
openclassroom evidenziato
 */


/* NEXT STUFF:


*/








//mention to the autor and site:
/* <a href="https://www.freepik.com/free-vector/green-smoke-background_25756384.htm#query=neon%20green&position=35&from_view=search&track=ais">Image by pikisuperstar</a> on Freepik */


/*
Photo by stein egil liland: https://www.pexels.com/photo/landscape-photography-of-mountain-3384692/

*/

//fotoohmyfood
/*
Photo by Pixelme Stock Photography: https://www.pexels.com/photo/plate-of-pasta-2773940/

*/


/*
luna btn

<a href='https://pngtree.com/freepng/cartoon-moon-crescent-element_5555091.html'>png image from pngtree.com/</a>
*/

//logo
/* <a href="https://iconscout.com/3d-illustrations/linkedin-logo" class="text-underline font-size-sm" target="_blank">Linkedin Logo</a> by <a href="https://iconscout.com/contributors/3q" class="text-underline font-size-sm" target="_blank">3Q World</a> */


/* 
<a href="https://iconscout.com/3d-illustrations/whatsapp" class="text-underline font-size-sm" target="_blank">Whatsapp</a> by <a href="https://iconscout.com/contributors/fahrulsaputra7" class="text-underline font-size-sm">Fahrul Saputra</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>


<a href="https://iconscout.com/3d-illustrations/gmail" class="text-underline font-size-sm" target="_blank">Gmail</a> by <a href="https://iconscout.com/contributors/dwiprasetyoganoll" class="text-underline font-size-sm">DWIP</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>


<a href="https://iconscout.com/3d-illustrations/github" class="text-underline font-size-sm" target="_blank">Github</a> by <a href="https://iconscout.com/contributors/dwianggaicon" class="text-underline font-size-sm" target="_blank">Dwiangga Design</a>


<a href="https://iconscout.com/3d-illustrations/pencil" class="text-underline font-size-sm" target="_blank">Pencil</a> by <a href="https://iconscout.com/contributors/rizkiahmadfauzi28" class="text-underline font-size-sm">Rizki Ahmad Fauzi</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>

<a href="https://www.freepik.com/free-vector/writting-pencil-design_850418.htm#query=3d%20pen&position=3&from_view=keyword&track=ais">Image by yurlick</a> on Freepik
*/