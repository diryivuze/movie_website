import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp"; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect from the root URL to /signup */}
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
