import { CategoryBar, RandomProducts, ProductCard } from '../../Components'
import { categories, food } from '../../data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const ClientHome = () => {
  const groupedCategories = food.reduce((acumulador, objeto) => {
    const categorias = objeto.categorias.split(', ');

    categorias.forEach((categoria) => {
      const existingCategoria = acumulador.find((group) => group.nombre === categoria);

      if (existingCategoria) {
        existingCategoria.datos.push(objeto);
      } else {
        const newGroup = { nombre: categoria, datos: [objeto] };
        acumulador.push(newGroup);
      }
    });

    return acumulador;
  }, []);

  console.log(groupedCategories);

  return (
    <div>
      <CategoryBar />
      <RandomProducts />
      <div className='p-3'>
        {
          groupedCategories.map(category => (
            <div key={category}>
              <p className='text-3xl font-semibold'>{category.nombre}</p>
              <p className='mb-3 font-semibold text-xl text-gray-500'>
                {
                  categories.find((cat) =>
                    cat.nombre.split(', ').some((part) => category.nombre.includes(part))
                  )?.descripcion || 'Descripción no encontrada'
                }
              </p>
              <Swiper className='' wrapperClass=' h-full pb-8  bg-[#F3F4F6]' slidesPerView='auto' freeMode={true} modules={[FreeMode]}>
                {
                  category.datos.map((product, index) => (
                    <SwiperSlide className={`max-w-fit ${index !== category.datos.length - 1 ? 'mx-2' : ''}`} key={product.id}>
                      <ProductCard key={product.id} product={product} customizable={product.preparable} />
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ClientHome