import React from 'react';
import './Selector.css';


const Selector = () => {

return (
    <div className="container">
        <div className="cardCorreo">
            <div className="cardCorreo-image"></div>
            <div className="cardCorreo-text">
                <h2>Correo Electronico</h2>
            </div>
        </div>
        <div className="cardChat">
            <div className="cardChat-image"></div>
            <div className="cardChat-text">
                <h2>Chat</h2>
            </div>
        </div>
    </div>
  );
}
  

export default Selector;