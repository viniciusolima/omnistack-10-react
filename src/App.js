import React, { useEffect, useState } from 'react';
import api from './services/api'
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

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

  function renderDevItem(dev) {
    return(
      <li key={dev._id} className="dev-item">
        <header>
          <img src={ dev.avatar_url }/>
          <div className="user-info">
            <strong>
              { dev.github_username }
            </strong>
            <span>
              { dev.techs.join(', ') }
            </span>
          </div>
        </header>
        <p>
          { !!dev.bio ? dev.bio : 'Usuário não possui Bio' }
        </p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar Github</a>
      </li>
    )
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
          { devs.map( dev => renderDevItem(dev) )}
        </ul>
      </main>
    </div>
  );
}

export default App;
