
import { useNavigate} from 'react-router-dom'
import './style.scss'


const Characters = ({characters = []}) => {
  

  const navigate = useNavigate();
  
  return (
    <div className='row'>
        {characters.map((item,index)=>(
            <div key={index} onClick={ ()=> {navigate(`/${item.id}`)}} className='col mb-4'>
                <div className='card'>
                   <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}alt="{item.title}" />
                   <div className='card-boby'>
                    <h6 className='card-title'>{item.title}</h6>
                    <p>Gerenero: {item.genre_ids}</p>
                    <p>Fecha: {item.release_date}</p>
                   </div>
                </div>
           </div> 
        ))}
    </div>
  )
}

export default Characters
