import { useState, useEffect, useRef } from 'react'

const useClickFocus = (intialState: boolean = false) => {
    const [clickShow, setClickShow] = useState<boolean>(intialState)
    const ref = useRef<any>(null)

    const handleClickInside = (callback?: () => void) => {
        if (callback) {
            callback()
        }
        setClickShow(false)
    }
    const handleHover = (e: any) => {
        if (ref.current && ref.current.contains(e.target)) {
            setClickShow(true)
        } else setClickShow(false)
    }

    useEffect(() => {
            document.addEventListener('click', handleHover)
        return () => {
                document.removeEventListener('click', handleHover)
        }
    }, [ref, clickShow])

    return {
        handleClickInside,
        clickShow,
        setClickShow,
        ref,
    }
}

export default useClickFocus
