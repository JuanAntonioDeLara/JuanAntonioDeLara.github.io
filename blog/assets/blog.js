(function(){
function open(id){var d=document.getElementById(id);if(d&&d.showModal&&!d.open){d.showModal();return true}return false}
document.querySelectorAll('a[href^="#k-"],a[href^="#s-"]').forEach(function(a){a.addEventListener('click',function(e){if(open(a.getAttribute('href').slice(1)))e.preventDefault()})});
document.querySelectorAll('dialog.kd').forEach(function(d){d.addEventListener('click',function(e){if(e.target===d)d.close()});var x=d.querySelector('.kx');if(x)x.addEventListener('click',function(){d.close()})});
if(location.hash.indexOf('#k-')===0||location.hash.indexOf('#s-')===0)open(location.hash.slice(1));
function go(){var e=document.getElementById(location.hash.slice(1));if(e&&e.classList&&e.classList.contains('dep')){e.querySelectorAll('details.kpi').forEach(function(d){if(/KPIs/.test(d.querySelector('summary').textContent))d.open=true})}}
addEventListener('hashchange',go);go();
})();
