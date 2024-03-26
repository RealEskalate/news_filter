import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link';
type NavbarProps = {
  handler: () => void
}

export default function Navbar({handler}:NavbarProps ) {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <div className={`bg-white p-5 h-[10vh] flex justify-between items-center ${isSticky ? 'sticky top-0 left-0 w-full z-10' : 'relative'}`}>
    <Link href={'/'}><Image src="/Rectangle11.png" alt="Logo" width={60} height={60} className="mb-2 hover:cursor-pointer transition-all duration-300 ease-in-out hover:scale-110" /></Link>
    {/* <img src="/Rectangle11.png" alt="Logo" className="mb-2 h-[18vh]" /> */}

      <button className="bg-blue-500 flex items-center px-4 py-2  rounded-full hover:bg-blue-400" onClick={handler}>
        <span className='mr-4'>Subscribe to Keyword</span>
        <Image src="/vector.svg" alt="add" width={20} height={20} className=''/>
      </button>
     
  </div>
  )
}
