
import Loadable from './loadable'

export const NotFound=Loadable('notFound/index')
export const Login=Loadable('login/index')
export let navMeuns=[
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
    },{
        title:'ts',
        key:'/ts',
        children:[
            {
                title:'拓展-ts',
                key:'/learnts',
                component:Loadable('typeScript/index')
            },
        ]  
    },
    {
        title:'some',
        key:'/some',
        children:[
            {
                title:'some',
                key:'/some',
                component:Loadable('something/index','jsx')
            },
        ]  
    },
    {
        title:'gaia-mall',
        key:'/gaia-mall',
        children:[
            {
                title:'gaia-mall',
                key:'/gaia-mall',
                component:Loadable('gaia-mall/index')
            },
            {
                title:'entry',
                key:'/entry',
                component:Loadable('gaia-mall/entry/index','jsx')
            },
        ]  
    },
   
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
export let routersArr:any[]=[]
const flattenRoute=(dataArr:any[])=>{
    dataArr.map(item=>{
        if(item.component){
            routersArr.push(item)
        }
        if(item.children){flattenRoute(item.children)}
    })
}


// 权限处理
export const authFun=(noShowArr:any[])=>{
    function del(arr:any[],noShowData:any[]){
        return arr.filter(item => !noShowData.includes(item.key)).map(item => {
            item = Object.assign({}, item)
            if (item.children) {
              item.children = del(item.children, noShowData)
            }
            return item
          })
        }
    navMeuns=del(navMeuns,noShowArr)
    flattenRoute(navMeuns)

    return {
        navMeuns,
        routersArr
    }

}