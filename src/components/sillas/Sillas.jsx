import { useEffect, useState } from "react"
import {  useParams } from "react-router-dom"
import { getSillas} from "../../services/getMovie"
import './style.scss'

const Sillas = () => {
    const { idMovie } = useParams();
  
    const [silla, setSilla] = useState({});
    useEffect(() => {
      const getSilla = async () => {
        const response = await getSillas(idMovie);
        setSilla(response);
      };
      getSilla();
    }, [idMovie]);

  return (
       <div className="sillas">
        <div className="silla">
<p>sss</p>
        </div>
        <div className="info_">
         <div className="info">
            <h3>Resumen de compra</h3>
            <div className="info_img">
                <img src={`https://image.tmdb.org/t/p/w500/${silla.poster_path}`}alt="{boleto.title}" />
                <div className="info_info">
                <span><h5>Pelicula: </h5> {silla.title}</span>
                <br />
                <span><h5>Fecha:</h5>{silla.release_date}</span>
                </div>
            </div>
            <div>
                <p>
                Se realiza un cargo por servicio por cada boleto dentro de la orden.
                </p>
                <div className="total">
                    <h2>Total(IVA incluido):</h2>
                 </div>
            </div>
          <button>Continuar</button>
          <br />
        </div>    
    </div>
       </div>
)
}

export default Sillas