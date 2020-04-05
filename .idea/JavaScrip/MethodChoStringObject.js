//method chỉ áp dụng cho object, nên khi sử dụng method cho string thì js sẽ xem string như một object
//Các method của string https://www.w3schools.com/jsref/jsref_obj_string.asp
var name = "Hanh, Dao";
var address = "Thanh Hóa"
var tinh = " HaNoi HCM CaMau HaNoi"
name = name.toUpperCase(); //Viết hóa toàn bộ String
console.log(name);

name = name.constructor; // trả về constuctor
console.log(name);

address = address.toLowerCase(); // viết thường toàn bộ
console.log(address);

var tinh1 = tinh.indexOf("HaNoi"); // ví trí xuất hiện ký tứ đầu tiên từ trái qua phải của substring trong string (bắt đầu từ 0).
console.log(tinh1);

var tinh2 = tinh.indexOf("HaNoi", 10); // ví trí xuất hiện ký tứ đầu tiên từ trái qua phải của substring trong string từ vị trí nào đó
console.log(tinh2);

var tinh3 = tinh.lastIndexOf("HaNoi") // ví trí xuất hiện ký tứ đầu tiên từ phải qua trái của substring trong string (bắt đầu từ 0).
console.log(tinh3);

var arrtinh4 = tinh.split(" "); //các chuỗi thành mảng tại vị trí có giá trị nào đó (ở đây là dấu cách).
console.log(arrtinh4);

