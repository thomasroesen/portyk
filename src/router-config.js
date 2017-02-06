import Home from './components/Home'
import Press from './components/Press'
import Prices from './components/Prices'
import Background from './components/Background'
import Contact from './components/Contact'

export default [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Press',
    path: '/press',
    component: Press
  },
  {
    name: 'Prices',
    path: '/prices',
    component: Prices
  },
  {
    name: 'Background',
    path: '/background',
    component: Background
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact
  }
]
