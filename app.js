//確認問題１
var i;
var num = 0;

for(i = 1; i< 11; i++) {
	num = num + i;
}

var num2 = 0;
for(i = 1; i< 11; i++) {
	num2 = num2 - i;
}

var num3 = 1;
for(i = 1; i< 11; i++) {
	num3 = num3 * i;
}

var num4 = 1;
for(i = 1; i< 11; i++) {
	num4 = num4 / i;
}

alert('１から１０まで足し算した結果は' + num + 'です/'
	+ '１から１０まで引き算した結果は' + num2 + 'です/'
	+ '１から１０まで掛け算した結果は' + num3 + 'です/'
	+ '１から１０まで割り算した結果は' + num4 + 'です');


//整数を代入する
//var int1 = 1;
//負数を代入する
//var int2 = -10;
//小数点を代入する
//var float1 = 3.14
//文字列を代入する
//var str1 = 'JavaScriptを覚えよう';


//var max = 100;
//var num = 1;
//var count = 0;

//while(num < max) {
//	num = num*2;
//	count = count+1;
//}

//alert('２を掛け続けて'+ max + 'を越えるのに必要だった回数は' + count + '回です');