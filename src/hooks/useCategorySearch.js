import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const useCategorySearch = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [currentCategory, setCurrentCategory] = useState('')

    useEffect(() => {
        setCurrentCategory(searchParams.get('category') || '')
    }, [searchParams])

    const changeCategorySearch = (category, toggle = false) => {
        if (category === currentCategory && toggle) {
            setSearchParams({ category: '' })
        } else {
            setSearchParams({ category })
        }
    }
    return { currentCategory, changeCategorySearch }
}

export default useCategorySearch
