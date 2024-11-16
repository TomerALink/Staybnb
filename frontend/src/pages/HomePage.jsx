import { useEffect, useState } from 'react'
import { AppHeader } from '../cmps/AppHeader'
import { StayList } from '../cmps/StayList'
import { stayService } from '../services/stay.service.js'


export function HomePage() {
  const [currentPos, setCurrentPos] = useState({coords: {latitude:32.0858828, longitude: 34.8193943}})

  useEffect(() => {
    async function fetchPosition() {
      try {
        const pos = await stayService.getCurrentPos()
        setCurrentPos(pos)
      } catch (err) {
        console.error("Failed to fetch position", err)
        setCurrentPos(null) // Fallback value
      }
    }

    fetchPosition()
  }, [])
 
  return (
    <section className='home-page'>
 
      <StayList currentPos={currentPos.coords} />

    </section>
  )
}
