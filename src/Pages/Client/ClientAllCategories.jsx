import MeetCategory from '@img/MeetCategory.png'
import { categories } from '../../data'
import { RiHome2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <div className='px-3 py-5'>
      <Link to='/dash2023/restaurant/' className='flex justify-center items-center space-x-2 mb-4 bg-[#ffd6be] rounded-md container mx-auto py-2 font-semibold'>
        <RiHome2Line size={22} />
        <p>Volver al inicio</p>
      </Link>
      <div className='grid grid-cols-2 gap-x-4 gap-y-7'>
        {categories.map(item => (
          <div className={`w-full mx-2`} key={item.id}>
            <div className='bg-white rounded-2xl shadow-lg p-2 cursor-pointer transition-all duration-300 flex justify-between hover:shadow-xl'>
              <p className='font-semibold text-left text-xl w-1/2 break-all'>{item.nombre}</p>
              <div className='w-1/2 flex justify-center items-center'>
                <img src={'http://18.117.237.107:8080/dash2023/restaurant/' + MeetCategory} className='h-44 w-44 ' alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default AllCategories