import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getBoletos,} from "../../services/getMovie"
import Swal from "sweetalert2"
import './style.scss'


const Boletos = () => {
    const { idMovie } = useParams();
  
    const [boleto, setBoleto] = useState({});
    useEffect(() => {
      const getBoleto = async () => {
        const response = await getBoletos(idMovie);
        setBoleto(response);
      };
      getBoleto();
    }, [idMovie]);
     const navigate = useNavigate()
  
    
  const handleContinuarClick = () => {
    if (adulto === 0 && niño === 0) {
      Swal.fire({
        title: "Completa los valores",
        text:
          "Debes seleccionar al menos un boleto de adulto o niño antes de continuar.",
        icon: "warning",
      });
    } else {
      navigate(`${boleto.id}`);
    }
  };
  
    const [adulto, setAdulto] = useState(0);
    const [niño, setNiño] = useState(0);
    const [bebe, setBebe] = useState (0);
  
    const adultoIncrement = () => {
        if (adulto < 10 && total + 30 <= 300) {
            setAdulto(adulto + 1);
      }
    };
  
    const adultoDecrement = () => {
      if (adulto > 0) {
        setAdulto(adulto - 1);
      }
    };
  
    const niñoIncrement = () => {
        if (niño < 10 && total + 20 <= 200) {
            setNiño(niño + 1);
      }
    };
  
    const niñoDecrement = () => {
      if (niño > 0) {
        setNiño(niño - 1);
      }
    };
    const bebeIncrement = () => {
        if (bebe < 10 && total + 15 <= 150) {
            setBebe(bebe + 1);
        }
      };
    
      const bebeDecrement = () => {
        if (bebe > 0) {
          setBebe(bebe - 1);
        }
      };
  
    // Calcular el total en base a la cantidad de boletos
    const total = adulto * 30 + niño * 20 + bebe * 15;
  

  return (
  <div className="boletos">
    <div className="nume">
        <div className="nume_">
        <h3>Selecciona tus boletos</h3>
        <p>Puedes comprar 10 boletos maximo por transaccion</p>
        <div className="nume_b">
            
             <span>ADULTO</span>
             <span>$ 30</span>
             <div className="button">
                 <button  onClick={adultoDecrement} disabled={adulto === 0}>-</button>
                 <span>{adulto}</span>    
                 <button  className="suma" onClick={adultoIncrement} disabled={adulto === 10}>+</button>
             </div>
        </div>
        <div className="nume_b">
            <span>NIÑOS de 11 a 17</span>
           
            <span>$ 20</span>
             <div className="button">
                 <button    onClick={niñoDecrement} disabled={niño === 0}>-</button>
                 <span>{niño}</span>    
                 <button className="suma"onClick={niñoIncrement}disabled={niño === 10}>+</button>
             </div>
        </div>
        <div className="nume_b">
            <span>NIÑOS de 2 a 10</span>
           
            <span>$ 15</span>
             <div className="button">
                 <button    onClick={bebeDecrement} disabled={bebe === 0}>-</button>
                 <span>{bebe}</span>    
                 <button className="suma"onClick={bebeIncrement}disabled={bebe === 10}>+</button>
             </div>
        </div>
        </div>
    </div>
    <div className="info_">
         <div className="info">
            <h3>Resumen de compra</h3>
            <div className="info_img">
                <img src={`https://image.tmdb.org/t/p/w500/${boleto.poster_path}`}alt="{boleto.title}" />
                <div className="info_info">
                <span><h5>Pelicula: </h5> {boleto.title}</span>
                <br />
                <span><h5>Fecha:</h5>{boleto.release_date}</span>
                </div>
            </div>
            <div>
                <p>
                Se realiza un cargo por servicio por cada boleto dentro de la orden.
                </p>
                <div className="total">
                    <h2>Total(IVA incluido):</h2>
                    <h1>${total}</h1>
                 </div>
            </div>
          <button onClick={handleContinuarClick}>Continuar</button>
          <br />
        </div>    
    </div>
  </div>
  )
}

export default Boletos