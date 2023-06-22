import Container from "../components/container";
import Link from 'next/link';

export default function Introduction() {
  return (
    <section className="md:py-[60px] py-[30px]">
            <Container>
                <div className="md:text-5xl font-extrabold bg-[#f3f3f3] flex justify-center items-center md:h-[100px] text-[28px] h-[60px]">はじめての方</div>
                <div className="w-full max-w-[1000px] mx-auto md:py-20 py-10">
                    <h5 className="md:text-2xl font-extrabold text-lg border-b-2 border-b-[#c7e8ff] border-solid">NFTレターとは?</h5>
                    <p className="md:text-base leading-[1.8] md:pt-[25px] md:pb-[70px]  text-[13px] pt-[15px] pb-10">
                        ブロックチェーン技術を基盤に、コピーが容易なデジタルデータに対し、唯一無二な資産的価値を付与したメッセージNFTです。<br />ブロックチェーンの本質を活かしWeb3に最適化されたNFTレターは「世界に一つ」しかないメッセージを受け取ることができます。<br />
                        自分用に、プレゼント用に好きなキャラクターから、ここにしかない貴重なNFTレターを受け取ろう。
                    </p>
                    <h5 className="md:text-2xl font-extrabold text-lg border-b-2 border-b-[#c7e8ff] border-solid">はじめて利用する場合</h5>
                    <p className="md:text-base leading-[1.8] md:pt-[25px] md:pb-[70px]  text-[13px] pt-[15px] pb-10">
                        メッセージを受け取る場合、「<span className="font-black text-[#00f]">DIVER Wallet</span>」をダンロードする必要があります。<br />
                        <Link href="#" className="md:text-lg font-extrabold text-black flex justify-center items-center md:w-[245px] md:h-[53px] bg-[#c7e8ff] mt-[25px] rounded-[10px] w-[200px] h-11 text-sm">DIVER Wallet登録方法</Link>
                    </p>
                    <h5 className="md:text-2xl font-extrabold text-lg border-b-2 border-b-[#c7e8ff] border-solid">メッセージの受け取り方</h5>
                    <p className="md:text-base leading-[1.8] md:pt-[25px] md:pb-[70px]  text-[13px] pt-[15px] pb-10">
                        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。<br />
                        <br />
                        詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。
                    </p>
                </div>
            </Container>
        </section>
  );
}
