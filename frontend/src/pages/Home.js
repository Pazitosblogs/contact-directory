

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Prueba Dynamic de Aldahir Pazos</h1>
      <p>Esta es la pagina principal</p>
      <nav>
        <ul>
          <li><Link to="/contact">Vamos al registro de contactos</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;


