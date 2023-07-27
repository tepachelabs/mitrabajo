import { FC, useEffect, useState } from 'react'
import { Button, ThemeUIStyleObject } from 'theme-ui'

const heightLimit = 500

const styles: Record<string, ThemeUIStyleObject> = {
  topCta: {
    bottom: ['1em', '5em'],
    position: 'fixed',
    right: '1em',
  },
}

export const ToTop: FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () =>
      window.removeEventListener('scroll', listenToScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop

    if (winScroll > heightLimit) {
      !isVisible && setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  return (
    <>
      {isVisible && <Button onClick={ scrollToTop } sx={ styles.topCta }>Ir Arriba</Button>}
    </>
  )
}
