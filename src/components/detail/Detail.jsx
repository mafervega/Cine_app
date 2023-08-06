import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovie } from "../../services/getMovie"
import './style.scss'


const Detail = () => {
    
    const {idMovie} = useParams();

    const [info, setInfo] = useState({})
     useEffect(() => {
        const getInfo = async () => {
            const response = await getMovie(idMovie);
            setInfo(response);

        }
        getInfo()
    }, [idMovie])


  return (
    <div className="detail">
        <div className="peli">
            <div className="peli_info">
                <img src={`https://image.tmdb.org/t/p/w500/${info.poster_path}`}alt="{info.title}" className='col mb-4' />
               <div>
               <h2>{info.title}</h2>
                <span>{info.original_title}</span>
               </div>
            </div>
        <h5>Trailer</h5>
        <br />
        <h5>Sinopsis:</h5> 
        <span>{info.overview}</span>
        <br />
        </div>
        <div className="info">
            <h1>Horarios para la pelicula</h1>
            <span>Elige el horario que prefieras</span>
            <div className="horario_info">
                 <button >11:00</button>
                 <button >13:00</button>
                 <button >15:00</button>
                 <button >17:00</button>
                 <button >19:00</button>           
             </div> 
             <div className="seleccion_info">
             <button>Seleccionar boletos </button>
             </div>
        </div>
    </div>
  )
}

export default Detail