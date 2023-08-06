import {useState,useEffect}from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../components/layout/layout"
import Characters from "../components/characters/Characters"
import Detail from '../components/detail/Detail'


const Router = () => {
    const [characters, setCharacters] =useState([]);

  const initialUrl = "https://api.themoviedb.org/3/movie/popular?api_key=2a75c94ca686f0408a8bac694a539587";
  const fetcharacters=(url)=>{
    fetch(url)
  .then(response => response.json())
  .then(data=>setCharacters(data.results))
  .catch(error => console.log(error))
  }
  useEffect(()=>{
    fetcharacters(initialUrl);
  }, [])
  return (
    <BrowserRouter>
    
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Characters characters={characters} />}/>
                <Route path='/:idMovie' element={<Detail/>}/>
                {/* <Route path=':id' element={<Detalle/>}/> */}
            </Route>
        </Routes>
       
    
    </BrowserRouter>
  )
}

export default Router