import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./features/common/NavigationBar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Toaster } from "react-hot-toast";
import { useRef } from "react";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div>
      <NavigationBar />
      <SwitchTransition>
        <CSSTransition
          timeout={200}
          key={location.pathname}
          classNames="fade"
          nodeRef={nodeRef}
        >
          <div className="max-w-full min-h-screen p-3 mx-auto" ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#ffffff",
            color: "#1f2937",
            padding: "16px 20px",
            borderRadius: "12px",
            border: "1px solid #e5e7eb",
            boxShadow:
              "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            fontSize: "14px",
            fontWeight: "500",
            maxWidth: "420px",
            backdropFilter: "blur(10px)",
          },
          success: {
            duration: 3500,
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid #d1fae5",
              background: "#ffffff",
            },
          },
          error: {
            duration: 4500,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#ffffff",
            },
            style: {
              border: "1px solid #fee2e2",
              background: "#ffffff",
            },
          },
          loading: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#ffffff",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
