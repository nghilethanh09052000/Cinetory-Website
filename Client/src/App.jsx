import './App.css';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {

  return (
  <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route 
            path='/' 
            element={<Home/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
