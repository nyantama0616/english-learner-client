import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './general/Layout';

import HomePage from './features/home/HomePage';
import WordListPage from './features/word-list/WordListPage';
import { DependencyProvider } from './general/contexts/useDependency';

import './App.css';

function App() {
  return (
    <div className="App">
      <DependencyProvider>
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/word-list" element={<WordListPage/>} />
              </Routes>
            </Router>
          </Layout>
      </DependencyProvider>
    </div>
  );
}

export default App;
