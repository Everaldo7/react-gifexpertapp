import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categorias, setCategorias] = useState(['Dragon ball']);

  // const habndleAdd = () => {
  //   setCategorias( element => [...categorias, 'Suspenso'])
  // }   

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias}/>
      <hr />

      <ol>
        {
            categorias.map((item,i) => {
                return <GifGrid key={item} categoria={item}/>
            })
        }
      </ol>
    </div>
  )
}
