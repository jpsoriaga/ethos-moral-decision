import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute, PublicRoute } from "./routes/ProtectedRoute";
import DashboardPage from "./pages/InsightPage";
import { Toaster } from "react-hot-toast";
import CreateDecisionPage from "./pages/CreateDecisionPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#1c1c1c",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<PublicRoute><LoginPage /></PublicRoute>} />

        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/create-decision" element={<ProtectedRoute><CreateDecisionPage /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App
