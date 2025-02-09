import { useEffect, useRef } from 'react';

const useAutoClick = (delay = 0) => {
  const buttonRef = useRef(null);

  useEffect( () => {
    if (delay >= 0) {
      const timer = setTimeout( () => {
        if (buttonRef.current) {
          buttonRef.current.click();
        }
      }, delay);

      return () => clearTimeout(timer); // Pulisce il timeout se il componente si smonta
    }
    
    return null;
  }
  , [delay] );

  return buttonRef;
};

export default useAutoClick;
