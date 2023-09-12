import Stopwatch from "./components/useRefExample";
import CounterAlert from "./components/CounterAlert";

const App=()=>{
  return(
    <div>
      <Stopwatch/>
      <hr/>
      <div>
        <h1>Counter</h1>
        <CounterAlert/>
      </div>
    
    </div>
  )

}

export default App;