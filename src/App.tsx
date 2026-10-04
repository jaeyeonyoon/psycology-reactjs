import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="bg-green-400">
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
