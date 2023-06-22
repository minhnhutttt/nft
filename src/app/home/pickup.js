'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import Container from '../components/container';
import Title from '../components/title';
import Link from 'next/link';
const pickups = [
  {
    id: '01',
    image: '/pickup-01.png',
    title: 'POPEYE(ポパイ)',
    link: '/',
  },
  {
    id: '02',
    image: '/pickup-02.png',
    title: '信長の野望',
    link: '/',
  },
  {
    id: '03',
    image: '/pickup-03.png',
    title: 'ウルトラマン',
    link: '/',
  },
  {
    id: '04',
    image: '/pickup-04.png',
    title: 'Juju（野田 樹潤)',
    link: '/',
  },
  {
    id: '05',
    image: '/pickup-05.png',
    title: 'Santa',
    link: '/',
  },
];
const Pickup = () => {
  return (
    <div className="bg-[url('/bg-01.png')] pb-[35px] pt-[25px] md:pb-[65px] md:pt-[55px]">
      <div className="pb-2.5">
        <Container>
          <Title>ピックアップ</Title>
        </Container>
      </div>
      <Splide
        options={{
          type: 'loop',
          arrows: false,
          pagination: false,
          drag: 'free',
          focus: 'center',
          autoWidth: true,
          perPage: 3,
          autoScroll: {
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {pickups.map((pickup) => {
          return (
            <SplideSlide key={pickup.id}>
              <div className="px-2.5 md:px-[18px]">
                <div className="overflow-hidden rounded-[10px] shadow-[2px_0_30px_rgba(24,71,96,0.2)]">
                  <img
                    className="w-full max-w-[200px] md:max-w-[365px]"
                    src={pickup.image}
                    alt=""
                  />
                </div>
                <p className="pb-2.5 pt-[15px] text-center text-[22px] text-base font-black md:pb-[15px] md:pt-5">
                  {pickup.title}
                </p>
                <Link
                  href={pickup.link}
                  className="mx-auto my-0 flex h-11 w-[180px] items-center justify-center rounded-[10px] bg-black text-sm text-white md:h-[54px] md:w-[245px] md:text-lg"
                >
                  特設サイトを見る
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Pickup;
