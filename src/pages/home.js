import React from 'react';
import './estilo.css';
import { useState } from 'react';
import apiRickandMorty from "../../src/services/apiRickandMorty";
import imagem from '../../src/imagem/logo.png'

function Home() {

    const [apiDigitado,setapiDigitado] = useState('');
    const [listRick, setListRick] = useState('');

    async function pesquisarRick(){

    const response = await apiRickandMorty(`https://rickandmortyapi.com/api/character/${apiDigitado}`);
    
    console.log(response);
    setListRick(response.data);
  }
  
    return(
        <div>

        <header className='navbar'>
            <div className='navbar__title navbar__item'><img src={imagem} alt="imagem" width='150px'/></div>
            <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Buscar..." value={apiDigitado} onChange={(event) => setapiDigitado(event.target.value)}/>
            <button id="btnBusca" onClick={pesquisarRick}>Buscar</button>
            </div>
            <div className='navbar__item'>Sobre nós</div>
            <div className='navbar__item'>Contato</div>
            <div className='navbar__item'>Ajuda</div>        
        </header>

        <div className='container_pai'>
            <div className='container'>
                <div className='img'>
                    <img className="imagem" src={listRick.image} alt="" width="250px"></img>
                </div>
                    <div className='desc'>
                        <div><b>Nome:</b> <u>{listRick.name}</u></div>
                        <div><b>Gênero:</b> <u>{listRick.gender}</u></div>
                        <div><b>Espécies:</b> <u>{listRick.species}</u></div>
                        <div><b>Status</b> <u>{listRick.status}</u></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;