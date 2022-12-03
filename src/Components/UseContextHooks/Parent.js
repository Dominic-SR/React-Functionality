import React from 'react';
import "./index.css"
import Child from './Child';

function Parent() {
  return (
    <div className="border1">Parent
    <Child />
    </div>
  )
}

export default Parent