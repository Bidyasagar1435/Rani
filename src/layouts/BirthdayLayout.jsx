import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BirthdayBackground from '../components/BirthdayBackground.jsx'
import BirthdayHeader from '../components/BirthdayHeader.jsx'
import PageNavigation from '../components/PageNavigation.jsx'
import SiteFooter from '../components/SiteFooter.jsx'
import { birthdayPages } from '../data/birthdayPages.js'
import '../App.css'

function BirthdayLayout({ children }) {
  const { pathname } = useLocation()
  const currentIndex = birthdayPages.findIndex((page) => page.path === pathname)
  const safeIndex = currentIndex < 0 ? 0 : currentIndex
  const currentPage = birthdayPages[safeIndex]
  const previous = safeIndex === 0
    ? { path: '/', title: 'Welcome' }
    : birthdayPages[safeIndex - 1]
  const next = safeIndex === birthdayPages.length - 1
    ? { path: '/', title: 'Welcome' }
    : birthdayPages[safeIndex + 1]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <main>
      <BirthdayBackground />
      <BirthdayHeader currentPageId={currentPage.id} />
      {children}
      <PageNavigation
        previous={previous}
        next={next}
        pageNumber={safeIndex + 1}
        totalPages={birthdayPages.length}
      />
      <SiteFooter />
    </main>
  )
}

export default BirthdayLayout
