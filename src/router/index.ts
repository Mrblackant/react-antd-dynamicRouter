export const navMeuns=[
    {
        title:'首页',
        key:'/app/index'
    },
    {
        title:'页面',
        key:'/app/pages',
        children:[
            {
                title:'列表页',
                key:'/app/pages/list',
                children:[{
                    title:'单个筛选条件列表页',
                    key:'/app/pages/list/sigel',
                },{
                    title:'多个筛选条件列表页',
                    key:'/app/pages/list/more',
                }]
            },
            {
                title:'详情页',
                key:'/app/pages/detail'
            }
        ]
    },
    {
        title:'功能拓展',
        key:'/app/extension',
        children:[
            {
                title:'链接参数',
                key:'/app/extension/queryParams'
            },
        ]
    }
]