function change(){
    document.body.innerHTML = 'new content';
    // write html
    console.log('hello')
}

function new_change(){
    var element = document.querySelector('#content');
    console.log(element);
    element.innerHTML('modigy the html content');
    element.className = 'text';
    
}

// document.getElementById('content').style.color = 'blue';

function change_print(){
    var the_default = document.getElementById('default');
    the_default.style.display = 'none';
    the_default.style.color = 'blue';

    var print_experience = document.querySelector('#print_experience');
    print_experience.style.display = 'block';
}

var result = document.getElementById('default');
result.style.color = 'red';


//單行註解
/* 多行註解*/

// let x;
// declare variable

// const x;
// declare constant variable,fixed

let x = 10;
console.log(x);
// print x

// let input = prompt('please enter a number','the default');
// input()

let money = 5000;
if(money < 100000){
    console.log(money);
}else if(money < 50){
    console.log(money);
}else{
    console.log('too much');
}

while(true){
    console.log('not hello world');
}

for(let n = 0, n < 3,n += 1){
    console.log('not hello world);
    break;
}

var n = 0;
while(n<3){
    if(n==1){
        break;
    }
    console.log(n);
    n +=1;
}

for(var n=0,n<3,n+=1){
    if(n==1){
        continue;
    }
    console.log(n);
}

function name(parameter){
    return parameter;
}
name(parameter)

// build object
// this = self of python
var person = {
    name : ['allen','lisa'];
    age : 32;
    bio : function(){
        console.log(this.name)
    }
}
person.name
// same as python object


//  array []
//  array.push(data)
// same as python list.append(data)
// array[index]
// same as python

// array.length

for(var n=0,n<FileList.length,i+=1){
    console.log(list[n]);
}

// html DOM html document object model
// html - html DOM - web page

// window object 是html DOM 的入口

// 跳轉網頁

window.location.href = "https://www.googlr.com/";

// get tag object by id
var divelement = document.querySelector('#idname');

divelement.className = 'welcome'
divelement.style.font


<button onclick = 'change()'>
