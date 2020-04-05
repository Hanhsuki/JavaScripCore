// Khi ta muốn biểu diễn 1 thông tin cụ thể và có các kiểu giá trị khác nhau thì ta dùng object.
//Danh sách các object cùng 1 chủ để và cùng kiểu dữ liệu thì ta dùng mảng
var fruit = ["apple", "banana", "lemond", "pieapple"];
var friends = ["Nhung", "Hoa", "Dao"];
// truy cập phần tử của mảng truy cập theo index đánh chỉ số từ 0 từ trái qua phải
var a1 = friends[1];
var a2 = friends.length; //Trả về số phần tử của mảng
Array.isArray(friends); // kiểm tra xem có phải là mảng không
friends instanceof Array; // kiểm tra xem có phải là mảng không
// Các phương thức của array
var a1 = friends.push(element); // thêm 1 phần tử vào cuối
var a2 = friends.unshift(); // Thêm phần tử vào đâu mảng
var a3 = friends.shift(); // xóa phần tử ở đầu mảng
var a4 = friends.pop(); // xóa phần tử ở cuối mảng