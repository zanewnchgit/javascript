function test() {
    var a = 3;
    var b = 8;
    console.log(a + b)
}
test();
console.log('hello' + 'world');

var name = 'zane';
console.log(`the length of zane is ${name.length}`);

// 字串切片
name.slice(0,1);

function logic() {
    let x = 3;
    let y = 8;

    let z = x;
    x = y;
    y = z;
    console.log(x + ' and ' + y)
}
logic();
// 宣告變數， let 會reassign ， const keep the same

// let f = prompt('this is input');

let n = Math.random();
n = Math.floor(n);
console.log(Math.floor(n));


if (10 == 10 & 5 == 5) {
    console.log(10);
}
if (10 == 10 | 5 != 5 ) {
    console.log(5)
}
// === 會順便檢查數據類型 == 不會，只會看值是否相等
// | is or

// logic 1
let xx = [];
xx.push(1); // push 就是資料結構的push
xx.pop();
console.log(xx); 

// logic 2
let x = [];
let count = 1;
function add(){
    x.push(count);
    count+=1;
    if (count % 3 == 0){
        x.push('Fizz');
    }else if (count % 5 == 0){
        x.push('Bizz');
    }
}

// logic 3
let namee = ['a','b','c'];
function select(name){
    let n = name.length;
    z = Math.random(n);
    console.log(name[z]);
}
select(namee);

console.log(namee[1]);

