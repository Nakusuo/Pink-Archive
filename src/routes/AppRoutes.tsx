import { Route, Routes } from 'react-router-dom'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<p>Pink Archive</p>} />
    </Routes>
  )
}
