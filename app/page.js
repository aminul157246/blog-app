import Image from 'next/image';
import img from '@/public/banner.jpg'
export default function Home() {
  return (
    <main className="p-24">
      <div>
        <h1>Hello world</h1>
        <Image  src={img} alt='banner' placeholder='blur'/>
      </div>
    </main>
  );
}
