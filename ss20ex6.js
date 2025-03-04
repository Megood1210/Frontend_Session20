let a = prompt("Nhap mot so");
if(!isNaN(a) && a>0){
    let count = 0;
    for (let i = 1; i <= a;i++){
        if(a % i === 0){
            count++;
        }
    }
    if(count >= 1 && count <= 2){
        document.write("Là số nguyên tố");
    }else{
        document.write("Không là số nguyên tố");
    }
}else{
    document.write("Không hợp lệ");
}