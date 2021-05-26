import React, {Fragment} from 'react';
import BotonHomePage from '../GeneralComponents/BotonHomePage';

const Mariliz = () => {
    return ( 
        <Fragment>
            <BotonHomePage />
            <h1> Hola mundo! </h1>
            <h2> Mi nombre es Mariliz</h2>
            <p> Y para este proyecto, seré parte de su squad. Por eso me voy a presentar brevemente </p>
            <div className="favFood">
                <p> Estas son algunas de las cosas que me gusta comer</p>
                    <li> waffles </li>
                    <li> sushi </li>
                    <li> pizza </li>
            </div>
            
        </Fragment>
     );
}
 
export default Mariliz;