
import './App.scss';
import Footer from './components/layout/footer/Footer';
import Main from './components/layout/main/Main';
import NavBar from './components/layout/navbar/NavBar';
import SideBar from './components/layout/sidebar/Side';

function App() {
  return (
    <div className="App">
     <NavBar/> 
     <SideBar/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
