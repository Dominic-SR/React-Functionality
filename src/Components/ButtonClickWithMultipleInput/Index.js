import React,{useState} from 'react';
import "./index.css"

function Index() {

    //Create State
    const [inputList, setinputList] = useState([
    {name:"",desc:""}
    ])

    //Button Click with Add
    const AddInput = () =>{
        setinputList([...inputList,{name:"",desc:""}]);
    } 
    
    //Add Input Functionality
   const handleChangeAdd = (e, i) => {
        const { name,value } = e.target;

        const list = [...inputList];
        list[i][name] = value;
        
        setinputList(list) 
    }

    //Remove Input Button Functionality
    const RemoveInput = (i) => {
        const list = [...inputList];
        list.splice(i,1)
        setinputList(list)
    }

    return (
        <div className="container">
            <h1>Multiple Input with Button Click</h1>
            {inputList.map((data,i)=>(
            <div className="container-row" key={i}>
                <input type="text" placeholder="Enter Your Name" name="name" onChange={(e) => handleChangeAdd(e, i)} />
                <input type="text" placeholder="Enter Your Description" name="desc" />
                {inputList.length - 1 === i && <button className="btn btn-success" onClick={AddInput}>Add</button>}
                {inputList.length - 1 !== i && <button className="btn btn-danger" onClick={() => RemoveInput(i)}>Remove</button>}
            </div>
            ))}
        </div>
    )
}

export default Index
