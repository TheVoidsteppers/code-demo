import Layout from '../components/layout'
import BeardHtml from '../view/beard-html'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    children: [
      {
        path: '/beard-html',
        name: 'BeardHtml',
        component: BeardHtml
      }
    ]
  }
]

export default routes
