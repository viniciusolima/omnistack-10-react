import React, { useEffect, useState } from 'react';
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'
import DevItem from './components/DevItem'

function App() {
  let [devs, setDevs] = useState([]);
  
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log('Erro geolocation ==>', err)
      },
      {
        timeout: 30000,
      }
    )
  }, [])

  useEffect(() => {
    loadDevs()
  }, [])
  
  async function loadDevs() {
    const response = await api.get('/devs')

    setDevs(response.data)
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/devs', {
      github_username: githubUsername,
      techs,
      latitude,
      longitude,
    })

    setGithubUsername('')
    setTechs('')

    loadDevs()
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit} >
          <div className="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input
              name="github_username"
              id="github_username"
              value={githubUsername}
              required
              onChange={e => setGithubUsername(e.target.value)} 
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required 
              onChange={e => setTechs(e.target.value)}
              value={techs}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
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
