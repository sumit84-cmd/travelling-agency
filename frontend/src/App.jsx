import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context'; // Import from context index
import Navbar from './components/common/Navbar';
// import Footer from './components/common/Footer';
import Home from './pages/Home';
import Destination from './pages/Destination';
// import Blog from './pages/Blog';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination/:id" element={<Destination />} />
            {/* <Route path="/blog/:postId" element={<Blog />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;