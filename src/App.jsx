import Stopwatch from "./useRefComponents/useRefExample";
import CounterAlert from "./useRefComponents/CounterAlert";
import TodoApp from "./useCallBackComponents/TodoApp";

const App=()=>{
  return(
    <div>
      <Stopwatch/>
      <hr/>
      <div>
        <h1>Counter</h1>
        <CounterAlert/>
      </div>
      <div>
        <TodoApp/>
      </div>
    
    </div>
  )

}

export default App;