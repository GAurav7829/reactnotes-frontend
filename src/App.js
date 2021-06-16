import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesList from './components/NotesList';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Route component={NotesList} path="/" exact />
            <Route component={NotFound} path="*" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;