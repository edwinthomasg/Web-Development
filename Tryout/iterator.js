let arr = [9,2,3,4,5]
count = 0
 let res = {
    [Symbol.iterator]:()=>{
        return{
            next:()=>{
                done = false
                if(count >= arr.length)
                    done = true
                return{
                    value:arr[count++],
                        done:done
                }
            }
        }
    }
   
}
for(let ans of res){
    console.log(ans)
}
let a = Symbol(arr)
let b = Symbol(arr)
if(a === b)
console.log(true)
else
console.log(false)
console.log(typeof a)
console.log(typeof Symbol())