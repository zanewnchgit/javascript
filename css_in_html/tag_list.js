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