import React from 'react';
import style from './style.css'

function DevItem(props) {
  const { dev } = props

  return(
    <li className="dev-item">
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

export default DevItem;