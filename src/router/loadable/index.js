/*
  路由懒加载 Loadable
*/
import Loadable from 'react-loadable'
import { Loading } from './loading'

function loadFn(componentPath) {
  return Loadable({
    loading: Loading,
    loader: () => import(`../../components/${componentPath}.tsx`),
    delay: 400, // 0.4 seconds 0.4s内加载不出展示loading
  })
}
export default loadFn
