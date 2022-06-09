import './App.css';
import { Suspense } from 'react';

// Routes
import {BrowserRouter as Router} from 'react-router-dom'
import RoutesConfig from './routes/Routes';

// Components
import Header from './components/Header/Header';
import Spinner from './components/Spinner/Spinner';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Suspense 
            fallback={<Spinner/>}
          >
            {RoutesConfig}
          </Suspense>
        </Router>
    </div>
  );
}

export default App;
