'use strict'

var Sendername = 'YIDENEKU ABEBE ABUYE';
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
const openTransferBox = document.querySelector('.transfer-money');
const transferSection = document.querySelector('.transfer-section');
const backToHome = document.querySelector('.transfer-section-back');
const startTransaction = document.querySelector('.transaction-start-box');
const selectTransaction = document.querySelector('.select-section');
const backToTransfer = document.querySelector('.back-to-transfer');
const openInputBox = document.querySelector('.saving-box');
const inputSection = document.querySelector('.send-input-section');
const backToSelect = document.querySelector('.back-to-select');
const paymentDetails = document.querySelector('.payment-details');
const backToInput = document.querySelector('.back-to-input-section');
const takeAccValue = document.querySelector('.continue-acc-btn');

// /////////////////////////////////////////////////////////////////////////////////////////////
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

document.querySelector('.date').textContent = `${currentMonth} ${currentDate}, ${currentYear} ${currentHour}:${currentMinute}:${currentSecond} am`

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

openTransferBox.addEventListener('click',()=>{
    transferSection.classList.remove('hidden');
})


function homeOpener(){
  transferSection.classList.add('hidden');
}

backToHome.addEventListener('click',homeOpener);

startTransaction.addEventListener("click",()=>{
    selectTransaction.classList.remove('hidden');
})
backToTransfer.addEventListener('click',()=>{
    selectTransaction.classList.add('hidden');
})
openInputBox.addEventListener('click',()=>{
    inputSection.classList.remove('hidden');
})
backToSelect.addEventListener('click',()=>{
    inputSection.classList.add('hidden');
})
backToInput.addEventListener('click',
function(){
   paymentDetails.classList.add('hidden'); 
})

takeAccValue.addEventListener('click',
 function(){
    paymentDetails.classList.remove('hidden');

 })


function showLoader() {
    loader.style.display = 'block';
    shaddowBox.classList.remove('hidden');
    loadingTxt.classList.remove('hidden');

    // Hide the loader and show the text after 3 seconds
    setTimeout(function() {

        var recieverName = document.querySelector('.account-number').value.toUpperCase();
        var transactionAmount = document.querySelector('.amount').value;
        var transactionReason = document.querySelector('.reason').value.toLowerCase();
       
        document.querySelector(".left-current-date").textContent = `${currentMonth} ${currentDate},${currentYear}`;
        document.querySelector(".receiver-name").textContent = `${recieverName}`;
        document.querySelector(".day").textContent = `${currentMonth} ${currentDate},${currentYear}`;
        document.querySelector(".left-current-birr").textContent =`${transactionAmount}.00 Br.`;
        document.querySelector('.money-history').textContent = ` ${transactionAmount}.00 Br.`;
       
        
        

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

















