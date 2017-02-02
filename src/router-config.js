import Home from './components/Home'
import Press from './components/Press'
import Prices from './components/Prices'
import Background from './components/Background'
import Contact from './components/Contact'

export default [
  {
    name: 'Hjem',
    path: '/Home',
    component: Home
  },
  {
    name: 'Presse',
    path: '/Press',
    component: Press
  },
  {
    name: 'Priser',
    path: '/Prices',
    component: Prices
  },
  {
    name: 'Min Bakgrunn',
    path: '/Background',
    component: Background
  },
  {
    name: 'Kontakt Meg',
    path: '/Contact',
    component: Contact
  }
]
