import React, { useState, useEffect } from 'react';
import style from './style.css'

function DevFrorm(props) {
  const { dev } = props

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

  function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(
      {
        github_username: githubUsername,
        techs,
        latitude,
        longitude,
      }
    )

    setGithubUsername('')
    setTechs('')
  }
  
  return(
    <form onSubmit={handleSubmit}>
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
  )
}

export default DevFrorm;