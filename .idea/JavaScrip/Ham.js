// Hàm trong js được khai báo như sau:
// function TenHam(biến truyền vào) { - tên hàm thường là động từ
//     Câu lệnh;
// }
function tinhTong(start, end) {
    var s = 0;
    for (var i = start; i< end; i++){
        s += i;
    }
    return s;
}
console.log(tinhTong(0,10));