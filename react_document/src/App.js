
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Docs from './Docs/Docs';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Navigation from './Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Header />
        <Switch>

          <Route exact path="/react-document" component={Home}/>
          <Route path="/react-document/docs/dotnet" component={Docs} />

        </Switch>

        <Navigation />

        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
