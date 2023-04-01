import logo from "./logo.svg";
import "./App.css";

import HExample1 from "./Componens/useEffectHooks/HExample1";
import FocusInput from "./Componens/Hooks/FocusInput";
import HookTimer from "./Componens/Hooks/HookTimer";
import HightChecker from "./Componens/Hooks/HightChecker";
import CounterOne from "./Componens/Hooks/CounterOne";
import StopWatch from "./Componens/Hooks/StopWatch";

function App() {
  return (
    <div className="App">
      
      {/* <HExample1></HExample1> */}
      {/* <FocusInput></FocusInput>
      <HookTimer></HookTimer> */}
      {/* <HightChecker></HightChecker> */}

      {/* <CounterOne/> */}
      <StopWatch/>
    </div>
  );
}

export default App;
