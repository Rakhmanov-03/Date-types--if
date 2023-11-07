// 1.Funksiya yasang, ushbu funksiya 2ta argument qabul qilsin
// va ularning yig’indisini qaytarib bersin.
// function a(){
//     let a=+prompt("a ni kiriting")
//     let b=+prompt("b ni kiriting")
//     console.log(a+b);
// }
// a();
// Minutlarni butun son sifatida qabul qilib, uni sekundlarga
// o’girib beradigan funksiya yasang.
// function a(){
//     let a=+prompt("sonni kiriting")
//     console.log(a*60);
// }
// a();
// 3.Funksiya butun son qabul qiladi. Funksiya ushbu butun
// sondan keyingi sonni qaytarsin.
// function a(){
//     let a=+prompt("sonni kiriting")
//     console.log(a+1);
// }
// a();
// 4.Funskiya uchburchakning asosi va balandligini qabul qiladi.
// Funksiya uchburchakning yuzini hisoblab qaytarsin. Uchburchak yuzini topish formulasi: S = (asos * balandlik) / 2
// function a(){
//     let a=+prompt("asosni kiriting")
//     let h=+prompt("balandlikni kiriting")
//     console.log("S = " +a*h);
// }
// a();
// 5.Funksiya yoshni yil ko’rinishida qabul qiladi. ushbu funksiya
// yoshni kunlarda hisoblab natijani qaytarsin. Bir yil 365 kun deb
// oling
// function a(){
//     let yosh=+prompt("yoshni kiriting")
//     console.log(yosh*365);
// }
// a();
// 6.Quyidagi namunalarga muvofiq ravishda funksiyani tana
// qismini yozing.
// kub(3) ᔍ 27
// kub(5) ᔍ 125
// kub(10) ᔍ 1000
// function a(){
//     let son=+prompt("sonni kiriting")
//     console.log(son**3);
// }
// a();
// 8.Funksiya 2ta argument qabul qilsin. Ushbu funksiya birinchi
// qiymatning ikkinchi qiymat bilan ko’paytmasini qaytarsin.
// function a(){
//     let a=+prompt("a sonni kiriting")
// let b=+prompt("b sonni kiriting")
// console.log(a*b);
// }
// a();
// 9.Soat ko’rinishida qiymat kiritilsa, sekundlarda qaytaradigan
// funksiya yasang
// function a(){
//     let a=+prompt("sonni kiriting")
//     console.log(a*3600);
// }
// a();
// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// function a(){
//     let a=+prompt("a ni kiriting")
//     let b=+prompt("b ni kiriting")
//     let c=+prompt("c ni kiriting")
//     if (a>b) {
//         if (a>c){
//         console.log(a);   
//         }else {console.log(c);}
//     }else if (b>c){
//         console.log(b);
//     } 
//     else{
//         console.log(c);
//     }
// }
// a();
// 11.Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni bir inchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang
// function a(){  
//    let a=+prompt("a ni kiriting")
//     let b=+prompt("b ni kiriting")
//     console.log(a%b);
// }
// a();
// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni
// function a(){
//     let a=+prompt("a ni kiriting")
//     let b=+prompt("b ni kiriting")
//     console.log("S= "+a*b);
// }
// a();
// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin
// function a(){
//     let a="Something "+prompt("so'zni kiriting")
// console.log(a);
// }
// a();
// 14.Quyidagi namunalarga qaragan holatda funksiya yasang.
// Namuna:
// kvadrat(5) ᔍ 25
// kvadrat(9) ᔍ 81
// kvadrat(100) ᔍ 10000
// function a(){
//     let a=+prompt("sonni kiriting")
//     console.log(a**2);
// }
// a();
// 15.Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on
// function a(){
//     let a=+prompt("sonni kiriting")
//     if (a<=0){
//         console.log("rost");
//     }else{
//         console.log("yolg'on");
//     }
// }
// a();
// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180
// function a(){
//     let n=+prompt("sonni kiriting")
//     console.log((n-2)*180);
// }
// a();
// 17.Basketbol o’yinida ikki ochkolik va uch ochkolik gollar
// mavjud. Agar funksiya 1-argument sifatida ikki ochkolik gollar
// sonini va 2-argument sifatida uch ochkolik gollar sonini qabul
// qilsa, jamoaning jami ochkosini qaytaradigan funksiya yasang.
// function a(){
//     let a=+prompt("a ni kiriting")
//     let b=+prompt("b ni kiriting")
//     console.log(a*2+b*3);
// }
// a();
// 18.Quyidagi namunalarni kuzatgan holda unga muvofiq
// funksiya yasang.
// Namuna:
// nameString("Mubashir") ᔍ "MubashirEdabit"
// nameString("Matt") ᔍ "MattEdabit"
// nameString("javaScript") ᔍ "javaScriptEdabit"
// function a(){
//     let a=prompt("so'zni kriting")+" Edabit"
//     console.log(a);
// }
// a();
// 19.Ikkita son kiritilsa, agar ularning yig’indisi 100dan kichkina
// bo’lsa rost, katta bo’lsa yolg’on qiymat qaytaradigan funksiya
// yasang.
// function a(){
//     let a=+prompt("a sonni kiriting")
//     let b=+prompt("b sonni kiriting")
//     if (a+b<100){
//         console.log("rost");
//     }else{
//         console.log("yolg'on");
//     }
// }
// a();
// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.
// function a(){
//     let a=+prompt("tovuqlar soni")
//     let b=+prompt("qo'ylar soni")
//     let c=+prompt("sigirlar soni")
//     console.log(a*2+b*4+c*4);
// }
// a();
// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!
// Namuna:
// and(true, false) ᔍ false
// and(true, true) ᔍ true
// and(false, true) ᔍ false
// and(false, false) ᔍ false
// function a(a,b){
// return a&&b;
// }
// console.log(a(true,false));
// console.log(a(true,true));
// console.log(a(false,true));
// console.log(a(false,false));
// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.
// function a(){
//     let a=+prompt("a ni kiriting")
//     let b=+prompt("b ni kiriting")
//     if (a==b){
//         console.log("rost");
//     }else{
//         console.log("yolg'on");
//     }
// }
//   a();
// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.
// function a(){
//     let a=+prompt("yutishlar soni")
//     let b=+prompt("duranglar soni")
//     let c=+prompt("mag'lubiyat soni")
//     console.log(a*3+b*1+c*0);
// }
// a();
// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.
// function a(){
//     let a=+prompt("soatni kiriting")
//     let b=+prompt("minutni kiriting")
//     console.log(a*3600+b*60+" sekund");
// }
// a();
// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true
// function a(){
//     let n=prompt("sonni kiriting")

// }
// a();
// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.
// function a(){
//     let a=+prompt("1-qiymatni kiriting")
// let b=+prompt("2-qiymatni kiriting")
//     console.log(typeof(a)==typeof(b));
// }
// a();
// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin
// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin.
// function a(){
//     let n=prompt("qiymatni kiriting")
// console.log(n);
// }
// a();
// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini arugument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.
// function a(){
//     let a=+prompt("minutni kiriting")
//     let b=+prompt("sekundni kiriting")
//     console.log((a*60)*(b*1));
// }
// a();

