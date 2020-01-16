import React, { useEffect, useState } from 'react';
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App() {
  let [devs, setDevs] = useState([]);

  useEffect(() => {
    loadDevs()
  }, [])
  
  async function loadDevs() {
    const response = await api.get('/devs')

    setDevs(response.data)
  }

  async function handleSubmit(dev) {
    console.log(dev)
    const response = await api.post('/devs', dev)

    loadDevs()
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm handleSubmit={handleSubmit} />
      </aside>
      <main>
        <ul>
          { devs.map(dev => <DevItem dev={dev} key={dev._id} />) }
        </ul>
      </main>
    </div>
  );
}

export default App;
