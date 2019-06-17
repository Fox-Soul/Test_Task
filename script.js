// Ex.1 TIME: 5m
let btn_one = document.getElementById('first').addEventListener('click', function(){
    let city = document.getElementById('one_in');
    let out_city = document.getElementById('one_out');
    console.log(city.value);
    
    let str = city.value;
    let arr1 = str.split(' ');
    console.log(arr1);
    for(let i=1; i < arr1.length; i++){
        arr1[i] = ' ' + arr1[i];
    }
    out_city.value = arr1 + '.';
});

//Ex.2 TIME: 3m
let btn_two = document.getElementById('second').addEventListener('click', function(){
    let float = document.getElementById('two_in');
    let int = document.getElementById('two_out');
    
    int.value = Math.round(float.value/5) * 5;
});

//Ex.3 TIME: 10m
let btn_three = document.getElementById('third').addEventListener('click', function(){
    let num = document.getElementById('three_in');
    let comps = document.getElementById('three_out');

    let ntr = num.value;
    let arr2 = ntr.split('');
    let last = arr2.length -1;
    console.log(arr2);

    if(num.value == 11 || num.value == 12 || num.value == 13 || num.value == 14){
        comps.value = num.value + ' компьютеров';
    }
    else if(arr2[last] == 1){
        comps.value = num.value + ' компьютер';
    }
    else if(arr2[last] == 2 || arr2[last] == 3 || arr2[last] == 4){
        comps.value = num.value + ' компьютера';
    }
    
    else{
        comps.value = num.value + ' компьютеров';
    }
});

//Ex.4 TIME: 5m
let btn_four = document.getElementById('four').addEventListener('click', function(){
    let num = document.getElementById('four_in');
    let simple = document.getElementById('four_out');

    if(num.value/1 & num.value/num.value){
        simple.value = 'Simple';
    }
    else{
        simple.value = 'NotSimple';
    }

});
