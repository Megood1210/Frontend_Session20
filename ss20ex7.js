let number=+prompt("Nhap so phan tu fibonacci");
let fib1=1;
let fib2=1;
if(number>0&&!isNaN(number)){
    for (let i = 2; i < number; i++) {
        let nextFib = fib1 + fib2;
        if(nextFib===2){
            document.write(`1`);
            document.write(`1`);
        } 
        document.write(`${nextFib}`);
        fib1 = fib2;              
        fib2 = nextFib;
    }
}else{
    document.write("Không hợp lệ")
}