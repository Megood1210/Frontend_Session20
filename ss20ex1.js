let sum = +prompt("Nhap mot so");
if(sum > 0){
    let total = 0; 
    for(let i = 1; i <= sum; i++){
        total += i; 
    }
    document.write(total);
}else{
    document.write("dữ liệu nhập vào không hợp lệ");
}

