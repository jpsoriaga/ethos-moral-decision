import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute, PublicRoute } from "./routes/ProtectedRoute";
import DashboardPage from "./pages/InsightPage";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import CreateDecisionPage from "./pages/CreateDecisionPage";
import Step1TheSituation from "./components/createDecision/Step1TheSituation";
import Step2TheAction from "./components/createDecision/Step2TheAction";
import Step3TheReasoning from "./components/createDecision/Step3TheReasoning";
import { useAuth } from "../src/auth/useAuth";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";

function App() {

  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated && <NavBar />}
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
        <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
        <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />

        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

        <Route
          path="/create-decision"
          element={
            <ProtectedRoute>
              <CreateDecisionPage />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={<Step1TheSituation />}
          />
          <Route
            path="the-action"
            element={<Step2TheAction />}
          />

          <Route
            path="the-reasoning"
            element={<Step3TheReasoning />}
          />

        </Route>

      </Routes>


    </>
  )
}

export default App
