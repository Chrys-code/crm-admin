import React, { useEffect, useState } from 'react';

export const useViewport = (): { width: number } => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect((): (() => void) => {
    const handleWindowResize: () => void = (): void =>
      setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    return (): void => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
};
