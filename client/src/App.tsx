import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute, PublicRoute } from "./routes/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
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
      </Routes>
    </>
  )
}

export default App
