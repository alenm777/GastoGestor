import { IoStatsChart } from 'react-icons/io5'

export default function Home() {
  return (
  <header className="flex items-center justify-between">

    {/*Informacion de Usuario */}
    <div className="flex items-center gap-2">
      { /* Imagenes */}
      <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
      <img 
      className="object-cover w-full h-full "
      src="https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png&w=350&h=254"
       alt="Imagen de Perfil"
      />
</div>
      {/* Nombre */}
      <small>Hola, Lionel!</small>
    </div>

{ /* derecha de la barra de navegacion  */}
    <nav className="flex items-center gap-2">
      <div>
        <IoStatsChart className='text-2xl' />
        </div>
      <div><button className='px-4 py-2 text-sm capitalize rounded-xl bg-red-600 border-red-600 text-white'> Cerrar sesión</button></div>
    </nav>
  </header>
  )
}
