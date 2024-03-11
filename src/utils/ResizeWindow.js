import { useState, useEffect } from 'react';

function useResizeWindow(Component) {
  function ComponentUseResizeWindow(props) {
    const [widthWindow, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResizeWindow = (e) => {
        setTimeout(setWidth(e.target.innerWidth), 10000);
      };
      window.addEventListener("resize", handleResizeWindow);
      return () => {
        window.removeEventListener("resize", handleResizeWindow);
      };
    }, []);
    return <Component {...props} widthWindow={widthWindow}/>
  }

  return ComponentUseResizeWindow;
}

export default useResizeWindow;