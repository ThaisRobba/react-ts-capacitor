import Home from './pages/Home'
import Share from './pages/Share'
import Clipboard from './pages/Clipboard'
import Storage from './pages/Storage'

export const paths = {
  home: '/',
  share: '/share',
  clipboard: '/clipboard',
  storage: '/storage',
}

const routes = [
  {
    path: paths.home,
    component: Home,
    exact: true,
  },
  {
    path: paths.share,
    component: Share,
    exact: true,
  },
  {
    path: paths.clipboard,
    component: Clipboard,
    exact: true,
  },
  {
    path: paths.storage,
    component: Storage,
    exact: true,
  },
]

export default routes
