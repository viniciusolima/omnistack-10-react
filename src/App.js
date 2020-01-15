import React, { useEffect, useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'



function App() {
  const [githubUsername, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  
  useEffect( () => {
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

  async function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
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
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"/>
              <div className="user-info">
                <strong>
                  Nome do usuário
                </strong>
                <span>
                  Tecnologia do usuário, Tecnologia do usuário.
                </span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g">Acessar Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"/>
              <div className="user-info">
                <strong>
                  Nome do usuário
                </strong>
                <span>
                  Tecnologia do usuário, Tecnologia do usuário.
                </span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g">Acessar Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/2254731?s=460&v=4" alt="Diego Fernandes"/>
              <div className="user-info">
                <strong>
                  Nome do usuário
                </strong>
                <span>
                  Tecnologia do usuário, Tecnologia do usuário.
                </span>
              </div>
            </header>
            <p>
              CTO na @Rocketseat. Apaixonado pelas melhores tecnologias de desenvolvimento web e mobile.
            </p>
            <a href="https://github.com/diego3g">Acessar Github</a>
          </li>
        
        </ul>
      </main>
    </div>
  );
}

export default App;
