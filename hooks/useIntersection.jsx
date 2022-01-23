import {useEffect} from 'react'
const options = {
	threshold:0.3
}
const useIntersection = (callback,ref) => {
	useEffect(()=>{
		let observer = new IntersectionObserver(callback,options)
		if(ref.length){
			ref.current.forEach(section=>observer.observe(section))
		}else{
			observer.observe(ref.current)
		}
	},[])
}

export default useIntersection