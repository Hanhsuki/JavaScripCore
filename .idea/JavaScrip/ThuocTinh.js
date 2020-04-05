// Thuộc tính là những thành phần mô tả chi tiết của đối tượng: bao gồm key và value
/* các cách truy xuất dữ liệu
tenobject.tenthuoctinh;
tenobject['tenthuoctinh'] */
var person = {
    firtname: "Nguyễn",
    name: "Hanh",
    age: 26
}
person.firtname = "Nguyễn";
person['age'] = 26;
person.fullname = person.firtname + person.name; // tạo ra thuộc tính mới
delete person.age; // xóa thuộc tính, xóa đi thì nó sẽ không tồn tại và trả về undifined
