// object bao gồm 2 thành phần là thuộc tính và phương thức.
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
// Cách truy cập object: tenobject.tenthuoctinh/tenobject.tenfunction
    fullname: function () {
        return this.firtname + " " + this.name; // truy cập đến chính thành phần của this trong object hiện thời.
    },
}
person.name = "Dao";
person.gotocompany();


