"use client"; 

import { useState } from 'react';
import { currencyFormatter } from '@/lib/Utilidades';
import ExpensasCategory from '@/components/ExpensasCategory';
import Modal from "@/components/Modal"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATE = [
  {
    id: 1,
    title: "Entretenimiento",
    color: '#060',
    total: 500,
  },
  {
    id: 2,
    title: "Alquiler",
    color: '#239',
    total: 200,
  },
  {
    id: 3,
    title: "Comida",
    color: '#310',
    total: 1200,
  },
  {
    id: 4,
    title: "Telefono",
    color: '#400',
    total: 800,
  },
  {
    id: 5,
    title: "Internet",
    color: '#640',
    total: 1000,
  },
]


export default function Home() {
const [modalIsOpen, setModalIsOpen] = useState(true);

  return (
    <>
    {/* Modal */}
    <Modal show={modalIsOpen} onClose={setModalIsOpen }> 
     <h3>Hola Mundo</h3> 
     </Modal>
    
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
  <section className='py-6'>
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
