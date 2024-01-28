import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from './helpers/getGifs';

export const GifGrid = ({categoria}) => {

    const {data:images, loading} = useFetchGifs(categoria);
//   const [imagenes, setImagen] = useState([]);
//   useEffect(() => {
//     getGifs(categoria)
//         .then(imgs => setImagen(imgs))
//   }, [categoria]);


  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {categoria} </h3>
      {loading && <p className='animate__animated animate__flash'>Cargando ...</p>}
      <div className='card-grid'>
        {
            images.map( imagen => (
                <GifGridItem 
                    key= {imagen.id}
                    {...imagen}
                />
            ))
        }
    </div>
    </>
  )
}
