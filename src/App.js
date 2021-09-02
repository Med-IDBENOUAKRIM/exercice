import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Budget from './components/Budget';
import NavHome from './components/NavHome';
import MainFooter from './components/MainFooter';
import Forms from './components/Forms';
import Province from './components/Province';


function App() {
  return (
    <Router>
      <NavBar />
      <Home />
      <NavHome />
      <MainFooter />
    </Router>
  );
}

export default App;
