let user = {
    name:'edwin',
    age:21,
    show:()=>console.log(this.name,this.age)
}
count = 0
let res = {
    [Symbol.iterator]:function* (){
        while(true)
        {
            let val = Object.values(user)
            if(count >= val.length ) return
            yield val
            count++
        }

        }
    }

for(const ob of res)
console.log(ob)
