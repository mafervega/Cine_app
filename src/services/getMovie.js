import axios from "axios";

const URL_API_ALL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2a75c94ca686f0408a8bac694a539587&language=es-ES`' 
export const getMovie = async (idMovie) => {

    try 
    {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=2a75c94ca686f0408a8bac694a539587`);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }


}

export const getMovies = async () => {
    try 
    {
        const {data} = await axios.get(URL_API_ALL);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }
}
export const getBoletos = async (idMovie) =>{

    try 
    {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=2a75c94ca686f0408a8bac694a539587`);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }


}
export const getSillas = async (idMovie) =>{

    try 
    {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${idMovie}?api_key=2a75c94ca686f0408a8bac694a539587`);
        
        return data;    
    } 
    catch (error) 
    {
        return error;
    }


}

