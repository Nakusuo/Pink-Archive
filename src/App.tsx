import { HashRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

/* HashRouter y no BrowserRouter: GitHub Pages no sabe reescribir rutas a
   index.html, así que /#/objeto/x es la única forma de que un enlace directo
   a una ficha no dé 404. */
export default function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}
