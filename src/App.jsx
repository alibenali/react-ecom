import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Authentication/LoginPage';
import SignupPage from './pages/Authentication/SignupPage';

import DashboardPage from './pages/DashboardPage'; // Example dashboard page
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
