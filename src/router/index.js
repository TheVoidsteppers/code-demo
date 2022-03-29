import Layout from '../components/layout'
import BeardHtml from '../view/beard-html/index'
import FormAdd from '../view/form-add/index'
import FormDetail from '../view/form-detail/index'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Layout,
    redirect: { name: 'FormAdd' },
    children: [
      {
        path: '/form-add',
        name: 'FormAdd',
        component: FormAdd
      },
      {
        path: '/form-detail',
        name: 'FormDetail',
        component: FormDetail
      },
      {
        path: '/beard-html',
        name: 'BeardHtml',
        component: BeardHtml
      }
    ]
  }
]

export default routes
