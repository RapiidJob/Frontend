import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import screen from "./screens/index";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<screen.login />} />
          <Route path="/register" element={<screen.employerRegistration />} />
          <Route path="/" element={<screen.home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
