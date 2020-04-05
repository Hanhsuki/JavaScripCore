// Kiểu dữ liệu của js là kiểu động, kiểu dữ liệu phụ thuộc vào giá trị được gán
// các kiểu nguyên thủy(là kiểu không thể chia nhỏ được) trong js: number, string, undefined, boolean
// Các kiểu hay dùng trong js: object, function, array.
{
    var a = 100; // kiểu sổ có 2 loại là số nguyên và số thực
    var b = 10.2;
}
{
    let name = "Nguyễn Thị Hạnh" //kiểu dữ liệu được đặt trong dấu " " là kiểu string
}
{
    Ketqua = true; // kiểu boolean có 2 giá trị là true và false
    Ketqua = false;
}
{
    var a; // khai báo biến chưa gán giá tri sẽ trả về kiểu dữ liệu undefined
}
{
    var person = { // object là tập hợp nhiều kiểu dữ liệu
        name : "Hạnh",
        age : 20
    }
}
{
 var f = function sum(a,b) { // function để viết 1 hàm trong js. có thể gán hàm vào biến
        return a+b;

    }
}
{
    var arrFruit = ["apple", "Banana", "lemond"];
}