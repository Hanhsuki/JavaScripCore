//js chỉ có 1 kiểu number (64bit). số nguyên là 15 số và số thực là 17 sổ
// số có giá trị lớn ta có thể dùng số e để thể hiện (e10 là nhân với số có 10 số 00 phía sau).
var number1 = 10;
var number2 = 50.25;
number1 = 0.2 + 0.1; // nhiều lúc sẽ cho kết quả sai (0.30000000004) để cho kết quả đúng là 1 số sau dấu phẩy ta dùng như sau.
number1 =(0.2*10 + 0.1*10)/10; // luôn cho két quả chính sác (nhân để thành số nguyên).
number1 = Infinity //Giá trị vô hạn (thêm dấu - là âm vô cực)
// trong js thực hiện phép chia cho không sẽ ra giá trị vô cực.
// Cộng 1 số với 1 string kết quả sẽ ra 1 string.
// Các phép toán còn lại sẽ ra nuber nếu thực hiện phép toán sai sẽ trả về NaN (not a number)
// Các method cho number
var a1 = number2.toString(); // trả về giá trị là chuỗi string
var a2 = number2.toFixed(2); // làm tròn n chữ số phần thập phân
