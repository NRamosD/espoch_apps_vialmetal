import { useState, useEffect } from 'react'

import Card from '../components/card'

export default function AdminF1() {
   // VARIABLES "ESTADO"
   const [list_obras, setListObras] = useState()
   const [error, setError] = useState(false)

   // FETCH DATOS DE LA API
   // LOS DATOS PASAN A LA VARIABLE list_obras como LISTA []
   useEffect(() => {
      fetch('/api/data/work/active')
         .then((res) => res.json())
         .then((result) => {
            setListObras(result)
         })
         .catch((e) => {
            console.log('ERRPR: >>>>', e)
            setError(true)
         })
   }, [])
   

   return (
      <>
         <button
            type="button"
            class="btn bt-new-work"
            data-toggle="modal"
            data-target="#exampleModal"
         >
            Nueva Obra
         </button>

      

         {error ? (
            <>Error de conexion</>
         ) : (
            <div className="div" className="row">
               {!list_obras ? (
                  <>CARGANDO DATO...</>
               ) : (
                  list_obras.map((item, i) => {
                     return <Card key={i} data={item} href={'/details/' + item.id_work} />
                  })
               )}
            </div>
         )}
      </>
   )
}
