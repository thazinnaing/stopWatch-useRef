import { useRef } from "react";

const UseRefExample=()=>{

    const nameref=useRef();
    const bodyref=useRef();

    console.log("name", nameref.current, " body", bodyref)

    const onChangeHandler=(e)=>{
        
    }

    return(
        <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" onChange = {onChangeHandler} ref={nameref}/>
        <br/>
        <label htmlFor="body">Body:</label>
        <input type="text" id="body" name="body" ref={bodyref}/>
        
        </form>
    )
}

export default UseRefExample;