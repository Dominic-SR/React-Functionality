import React from 'react';
import { NavLink } from "react-router-dom";

function Base() {
    var TableData = [
        {sno:"1",title:"Button Click  With Multible Input",link:"buttonclickwithmultipleinput"},
        {sno:"2",title:"Use Effect Hooks",link:"useeffecthooks"},
        {sno:"3",title:"Use Context Hooks",link:"usecontexthooks"}
    ]
    return (
        <div class="container">
        <h2>React Functionality</h2>
                    
        <table class="table">
          <thead>
            <tr>
              <th>SL.No</th>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
          {TableData.map((data)=>(
            <tr>
              <>
              <td>{data.sno}</td>
              <td>{data.title}</td>
              <td><NavLink to={data.link}><button className="btn btn-success">Click</button></NavLink></td>
              </>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}

export default Base
