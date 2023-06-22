import Container from '../components/container';
import Title from '../components/title';
import Link from 'next/link';
const collections = [
  {
    id: '01',
    image: '/collection-01.png',
    title: 'パディントン ベア™',
  },
  {
    id: '02',
    image: '/collection-02.png',
    title: 'サンタクロース',
  },
  {
    id: '03',
    image: '/collection-03.png',
    title: 'ウルトラマン',
  },
  {
    id: '04',
    image: '/collection-04.png',
    title: '信長の野望',
  },
  {
    id: '05',
    image: '/collection-05.png',
    title: 'ポパイ™',
  },
  {
    id: '06',
    image: '/collection-06.png',
    title: 'ベティー ブープ™',
  },
];
const Collection = () => {
  return (
    <section className="pb-5 pt-[50px] md:pb-[30px] md:pt-[110px]">
      <div className="pb-5">
        <Container>
          <Title>コレクション一覧</Title>
        </Container>
      </div>
      <Container>
        <div className="flex flex-wrap max-md:ml-[-5px] max-md:mr-[-5px] md:-mx-3.5">
          {collections.map((collection) => {
            return (
              <div className="mb-[30px] w-6/12 px-[5px] md:mb-[75px] md:w-3/12 md:px-3.5" key={collection.id}>
                <Link href="#">
                  <div className="c-shadow-[3px_0_15px_#dfdfdf] overflow-hidden rounded-[20px]">
                    <img className="w-full" src={collection.image} alt="" />
                  </div>
                  <p className="mt-2.5 text-base font-black text-black md:mt-4 md:text-2xl">
                    {collection.title}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Collection;
