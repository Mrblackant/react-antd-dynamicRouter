import { cond } from "lodash"
import { IndentStyle } from "typescript"

export const name='slk'
console.log(111)


interface Obj{
    data:any
}

interface ObjExtend extends Obj{
    gender?:string
}


let obj:ObjExtend={
    data:{
        list:[1,34,1],
    }
}
let res=obj?.data?.eee ?? 1212
// let res=obj&&obj.data&&obj.data.list

console.log(res)

console.group({key:'分割------'})

interface Adm{
    list:any[]
}
 
let newStr:Adm={
    list:[false,'ds']
}

console.group({key:'分割------'})


function isString(x: any): x is string {
    return typeof x === "string";
  }
  
  let createUserIdSecond:(id:number,name?:string)=>string

  function createUserId(id:number,name?:string):string{
      return name||''
  }
  createUserIdSecond=createUserId
  console.log(createUserIdSecond)
  console.log(createUserId)

console.log('  ')
console.log('-------------------------------------')

function nsType(name:string='d'):number{
    return 1

}

let person={
    namePer: "Semlinker",
  gender: "Male",
  address: "Xiamen"
}
let {namePer,...restPer}=person
console.log(namePer,restPer)

console.log('-------------------------------------')
console.log('可选 | 只读属性')

let onlyR:number[]=[1,3,4]
let ro:ReadonlyArray<number>=[6,7]

console.log('-------------------------------------')
console.log('类的属性与方法')

class Animal{
    static cname: string = "Greeter";
    public somePublicThing:string="我是私有的";
    private someSelfThing:string="我是私有的";
    greeting: string;
    constructor(msg:string){
        this.greeting=msg
    }
    sonName:string='子集的name'
    
}
console.log(Animal.cname)
let newAnimal=new Animal('小兔兔')
console.log(newAnimal.somePublicThing)

console.log('-------------------------------------')
console.log('泛型接口')




console.log('-------------------------------------')
console.log('demo')
const arrsd:any[]=[
    {
        name:'北京1',
        id:'111'
    },
    {
        name:'北京2-2',
        id:'22222'
    },
    {
        name:'北京3-3',
        id:'333333333'
    },
    {
        name:'北京4-4',
        id:'444444'
    }
]
// arrsd.reduce((prev, cur, index, arr) => {
//     console.log(arr[index])
//     console.log(cur)
//   },arrsd[0])
arrsd.forEach((i,index,arr)=>{
    i.fromOrigin='init'
    i.mergerName = i.name
    if(!index){
    }else{
    i.pId=arr[index-1].id
    i.mergerName = arr[index-1].mergerName + ',' + i.mergerName
    }
    
})
console.log(arrsd)