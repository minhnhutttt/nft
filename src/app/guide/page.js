import Container from "../components/container";
import Link from 'next/link';

export default function Guide() {
  return (
    <section className="md:py-[60px] py-[30px]">
            <Container>
                <div className="md:text-5xl font-extrabold bg-[#f3f3f3] flex justify-center items-center md:h-[100px] text-[28px] h-[60px]">DIVER Wallet登録方法</div>
                <section className="w-full max-w-[1000px] mx-auto">
                    <div className="flex justify-center pt-[35px]">
                        <h2>
                            <img src="/w-logo.png" alt="" />
                        </h2>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">①ダイバーウォレットをダウンロードする</h3>
                        </div>
                        <div className="md:flex justify-center block">
                            <div className="text-center mx-auto max-md:mb-[10%]">
                                <p className="md:text-[22px] font-bold tracking-wider text-center md:mb-8 text-lg mb-4">Install DIVER Wallet for iOS</p>
                                <Link href="#" className="flex justify-center mb-[25px]">
                                    <img src="/btn-apple.png" alt="" />
                                </Link>
                                <figure className="text-center">
                                    <img className="mx-auto" src="/qr-apple.png" alt="" />
                                </figure>
                            </div>
                            <div className="text-center mx-auto max-md:mb-[10%]">
                                <p className="md:text-[22px] font-bold tracking-wider text-center md:mb-8 text-lg mb-4">Install DIVER Wallet for Android</p>
                                <Link href="#" className="flex justify-center mb-[25px]">
                                    <img src="/btn-google.png" alt="" />
                                </Link>
                                <figure className="text-center">
                                    <img className="mx-auto" src="/qr-google.png" alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">②「新しいウォレットを作成」をタップする</h3>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-02.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">③ウォレット名を決めて次へ</h3>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-03.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">④リカバリーフレーズを確認し、表示された12の英単語を紙に記録</h3>
                            <p className="text-sm leading-[1.8] tracking-wider mt-2.5 md:pl-7 pl-0">
                                リカバリーフレーズを紛失しダイバーウォレットにアクセスできなくなると、暗号資産にアクセスすることが不可能となり、復元ができないため資産を失います。 リカバリーフレーズを失うことは暗号資産を失うことと同じ意味です。英単語のスペルも必ず確認してください。
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-04.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">⑤リカバリーフレーズの並べ替えを行い、「バックアップの完了」をタップ</h3>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-05-01.png" alt="" />
                            </div>
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-05-02.png" alt="" />
                            </div>
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-05-03.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">⑥パスワードを入力する</h3>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-06.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">⑦ウォレットアドレスコピーする</h3>
                            <p className="text-sm leading-[1.8] tracking-wider mt-2.5 md:pl-7 pl-0">
                                受信ボタンをタップする→QRコード下の「コピー」をタップしてコピーする。
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-07.png" alt="" />
                            </div>
                            <div className="w-3/12 shadow-[0_4px_15px_rgba(0,0,0,0.4)] mx-[3%]">
                                <img className="w-full" src="/wallet-07-02.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-10 md:mb-24 mt-5 mb-[50px]">
                        <div className="mb-10 max-md:mt-[8%]">
                            <h3 className="md:text-2xl font-bold text-lg max-md:text-center">⑧各ページの申し込みフォームへ必要事項を入力して申し込み完了です。</h3>
                        </div>
                    </div>
                </section>
            </Container>
        </section>
  );
}
