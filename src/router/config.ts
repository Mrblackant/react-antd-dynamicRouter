
import Loadable from './loadable'


export const navMeuns=[
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




export const tArr:any[]=[]

const flatten=(dataArr:any[])=>{
    dataArr.map(item=>{
        if(item.component){
            tArr.push(item)
        }
        if(item.children){flatten(item.children)}
    })
}

flatten(navMeuns)