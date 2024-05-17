import { useEffect, RefObject } from "react";

const UseOutsideClickHook = (ref: RefObject<HTMLElement>, callback: (arg: Event) => void) => {

    useEffect(() => {
        const handleClick = (e: MouseEvent | TouchEvent) => {
            // e.target instanceof HTMLElement && 
            // e.target instanceof Node &&
            if (!ref.current || ref.current.contains(e.target as Node)) {
                return;
            }
            callback(e)
        }
        document.addEventListener('mousedown', handleClick);
        document.addEventListener('touchstart', handleClick);
        return () => {
            document.removeEventListener('mousedown', handleClick);
            document.removeEventListener('touchstart', handleClick);
        }

    }, [ref, callback])


}

export default UseOutsideClickHook;