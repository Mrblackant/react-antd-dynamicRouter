
import Loadable from './loadable'


export const navMeuns=[
    {
        title:'登录页',
        key:'/login',
        component:Loadable('login/index'),
        hideMeun:true
    },
    {
        title:'首页',
        key:'/',
        component:Loadable('index/index'),
        exact:true
    },
    {
        title:'页面',
        key:'/pages',
        children:[
            {
                title:'列表页',
                key:'/pagesList',
                children:[{
                    title:'单个筛选条件列表页',
                    key:'/listSigel',
                    component:Loadable('pages/listSigel')
                },{
                    title:'多个筛选条件列表页',
                    key:'/listMore',
                    component:Loadable('pages/listMore')
                }]
            },
            {
                title:'详情页',
                key:'/pagesDetail',
                component:Loadable('pages/detail')
            }
        ]
    },
    {
        title:'功能拓展',
        key:'/extension',
        children:[
            {
                title:'链接参数',
                key:'/queryParams',
                component:Loadable('extension/queryParams')
            },
        ]
    }
]


// 处理路由name、path全路径，方便菜单展开，面包屑渲染
const makeFullPath = (meunsArr: any[], parentPath: string,parentTitle: string) => {
    meunsArr.forEach((k) => {
      k.fullPath = parentPath ? parentPath + k.key : k.key
      k.fullTitle = parentTitle ?`${ parentTitle }/${k.title}` : k.title
      if (k.children) {
        k.children.forEach((l: any) => {
          l.fullPath = k.key + l.key
          l.fullTitle = `${k.title}/${l.title}`
          if (l.children) makeFullPath(l.children, l.fullPath,l.fullTitle)
        })
      }
    })
  }

  makeFullPath(navMeuns,'','')

// 将路由组件扁平化，方便路由渲染
export const tArr:any[]=[]
const flattenRoute=(dataArr:any[])=>{
    dataArr.map(item=>{
        if(item.component){
            tArr.push(item)
        }
        if(item.children){flattenRoute(item.children)}
    })
}
flattenRoute(navMeuns)

