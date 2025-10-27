import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import NavigationBar from "./features/common/NavigationBar";
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
          <div className="max-w-full min-h-screen p-3 mx-auto" ref={nodeRef}>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

export default App;
