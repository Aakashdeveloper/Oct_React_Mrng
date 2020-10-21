//es5 (ecma script)
function add(a,b){
    return a+b
}

add(1,2)
3

//es6 
const add =(a,b) => {return a+b}
add(1,2)



/////
function add(a,b){
    var out = [a,b]
    return out
}

add(2,4)
4

//map help to iterate over the data
var a = [3,6,8,4]
a.map((data) => {return data*2})
[6, 12, 16, 8]

//filter help to take out the value 
//it only return those for which condition is true
var a = [3,6,8,4,4,7,9]
a.filter((data) => {return data>5})
(4) [6, 8, 7, 9]

var city = ['Delhi','Mumbai','Pune','Chandigarh']
city.indexOf('Delhi')

var city = ['Delhi','Mumbai','Pune','Chandigarh']
city.indexOf('Delhi')
0
city.indexOf('Pune')
2
city.indexOf('Amsterdam')
-1
city.indexOf('London')
-1

//ternory operator

var a = 10

a>10?"Hi":"Bie"
"Bie"

a==10?"Hi":"Bie"
"Hi"

function add(a,b){
    return a+b
}


add(1,2)


var a = [1,2]
a.map((test) => {test*2})


var a = 10
var b = "my age is "+a
"my age is 10"

var b = `my age is ${a}`
"my age is 10"