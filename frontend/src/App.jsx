import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useRef } from "react";

function App() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <div>
      <NavigationBar />
      <SwitchTransition>
        <CSSTransition timeout={200} key={location.pathname} classNames="fade" nodeRef={nodeRef}>
          <div className="max-w-full mx-auto min-h-screen p-3" ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
