import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { ButtonGroups, Footer, GridLoading, Header, Invoice } from './components';

function App() {
  return (

    <Router>
    <Header/>
    <ButtonGroups/>
    <Footer/>
  </Router>
  )
 
}

export default App;
