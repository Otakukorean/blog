"use client";
import React , {useEffect , useState} from 'react'

const useWindowWidth = () => {
    const [windowSize , SetWindowSize] = useState(() => {
        if(typeof window === 'undefined') {
            return {
                width : 0 ,height : 0
            }
        }
        return {
            width : window.innerWidth ,
            height : window.innerHeight
        }
    })

    useEffect(() => {
        const handleResize = () => {
            SetWindowSize({
                width : window.innerWidth ,
                height : window.innerHeight
            })
        }

        window.addEventListener('resize' , handleResize)

        return () => window.removeEventListener('resize',handleResize)
    },[])


  return windowSize
}

export default useWindowWidth