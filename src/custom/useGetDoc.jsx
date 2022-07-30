import { useState, useEffect } from 'react'
import { API_URL } from '../config/config'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  return { data, isLoading, error }
}

export default useFetch
