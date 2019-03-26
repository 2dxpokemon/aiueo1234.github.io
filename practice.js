'use strict';

window.onload = function(){

  // 変数定義
var countStt = document.getElementById('stt');
var countBtn = document.getElementById('count_btn');
var subBtn1 = document.getElementById('100count');
var subBtn2 = document.getElementById('1000count');
var subBtn3 = document.getElementById('10000count');
var countValue = 0;

// カウンター
countBtn.onclick = function (){
  countValue += 25;
  countStt.innerHTML = (countValue + '円');
    }

subBtn1.onclick = function (){
  countValue += 100;
  countStt.innerHTML = (countValue + '円');
    }

subBtn2.onclick = function (){
  countValue += 1000;
  countStt.innerHTML = (countValue + '円');
    }

subBtn3.onclick = function (){
  countValue += 10000;
  countStt.innerHTML = (countValue + '円');
    }

           };
