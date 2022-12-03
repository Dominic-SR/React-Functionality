import React,{useState} from 'react';
import "./index.css"
import Parent from './Parent';

// 1.Creating Context
// 2.Creating Provider
// 3.Consume

export const Context = React.createContext();

function Index() {
const [val,setVal] = useState("Doms")
  return (
    <Context.Provider value={"DOM DOMS"}>
      <h3>Index (Learn Context API)</h3>

      <div className='border'>
        <Parent />
      </div>
    </Context.Provider>
  )
}

export default Index