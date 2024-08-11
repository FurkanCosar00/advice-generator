let advice = {};

// FETCH'TEN ALINAN BİLGİLERİ SAYFAYA YAZDIRIR.
function renderAdvice() {
  adviceNumber.innerHTML = `<h3> ADVİCE #${advice.slip.id}</h3>`;
  adviceText.innerHTML = `<h1>"${advice.slip.advice}"</h1>`;
}

// HTML'DEKİ BUTONLARI YAKALAR.
let BtnRefresh = document.querySelector('#RefreshButton');
BtnRefresh.addEventListener("click", refresh);

// BUTONA TIKLANDIGINDA SAYFA YENİLENİR.
function refresh() {
  window.location.reload();
}

// FETCH'LERİ ÇEKER VE SAYFAYA YAZDIRMA FUNCTİON'INI ÇALIŞTIRIR.
function init() {
  fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then (res => {
      advice = res;
      renderAdvice();
  }); 
}

// TUM KODU CALISTIRIR.
init();
