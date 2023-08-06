import React from 'react'
import './style.scss'



const Navbar = () => {
    const handleHamburguesaClick = () => {
        console.log("Hola");
      };
      return (
    <header>
        <div className="titulo">
             CINE COLOMBIA
        </div>
        
        <div className="nav" >
            <ul>
                <li>Accion</li>
                <li>Terror</li>
                <li>Ciencia Ficcion</li>
                <li>Comedia</li>
            </ul>
        </div>
    
        <div className="textbox"> 
        <label  className="form-label"> </label>   
             <span>Cines</span>
                 <select value="" className="form-select" aria-label="Default select example">
                     <option value="">Selecciona una opciòn</option>
                     <option value="m">3</option>
                     <option value="f">2</option>
                     <option value="i">1</option>
                </select>
         </div>
    
        <div className="textbox1">
        <label>Fecha</label>
        <input type="date" id="nombre" name="nombre" placeholder="00/00/00" />
        </div>
      
        <div className="user">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="avatar" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>
        </div>
    
        <div className="hamburguesa" onClick={handleHamburguesaClick}>
         <span></span>
         <span></span>
         <span></span>
        </div>  
    
    </header>
      )  
      
    }

export default Navbar