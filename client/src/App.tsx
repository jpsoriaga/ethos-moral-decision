import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute, PublicRoute } from "./routes/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />

        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
