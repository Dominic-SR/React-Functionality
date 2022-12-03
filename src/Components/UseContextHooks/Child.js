import React, { useContext } from 'react';
import './index.css';
import {Context} from "./Index"

function Child() {
  const val = useContext(Context);
  return (
    <div className='border2'>
        child {val}
        </div>
  )
}

export default Child