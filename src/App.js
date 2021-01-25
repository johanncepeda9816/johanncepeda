import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
