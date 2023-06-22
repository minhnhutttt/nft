'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const items = [
  {
    id: '01',
    image: '/slider-01.png',
    title: 'POPEY',
  },
  {
    id: '02',
    image: '/slider-02.png',
    title: 'Santa Claus',
  },
  {
    id: '03',
    image: '/slider-03.png',
    title: 'ウルトラマン',
  },
  {
    id: '04',
    image: '/slider-01.png',
    title: 'POPEY',
  },
  {
    id: '05',
    image: '/slider-02.png',
    title: 'Santa Claus',
  },
  {
    id: '06',
    image: '/slider-03.png',
    title: 'ウルトラマン',
  },
];
const Slider = () => {
  return (
    <div className="slider mb-[60px] mt-10 md:mb-[95px] md:mt-14">
      <Splide
        options={{
          autoplay: true,
          type: 'loop',
          perMove: 1,
          focus: 'center',
          autoWidth: true,
          pagination: true,
          arrows: true,
        }}
      >
        {items.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div className="overflow-hidden rounded-[20px] px-2 py-0">
                <div className="relative">
                  <div>
                    <img
                      className="w-full max-w-[300px] md:max-w-[600px]"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <p className="absolute inset-x-0 bottom-0 flex h-[26%] items-center justify-center bg-[rgba(0,0,0,0.6)] text-2xl font-black tracking-[0.06em] text-white md:text-4xl">
                    {item.title}
                  </p>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Slider;
