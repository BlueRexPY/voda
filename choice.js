var sum = 15
function plus(index_num){
    let total = document.querySelector(`#${index_num}`);
    let total_num = parseInt(total.value) +1
    total.value = total_num;
    what_resualt()
}
function minus(index_num){
    let total = document.querySelector(`#${index_num}`);
    let total_num = parseInt(total.value) -1
    if (total_num <= 0){
        total_num =0
    }
    total.value = total_num;
    what_resualt()
}
function what_resualt(){
    const result = document.querySelector(".buy_list");
    let input1 = document.querySelector(`#num_input1`)
    let input2 = document.querySelector(`#num_input2`)
    let input3 = document.querySelector(`#num_input3`)

    const inputs = [input1,input2,input3]
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ''){
            inputs[i].value = 0
        }
        
    }
    sum = (parseInt(input1.value) + parseInt(input2.value) +parseInt(input3.value)) *5
    if (sum <= 0 ){
        sum = 0
    }
    let out = sum
    result.innerHTML = `Order ${out}$`;
}