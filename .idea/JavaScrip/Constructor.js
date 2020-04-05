// Hàm khởi tạo, tạo ra các đối tượng mới thông qua từ khóa new
 var  a = 500;
var x = new String (a); // tạo constructor cho thuộc tính, constructor luôn bắt đầu bằng chữ cái viết hoa.
// var Person = { // fix cứng giá trị chỉ có thể dùng được 1 lần nên ta tao constructor
//     firtname: "Nguyễn",
//     name: "Hạnh",
//     age: 26,
//     address: "Thanh Hóa",
//     fullName: function () {
//         return this.firtname + " " + this.name;
//     }
// }
function Person (firtname, name, age){ // không thể thêm thuộc tính hay function cho constructor ở bên ngoài bằng cách gọi constructor, chỉ có thê thêm trực tiếp vào constructor
    this.firtname = firtname; // Gán giá trị. this trong constructor thuộc về đối tượng new được tạo, constructor này có thẻ dùng cho các object khác
    this.name = name;
    this.age = age;
    this.fullName = function () {
        return this.firtname + " " + this.name;
    }
}
var p1 = new Person("Nguyễn", "Hoàng", 25);
console.log(p1)
p1.companyName = "OWS"; // Thêm thuộc tính cho object
p1.eat = function () { // thêm method cho object
    return "chẹp chẹp";

}
