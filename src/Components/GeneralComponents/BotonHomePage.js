import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const BotonHomePage = () => {
    return ( 
        <Fragment>
            <Link to='/'>
                <button>Volver al inicio</button>
            </Link>
        </Fragment>
     );
}
 
export default BotonHomePage;