function nhapso()
let a=parseFloat(document.getElementById('so1').value);
let b=parseFloat(document.getElementById('so2').value);
let c;
}
function cong(){
    nhapso();
    c ="Kết quả: " +(a+b);
    document.getElementById('kq').innerHTML=c
}
function tru() {
    nhapso();
    c = "Kết quả: " + (a - b);
    document.getElementById('kq').innerHTML = c
}
function nhan(){
    nhapso();
    c ="Kết quả: " +(a*b);
    document.getElementById('kq').innerHTML=c
}
function chia(){
    nhapso();
    c ="Kết quả: " +(a/b);
    document.getElementById('kq').innerHTML=c
}