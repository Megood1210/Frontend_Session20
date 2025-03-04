let number = prompt("Nhap mot so");
if(!isNaN(number) && number > 0){
    let reversed ="";
    for (let i= number.length - 1; i >= 0; i--){
        reversed += number[i];
    }
    if(reversed === number){
        document.write("Là số đối xứng");
    }else{
        document.write("Không phải số đối xứng");
    }
}else{
    document.write("Số không hợp lệ");
}