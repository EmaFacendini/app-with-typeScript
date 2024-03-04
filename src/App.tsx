import { useEffect, useRef, useState } from 'react'

import './App.css'
import List from './components/List'
import Form from './components/Form'
import { Sub } from './types'


interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    avatar: 'https://i.pravatar.cc/150?=dapelu',
    subMonths: 3,
    description: 'dapelu is a moderador some times'
},
{
    nick: 'locomon',
    avatar: 'https://i.pravatar.cc/150?=locomon',
    subMonths: 7,
    description: 'locomon is a fan'
}
]

function App() {
 const [subs, setSubs] = useState<AppState["subs"]>([]);
 
 const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]> (0);
 const divRef = useRef<HTMLDivElement>(null);

 useEffect(()=>{
  setSubs(INITIAL_STATE)
 }, [])

 const handleNewSub = (newSub: Sub): void =>{
    setSubs( subs => [...subs, newSub])
 }

  return (
   
      <div className='App' ref={divRef}>
          <h1>subs locos</h1>
          <List subs={subs}/>
          <Form onNewSub={handleNewSub}/>
      </div>
    
    
  )
}

export default App
