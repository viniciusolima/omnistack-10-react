import React from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div class="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
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
