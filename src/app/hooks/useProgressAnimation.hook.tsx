import { useEffect, useState } from 'react';

const useProgressAnimation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.progressbar');
      if (section) {
        const { top, height } = section.getBoundingClientRect();
        const sectionTop = top + window.scrollY;
        const sectionHeight = height;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
          const progress = ((windowHeight - sectionTop) / windowHeight) * 100;
          setProgress(progress);
        }
      }


    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};

export default useProgressAnimation;
