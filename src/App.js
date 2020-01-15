import React from 'react';
import './global.css'
import './App.css'

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
              <div class="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input name="latitude" id="latitude" required></input>
              </div>

              <div class="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input name="longitude" id="longitude" required></input>
              </div>
            </div>
          </div>
        </form>
      </aside>
      <main>
      </main>
    </div>
  );
}

export default App;
