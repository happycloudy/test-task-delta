import {useEffect, useRef} from 'react'

export function useClickOutside(elementRef, callback) {
	const callbackRef = useRef(callback)
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
				callbackRef.current()
			}
			return
		}
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [elementRef, callback])
}

export default useClickOutside