import { Route, Routes } from 'react-router-dom'
import { Marco } from '../components/layout/Marco'
import { IndicePage } from '../pages/IndicePage'

export function AppRoutes() {
  return (
    <Marco>
      <Routes>
        <Route index element={<IndicePage />} />
        <Route path="*" element={<IndicePage />} />
      </Routes>
    </Marco>
  )
}
