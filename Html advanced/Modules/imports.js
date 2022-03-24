user = {
    name:"edwin",
    age:21,
    show:function(){
        console.log(`Name : ${this.name} and age : ${this.age}`)
    }
}
const welcome = () => console.log("Welcome")
module.exports = {
    user,welcome
}