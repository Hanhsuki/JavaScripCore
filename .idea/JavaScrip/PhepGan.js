var a = 99;
{
  var  b = a + 100; // hai phép gán này cho giá trị như nhau
    b += 100;
}
{
    var  b = a++ // Thực hiện gán trước cộng sau
    b = ++a; // Thực hiện cộng trước gán sau
}
