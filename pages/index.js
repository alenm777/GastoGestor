"use client"; 

import { useState } from 'react';
import { currencyFormatter } from '@/lib/Utilidades';
import ExpensasCategory from '@/components/ExpensasCategory';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATE = [
  {
    id: 1,
    title: "Entretenimiento",
    color: '#000',
    total: 500,
  },
  {
    id: 2,
    title: "Alquiler",
    color: '#009',
    total: 200,
  },
  {
    id: 3,
    title: "Comida",
    color: '#000',
    total: 1200,
  },
  {
    id: 4,
    title: "Telefono",
    color: '#000',
    total: 800,
  },
  {
    id: 5,
    title: "Internet",
    color: '#000',
    total: 1000,
  },
]


export default function Home() {

const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
    {/* Modal */}
    
     <div style={{
      transform: modalIsOpen ? "translateX(0%)" : "translateX(-200%)",
     }}
      className='absolute top-0 left-0 w-full h-full z-10 transition-all duration-500' >
      <div className='container mx-auto max-w-2xl h-[80vh] rounded-3xl bg-slate-800 py-6 px-4'>
        <button
         onClick={() => {
          setModalIsOpen(false);
          }}
           className='w-10 h-10 mb-4 font-bold rounded-full bg-slate-600'>
            X
            </button>
        <h3>Soy un modal!</h3>
      </div>
    </div> 
    
    <main className="container max-w-2xl px-6 mx-auto">
  <section className="py-3">
    <small className="text-gray-400 text-md">Mi Balance </small>
    <h2 className="text-4xl font-bold">{currencyFormatter(100000)}</h2>
  </section>

  <section className="flex items-center gap-2 py-3">
    <button onClick={() => {setModalIsOpen(true)
    }}
     className="btn btn-primary">
      + Expensas 
      </button>
    <button className="btn btn-primary-outline">+ Ingresos </button>
  </section>

  {/* Expensas */}
  <section className='py-3'>
  <h3 className='text-2xl'>Mis Expensas</h3>
  <div className='flex flex-col gap-4 mt-6'>
    {DUMMY_DATE.map(expensa => {
      return (
     <ExpensasCategory
     color={expensa.color}
      title={expensa.title}
      total={expensa.total}
      />  
      );
    })}
  </div>
  </section>

{/* sección de gráficos */}
<section className='py-6'>
  <h3 className='text-2xl'>Estadísticas</h3>
  <div className='w-1/2 mx-auto'>
    <Doughnut 
    data={{
      labels: DUMMY_DATE.map((expensa)=> expensa.title),
      datasets: [
        {
          label: "Expensas",
          data: DUMMY_DATE.map((expensa) => expensa.total),
          backgroundColor: DUMMY_DATE.map((expensa) => expensa.color),
          bolderColor: ['#18181b'],
          borderWidth: 5, 
        },
      ],
    }}
     />
  </div>
</section>
  </main>
  </>
  );
}
