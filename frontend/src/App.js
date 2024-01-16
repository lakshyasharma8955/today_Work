import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/common/navbar/Navbar';
import PrivateRouter from './routes/privateRoutes/PrivateRouter';
import PublicRouter from './routes/publicRoutes/PublicRouter';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          {/* Other routes go here */}
          <Route path="/public/*" element={<PublicRouter />} />
          <Route path="/private/*" element={<PrivateRouter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;