import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col gap-4 items-center justify-center">
          <p className='text-4xl font-bold'>
            The Ultimate URL shortner
          </p>
          <p className="px-36 text-center">
          This is the most straightforward URL shortener.&quot;Welcome to our URL Shortener! Simplify long links into concise,
  shareable URLs in just seconds. It&apos;s fast, user-friendly, and designed to make your online sharing effortless.
  Try it out and experience the ease!
            </p>
            <div className ='flex gap-3 justify-center'>
           <Link href="/shorten"><button className= 'bg-purple-500 rounded-lg shadow-lg p-3  py-1 font-bold text-white'>Try now</button></Link>
           <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
           </div>
        </div>
        <div className="bg-white-500 justofy-start relative">
          <Image alt="An image of vector" src={"/vector.png"} fill={true} />
        </div>
      </section>
    </main>
  );
}

