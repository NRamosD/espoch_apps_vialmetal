import Card from '../components/card'
export default function AdminF3 (){
    const datos = [
        {
           title: 'Aqui va el titulo',
           description: 'Una breve descripcion',
           price: '$00',
        },
     ]
    return (<> 
    
    <h1>Contratistas</h1>
               <div class="div" class="row">
                  {datos.map((item, i) => {
                     return (
                        <>
                           <Card data={item} />
                        </>
                     )
                  })} 
               </div>
        
        </>)
}