import React,{useState,useEffect} from 'react'

const Index = () => {
    const [val,setval] = useState(0)
    const [val2,setval2] = useState(0)
    const [todo,settodo] = useState({});

    //UseeffectCallback
    useEffect(()=>{
        console.log("Useeffect callback")
    })

    //UseeffectDependency
    useEffect(()=>{
        console.log("Useeffect Dependency")
    },[])

    //UseeffectDwpendencypassing
    useEffect(()=>{
        console.log("Useeffect Dependency Passing")
        setval2(val2+2)
    },[val])

    //APIFetching
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => settodo(json))
    },[])

    return (
        <div>
        <h1>Use Effect</h1>
        <p>{val}</p>
        <p>Every click see console every time rendering</p>
        <button onClick={() => setval(val+1)}>UseEffect Call back Functuion Toggle</button>        
        <hr/>
        <p>{val2}</p>
        <p>Every click see console useeffect rendering one time</p>
        <button onClick={() => setval2(val2+1)}>UseEffect Dependency empty array Toggle</button>        
        <hr/>
        <p>{val2}</p>
        <p>Every click see console useeffect rendering one time</p>
        <button onClick={() => setval(val+1)}>UseEffect Dependency passing array Toggle</button>        
        <hr/>
        <p>{JSON.stringify(todo)}</p>
        <p>API Fetching</p>
        </div>
    )
}
export default Index