import React from 'react'
import eggOne  from '../images/egg_01.png';

// style={{height:"80%"}}
//https://tailwindcss.com/docs/responsive-design

function Content() {
  return (
    <>
    <div className='grid grid-cols gap-4 md:grid-cols-3'>
        <div className='menu-card '>
            <img src={eggOne} alt="eggpicture" className="h-full rounded mb-20  object-cover"/>
            <div className='flex flex-col justify-center items-center shadow'>
                <h2 className='text-2xl mb-2 font-heading'>Egg & Salade first</h2>
                <p className="mb-2 font-body font-bold">Crispy, delicious and nutritious</p>
                

                <span>$32</span>
            </div>
        </div>
        <div className='menu-card'>
            <img src={eggOne} alt="eggpicture" className="h-full rounded mb-20 object-cover"/>
            <div className='flex flex-col justify-center items-center shadow'>
                <h2 className='text-2xl mb-2'>Egg & Salade</h2>
                <p className="mb-2">Crispy, delicious and nutritious</p>
                <span>$32</span>
            </div>
        </div>
        <div className='menu-card'>
            <img src={eggOne} alt="eggpicture" className="h-full rounded mb-20 object-cover"/>
            <div className='flex flex-col justify-center items-center shadow'>
                <h2 className='text-2xl mb-2'>Egg & Salade</h2>
                <p className="mb-2">Crispy, delicious and nutritious</p>
                <span>$32</span>
            </div>
        </div>
    </div>
   

    </>
  )
}

export default Content



// font-thin	font-weight: 100;
// font-extralight	font-weight: 200;
// font-light	font-weight: 300;
// font-normal	font-weight: 400;
// font-medium	font-weight: 500;
// font-semibold	font-weight: 600;
// font-bold	font-weight: 700;
// font-extrabold	font-weight: 800;
// font-black	font-weight: 900;