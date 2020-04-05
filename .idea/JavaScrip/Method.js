// gồm các câu lệnh. mô tả các hành động, một function nếu thuộc 1 object cụ thể sẽ trở thành method
var person = {
    firtname: "Nguyễn",
    name: "Hanh",
    age: 26,
    address: "Thanh Hóa",
    smile: function () {
        return "ahihi";
    },
    gotocompany: function () {
        return "by motobike"
    },
    fullname: function () {
        return this.firtname + " " + this.name;
    },
}
console.log(person.fullname());
person.laugh = function () { // Thêm method
    return "ahihi";
}

