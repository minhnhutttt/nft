import Link from 'next/link';
import Container from '../container';
import FooterItem from './footerItem';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="bg-black bg-[url(/deco.png)] bg-[bottom_right] bg-no-repeat pb-5 max-md:bg-[200px_auto]">
        <Container>
          <div className="flex justify-center items-center md:py-[120px] max-md:flex-col py-20">
            <Link href="/" className="c-footer__logo">
              <img src="/logo-footer.png" alt="" />
            </Link>
            <div className="flex md:ml-[100px] max-md:mt-10 md:[&>ul+ul]:ml-[90px] [&>ul+ul]:ml-[30px]">
              <ul className='[&>li+li]:mt-4'>
                <FooterItem link='#'>コレクション一覧</FooterItem>
                <FooterItem link='#'>ピックアップ</FooterItem>
                <FooterItem link='#'>はじめての方</FooterItem>
                <FooterItem link='#'>カテゴリで探す</FooterItem>
              </ul>
              <ul className='[&>li+li]:mt-4'>
                <FooterItem link='#'>DIVER Wallet登録方法</FooterItem>
                <FooterItem link='#'>利用規約</FooterItem>
                <FooterItem link='#'>プライバシーポリシー</FooterItem>
                <FooterItem link='#'>お問い合わせ</FooterItem>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-white">© 2023 NFTレター. All rights reserved.</p>
      </Container>
      </div>

    </footer>
  );
}
