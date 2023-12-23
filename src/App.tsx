import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './general/Layout';

import HomePage from './features/home/HomePage';
import WordListPage from './features/word-list/WordListPage';
import ArticleListPage from './features/article/ArticleListPage';

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
                <Route path="/word-list" element={<WordListPage />} />
                <Route path="article-list" element={<ArticleListPage />} />
              </Routes>
            </Router>
          </Layout>
      </DependencyProvider>
    </div>
  );
}

export default App;
