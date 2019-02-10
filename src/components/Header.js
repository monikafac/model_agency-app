import React from 'react';
import './Header.css'

const Header = () => {
    return ( 
        <div className='header'>
        <h1>
            Witaj na stronie naszej Agencji Modelek <span>Be Model!</span>
        </h1>
        <p>
             Aby poznać dostępną ofertę naszych modelek oraz modeli, proszę  wybrać płeć.
        </p>
        <p> 
            Po dokonanym wyborze, kolejno, będą pojawiać się propozycje współpracy. Zapraszamy!
        </p> 
        
        </div>
     );
}
 
export default Header;