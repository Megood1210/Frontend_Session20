let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
if (isNaN(a) || isNaN(b)) {
    document.write("Không hợp lệ");
} else {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    document.write(result);
}