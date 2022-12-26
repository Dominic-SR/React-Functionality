import React,{useState} from 'react'

function Index() {
  let nextId = 0;
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([])


  const [name2, setName2] = useState('');
  const [artists2, setArtists2] = useState([])
  return (
    <div>
      <h1>Updating Array in State</h1>

      <hr/>
      <h3>Example 1 PUSH METHOD </h3>
      <input value={name} onChange={e=> setName(e.target.value)} />
      <button onClick={()=>{
        setName('');
        artists.push({
          id:nextId++,
          name:name
        });
      }}>Add</button>
      <ul>
        {artists.map(artist =>(
          <li key={artist.id}>{artist.name}</li>
        ))}  
      </ul>  
      <hr/>


      <hr/>
      <h3>Example 2 PUSH METHOD </h3>
      <input value={name2} onChange={e=> setName2(e.target.value)} />
      <button onClick={()=>{
        setName2('');
        setArtists2([
          ...artists2,
          { id: nextId++, name: name2 }
        ]);
      }}>Add</button>
      <ul>
        {artists2.map(artist =>(
          <li key={artist.id}>{artist.name}</li>
        ))}  
      </ul>  
      <hr/>
    </div>
  )
}

export default Index