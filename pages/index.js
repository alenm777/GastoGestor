
export default function Home() {
  return (
  <header>

    {/*Informacion de Usuario */}
    <div>
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
  </header>
  )
}
