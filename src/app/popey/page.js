import Container from "../components/container";
import Link from 'next/link';
const collections = [
    {
      id: '01',
      image: '/item-01.png',
      title: 'ポパイ（Popeye）',
      link: '/'
    },
    {
      id: '02',
      image: '/item-02.png',
      title: 'オリーブ・オイル（Olive Oyl）',
      link: '/'
    },
    {
      id: '03',
      image: '/item-03.png',
      title: "スウィーピー（Swee'Pea）",
      link: '/'
    },
    {
      id: '04',
      image: '/item-04.png',
      title: 'ブルート（Bruto）',
      link: '/'
    },
    {
      id: '05',
      image: '/item-05.png',
      title: 'ウィンピー（Wimpy）',
      link: '/'
    },
    {
      id: '06',
      image: '/item-06.png',
      title: 'ジープ（Jeep）',
      link: '/'
    },
  ];
export default function Popey() {
  return (
    <section>
            <div class="bg-white md:pt-[45px] md:pb-10 pt-[25px] pb-[30px]">
                <Container>
                    <div class="text-center md:text-5xl font-extrabold mb-2.5 text-2xl">ポパイ™</div>
                    <div>
                        <img className="w-full" src="/collectionTitle.png" alt="" />
                    </div>
                </Container>
            </div>
            <div class="bg-[#f3f3f3] md:pt-[100px] md:pb-[135px] pt-10 pb-[65px]">
                <Container>
                    <div class="flex flex-wrap gap-[62px_0] mr-[-17px] ml-[-17px] max-md:justify-between max-md:m-0">
                        {collections.map((collection)=>{
                            return (
                                <div class="lg:w-3/12 px-[17px] md:w-[calc(100%_/_3)] w-[48%] max-md:flex max-md:flex-col max-md:justify-between max-md:p-0" key={collection.id}>
                                <div class="p-collection__item--wrap">
                                    <div class="overflow-hidden shadow-[2px_0_30px_rgba(24,71,96,0.2)] rounded-[10px]">
                                        <img className="w-full max-w-[365px]" src={collection.image} alt="" />
                                    </div>
                                    <p class="text-center md:text-[22px] font-black md:pt-5 md:pb-[15px] text-sm pt-[15px] pb-2.5">{collection.title}</p>
                                </div>
                                <Link href={collection.link} class="flex justify-center items-center w-full md:max-w-[245px] md:h-[54px] bg-black text-white md:text-lg mx-auto my-0 rounded-[10px] text-sm max-w-[180px] h-11">
                                    特設サイトを見る
                                </Link>
                            </div>
                            )
                        })}
                    </div>
                </Container>
            </div>
        </section>
  );
}
