import { useState, useEffect } from 'react';
import { debounce } from '@/functions'

export const useIsMobile = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth)


  const handleResizeWindow = () => {
    setIsMobile(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', debounce(handleResizeWindow))
    return () => {
      window.removeEventListener('resize', debounce(handleResizeWindow))
    }
  }, [])


  return isMobile < 960
}