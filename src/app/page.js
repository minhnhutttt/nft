import Image from 'next/image';
import Slider from './home/slider';
import Pickup from './home/pickup';
import Collection from './home/collection';
import Intro from './home/intro';

export default function Home() {
  return (
    <main className="">
      <Slider />
      <Pickup />
      <Collection />
      <Intro />
    </main>
  );
}
