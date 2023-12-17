import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './general/Layout';
import HomePage from './features/home/HomePage';

import './App.css';

function App() {
  return (
    <div className="App">
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage/>} />
              </Routes>
            </Router>
          </Layout>
    </div>
  );
}

export default App;
