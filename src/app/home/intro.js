import Container from '../components/container';
import Title from '../components/title';
import Link from 'next/link';
const searchItems = [
  {
    id: '01',
    image: '/search-01.png',
    title: '漫画・キャラクター',
  },
  {
    id: '02',
    image: '/search-02.png',
    title: 'プレゼント',
  },
  {
    id: '03',
    image: '/search-03.png',
    title: '季節のNFT',
  },
  {
    id: '04',
    image: '/search-04.png',
    title: '女性に人気',
  },
  {
    id: '05',
    image: '/search-05.png',
    title: '男性に人気',
  },
];
const Intro = () => {
  return (
    <section className="bg-[#f3f3f3] px-5">
      <div className="mx-auto w-full max-w-[440px] md:max-w-[1270px]">
        <div className="flex items-end pt-5 max-md:flex-col">
          <div className=" max-w-[780px] pb-5">
            <h5 className="mb-2.5 text-2xl font-black tracking-[0.12em] underline md:mb-5 md:text-[28px]">
              NFTレターとは？
            </h5>
            <p className="mb-[15px] text-sm leading-[1.7] md:mb-6 md:text-[16px]">
              ブロックチェーン技術を基盤に、コピーが容易なデジタルデータに対し、唯一無二な資産的価値を付与したメッセージNFTです。
              <br />
              ブロックチェーンの本質を活かしWeb3に最適化されたNFTレターは「世界に一つ」しかないメッセージを受け取ることができます。
              <br />
              自分用に、プレゼント用に好きなキャラクターから、ここにしかない貴重なNFTレターを受け取ろう。
            </p>
            <p className="text-4xl font-black tracking-widest md:text-5xl">
              Search<span className="tmd:ext-4xl text-2xl">(見つける)</span>
            </p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img className="max-md:max-w-[200px]" src="/img-intro.png" alt="" />
          </div>
        </div>
        <div className="pb-[50px] md:pb-[115px]">
          <div className="flex h-[55px] items-center justify-center bg-black text-lg font-black tracking-wider text-white md:h-[71px] md:text-2xl">
            カテゴリで探す
          </div>
          <div className="mb-[30px] flex border-t-2 border-solid border-t-[#f3f3f3] bg-white pb-[30px] pt-5 max-md:flex-wrap max-md:justify-center md:mb-[55px] md:pb-14 md:pt-7 md:[&>*+*]:border-l-[3px] md:[&>*+*]:border-solid md:[&>*+*]:border-l-[#D9D9D9]">
            {searchItems.map((item) => {
              return (
                <Link
                  href="#"
                  className="flex w-6/12 flex-col items-center justify-start pb-0 pt-[30px]  max-md:px-2.5 md:w-1/5 md:justify-center md:pb-11 md:pt-7"
                  key={item.id}
                >
                  <p>
                    <img src={item.image} alt="" />
                  </p>
                  <p className="px-0 py-2.5 text-center text-base font-black text-black md:text-2xl">
                    {item.title}
                  </p>
                  <p>
                    <img src="/ic-link.png" alt="" />
                  </p>
                </Link>
              );
            })}
          </div>
          <a
            href="#"
            className="mx-auto my-0 flex h-11 w-[200px] items-center justify-center rounded-[10px] bg-black text-sm font-extrabold text-white md:h-[53px] md:w-[245px] md:text-lg"
          >
            はじめての方はこちら
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
