import { Route, Routes } from 'react-router-dom'
import { Marco } from '../components/layout/Marco'
import { ScrollArriba } from '../components/layout/ScrollArriba'
import { CronologiaPage } from '../pages/CronologiaPage'
import { FichaPage } from '../pages/FichaPage'
import { IndicePage } from '../pages/IndicePage'
import { NoEncontradoPage } from '../pages/NoEncontradoPage'

export function AppRoutes() {
  return (
    <Marco>
      <ScrollArriba />
      <Routes>
        <Route index element={<IndicePage />} />
        <Route path="cronologia" element={<CronologiaPage />} />
        <Route path="objeto/:id" element={<FichaPage />} />
        <Route path="*" element={<NoEncontradoPage />} />
      </Routes>
    </Marco>
  )
}
