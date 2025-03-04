let str = prompt("Nhap mot chuoi");
let word = prompt("Nhap tu can tim");
let found = false;
for (let i = 0; i <= str.length - word.length; i++) {
    if (str.substring(i, i + word.length) === word) {
        found = true;
        break;
    }
}
if (found) {
    document.write(`Tồn tại từ cần tìm kiếm`);
} else {
   document.write(`Không tồn tại từ cần tìm kiếm`);
}