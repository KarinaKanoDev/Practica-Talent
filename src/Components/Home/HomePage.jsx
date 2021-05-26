import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Instructions from './Instructions';

const HomePage = () => {
    return ( 
        <Fragment>
            <div className='Tittle'>
                <h1>Girl´s just wanna have code</h1>
            </div>
            <div className='buttons'>
                <Link to='/Alice'>
                    <button>Alice</button>
                </Link>
                <Link to='/Andre'>
                    <button>Andre</button>
                </Link>
                <Link to='/Dani'>
                    <button>Dani</button>
                </Link>
                <Link to='/Karina'>
                    <button>Karina</button>
                </Link>
                <Link to='/Lili'>
                    <button>Lili</button>
                </Link>
                <Link to='/Mariliz'>
                    <button>Mariliz</button>               
                </Link>
            </div>
            <div>
                <Instructions />
            </div>
        </Fragment>
     );
}
 
export default HomePage;