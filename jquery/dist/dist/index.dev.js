"use strict";

var elem = document.querySelector('#block');
elem.innerHTML = 'newwww test'; // js寫法

document.getElementById('block').innerHTML = 'hi'; // let elem = document.getElementById('block');
// elem.innerHTML='hi';
// jquery 寫法
// 要使用jquery 要先在head 貼上cdnjs jquery url

$('#block').html('new hi');
$('#block').css('font-size', '35px');