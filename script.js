'use strict'

var Sendername = 'YIDENEKU ABEBE ABUYE';
var recieverName = prompt('enter receiver name').toUpperCase();
var  transactionAmount = prompt("Enter Amount");
var transactionReason = prompt("Enter Reason").toLowerCase();
const cancelBtn = document.querySelector('.cancel');
const transactionBox = document.querySelector('.transactoin');
const qrBtn = document.querySelector('.qr-btn');
const shaddowBox = document.querySelector('.shaddow')
const loader = document.querySelector('.loader');
const loadingTxt = document.querySelector('.loading-txt');
const showSidebar = document.querySelector('.humburger');
const sidebar = document.querySelector('.sidebar');
const showMoney = document.querySelector('.eye');
const hideMoney = document.querySelector('.eye-hide');
const moneyAmount = document.querySelector('.brr');
const moneyTransaction = document.querySelector('.etb');
const closeTransactionShowBox = document.querySelector('.cancel-transaction');
const transactionShowBox = document.querySelector('.down-history');
const openTransactionShowBox = document.querySelector('.withdrawal-box');
const recentShaddow = document.querySelector('.recent-shaddow');
const lowerFooter = document.querySelector('.footer-class');
const backBtn = document.querySelector('.back');
const showHistoryBtn = document.querySelector('.try');
const historyPage = document.querySelector('.history');

/////////////////////////////////////////////////////////////////////////////////////////////
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

var monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var month = new Date();
var theMonth = month.getMonth();
var currentMonth = monthNames[theMonth];

var year = new Date();
var currentYear = year.getFullYear();

var dateObj = new Date();
var currentDate = dateObj.getDate();

var hourObj = new Date();
var currentHour = hourObj.getHours();

var minuteObj = new Date();
var currentMinute = minuteObj.getMinutes();

var secondObj = new Date();
var currentSecond = secondObj.getSeconds();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector(".left-current-date").textContent = `${currentMonth} ${currentDate},${currentYear}`;
document.querySelector(".left-current-birr").textContent =`${transactionAmount}.00 Br.`;
document.querySelector(".day").textContent = `${currentMonth} ${currentDate},${currentYear}`;
document.querySelector('.money-history').textContent = ` ${transactionAmount}.00 Br.`;
document.querySelector(".receiver-name").textContent = `${recieverName}`;
document.querySelector('.date').textContent = `${currentMonth} ${currentDate}, ${currentYear} ${currentHour}:${currentMinute}:${currentSecond} am`



function showLoader() {
    loader.style.display = 'block';
    shaddowBox.classList.remove('hidden');
    loadingTxt.classList.remove('hidden');

    // Hide the loader and show the text after 3 seconds
    setTimeout(function() {
      loader.style.display = 'none';
      transactionBox.classList.remove('hidden');
      loadingTxt.classList.add('hidden');
      moneyTransaction.textContent = ` ETB ${transactionAmount}.00 debited from ${Sendername} for ${recieverName}-ETB-0938 (${transactionReason} done via Mobile) on 0${currentDate} - ${currentMonth} - ${currentYear} with transactoin ID:FT24024YG901.`;
      
    }, 3500);
  }
  
  cancelBtn.addEventListener('click',
    function(){
        transactionBox.classList.add('hidden');
        shaddowBox.classList.add('hidden');
    });
  
showSidebar.addEventListener('click',
()=>{
  sidebar.classList.remove('hidden');
  shaddowBox.classList.remove('hidden');

});

shaddowBox.addEventListener('click',
()=>{
  sidebar.classList.add('hidden');
  shaddowBox.classList.add('hidden');
})


showMoney.addEventListener('click',()=>{
  moneyAmount.textContent = "640.00 Br.";
  hideMoney.classList.remove('hidden');
  showMoney.classList.add('hidden');

});



hideMoney.addEventListener('click',()=>{
  moneyAmount.textContent = " ***** Br.";
  showMoney.classList.remove('hidden');
  hideMoney.classList.add('hidden');
});




closeTransactionShowBox.addEventListener('click',()=>{
  transactionShowBox.classList.add('hidden');
  recentShaddow.classList.add('hidden');
  qrBtn.style = "z-index:101";

})
openTransactionShowBox.addEventListener('click',()=>{
  transactionShowBox.classList.remove('hidden');
  recentShaddow.classList.remove('hidden');
  qrBtn.style = "z-index:100";
  lowerNav.style = "display:none";
  lowerFooter.classList.add('hidden');
})

backBtn.addEventListener('click',()=>{
  historyPage.classList.add('hidden');

})

showHistoryBtn.addEventListener('click',()=>{
  historyPage.classList.remove('hidden');
})


















