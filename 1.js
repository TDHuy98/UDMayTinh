function cong(){
let a=parseFloat(document.getElementById('so1').value);
let b=parseFloat(document.getElementById('so2').value);
let c;
c ="Kết quả: " +(a+b);
document.getElementById('kq').innerHTML=c
}
function tru() {
    let a = parseFloat(document.getElementById('so1').value);
    let b = parseFloat(document.getElementById('so2').value);
    let c;
    c = "Kết quả: " + (a - b);
    document.getElementById('kq').innerHTML = c
}
function nhan(){
    let a=parseFloat(document.getElementById('so1').value);
    let b=parseFloat(document.getElementById('so2').value);
    let c;
    c ="Kết quả: " +(a*b);
    document.getElementById('kq').innerHTML=c
}
function chia(){
    let a=parseFloat(document.getElementById('so1').value);
    let b=parseFloat(document.getElementById('so2').value);
    let c;
    c ="Kết quả: " +(a/b);
    document.getElementById('kq').innerHTML=c
}