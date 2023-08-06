import Link from 'next/link';
import Image from 'next/image';
import sokya from './Untitled.png'
import { useEffect, useState } from 'react';
export default function Header({ name }) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(0);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    setCounter(0); // Reset the counter when the image disappears
  };

  const handleMouseMove = (event) => {
    setPosition({ x: 0, y: event.clientY });
  };

  useEffect(() => {
    const h1Element = document.getElementById('specific-h1');
    h1Element.addEventListener('mouseenter', handleMouseEnter);
    h1Element.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      h1Element.removeEventListener('mouseenter', handleMouseEnter);
      h1Element.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
        if(counter>innerWidth){
          setPosition({ x: 0, y: 0});
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const imageStyle = {
    transition: 'transform 0.3s ease',
    transform: `translate(${counter}px, ${position.x}px)`,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
  };
  return (
    <header className="pt-20 pb-12">
       {isVisible && (
       <div style={imageStyle}>
      <Image src={sokya} alt="Profile Image"    width={20} height={20}  />
    </div>
       )}
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a id="specific-h1">{name}</a>
        </Link>
      </p>
    </header>
  );
}
