import { IoStatsChart } from 'react-icons/io5'

function Nav () {
    return  <header className='container max-w-2xl px-6 py-6 mx-auto'>
    <div className="flex items-center justify-between">
       {/*Informacion de Usuario */}
       <div className="flex items-center gap-2">
         { /* Imagenes */}
         <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
         <img 
         className="object-cover w-full h-full"
         src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254"
          alt="Imagen de Perfil"
         />
   </div>
   
         {/* Nombre */}
         <small>Hola, Lionel!</small>
       </div>
   
   { /* derecha de la barra de navegacion  */}
       <nav className="flex items-center gap-4">
         <div>
           <IoStatsChart className='text-2xl' />
           </div>
         <div>
           <button className='btn btn-danger'> Cerrar sesión</button>
         </div>
       </nav>
       </div>
     </header>
}

export default Nav





