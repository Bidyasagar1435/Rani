import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Welcome from './Welcome.jsx'

const BirthdayPage = lazy(() => import('./pages/BirthdayPage.jsx'))
const CandlePage = lazy(() => import('./pages/CandlePage.jsx'))
const FinalePage = lazy(() => import('./pages/FinalePage.jsx'))
const FriendshipPage = lazy(() => import('./pages/FriendshipPage.jsx'))
const LetterPage = lazy(() => import('./pages/LetterPage.jsx'))
const MemoriesPage = lazy(() => import('./pages/MemoriesPage.jsx'))
const ReportPage = lazy(() => import('./pages/ReportPage.jsx'))
const SurprisePage = lazy(() => import('./pages/SurprisePage.jsx'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/birthday" element={<Navigate to="/birthday/intro" replace />} />
          <Route path="/birthday/intro" element={<BirthdayPage />} />
          <Route path="/birthday/surprise" element={<SurprisePage />} />
          <Route path="/birthday/memories" element={<MemoriesPage />} />
          <Route path="/birthday/letter" element={<LetterPage />} />
          <Route path="/birthday/friendship" element={<FriendshipPage />} />
          <Route path="/birthday/report" element={<ReportPage />} />
          <Route path="/birthday/finale" element={<FinalePage />} />
          <Route path="/birthday/candle" element={<CandlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
