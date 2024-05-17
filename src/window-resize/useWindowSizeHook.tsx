import { useLayoutEffect, useState } from "react";
const dimentions = {
    width: 0,
    height: 0,
}

const useWindowSizeHook = () => {
    const [size, setSize] = useState(dimentions);

    const handleResize = () => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        })
    }


    useLayoutEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => window.removeEventListener("resize", handleResize);
    }, [])
    return size;
}

export default useWindowSizeHook;