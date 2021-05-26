import React, { Fragment } from 'react';

const Instructions = () => {
    return ( 
        <Fragment>
            <div className='instructionsComp'>
                <div className='instructionsTittle'>
                    <h2>Bienvenidas al ejercicio de práctica de Git y GitHub</h2>
                    <h3>Instrucciones:</h3>
                </div>
                <div className='instructions'>
                <p>Para reforzar el uso de Git y Github previo al Talent Fest, hemos creado este 
                    pequeño ejercicio que ayudara a recordar y prácticar el flujo de trabajo.
                    Los pasos que deberan seguir son los siguientes:
                    </p> 
                </div>
                <div className='lists'>
                    <ol>
                        <li>Forkear el repositorio</li>
                        <li>Clonar el repositorio en su compu, no el de Andre, si no el de su Github</li>
                        <li>Instalar dependencias con npm install</li>
                        <li>Conectar su repositorio con el repositorio de Andre, nombrandolo Upstream</li>
                        <li>Crear una Branch</li>
                        <li>Realizar su primer commit en ingles indicando que es lo que realizarón</li>
                        <li>Hacer Pull Request al Repositorio de Andre desde GitHub</li>
                        <li>Entrar al archivo de sus componentes y agregar 5 elementos, los que ustedes quieran</li>
                        <li>Hacer commits y pull request a Andre por cada cambio que hagan a sus componentes</li>
                    </ol>  
                </div>
            </div>    
        </Fragment>
     );
}
 
export default Instructions