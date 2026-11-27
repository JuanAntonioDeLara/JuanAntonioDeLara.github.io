(function(){
var r=document.getElementById('indicadores');if(!r)return;
function wn(t){return ' '+t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ')+' '}
var items=[].slice.call(r.querySelectorAll('.dxi')),box=r.querySelector('.dxg'),q=r.querySelector('input'),cnt=r.querySelector('.dxc'),emp=r.querySelector('.dxe'),ch=r.querySelector('.dxch'),cur='';
items.forEach(function(it,i){var a=it.querySelector('.dxn'),d=document.getElementById(a.dataset.k);it._i=i;it._n=wn(a.textContent);it._m=wn(it.querySelector('small').textContent+' '+it.querySelector('p').textContent);it._b=wn(d?d.textContent:'');it._p=' '+it.dataset.p+' '});
function render(){var t=wn(q.value).trim().split(' ').filter(Boolean),res=[];
 items.forEach(function(it){var ok=!cur||it._p.indexOf(' '+cur+' ')>-1,sc=0;if(ok)for(var i=0;i<t.length;i++){var w=' '+t[i],s=it._n.indexOf(w)>-1?3:it._m.indexOf(w)>-1?2:it._b.indexOf(w)>-1?1:0;if(!s){ok=false;break}sc+=s}it.hidden=!ok;if(ok)res.push({it:it,sc:sc})});
 res.sort(function(a,b){return b.sc-a.sc||a.it._i-b.it._i});res.forEach(function(x){box.appendChild(x.it)});emp.hidden=res.length>0;cnt.textContent=res.length+(res.length===1?' indicador':' indicadores')}
ch.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;cur=b.dataset.a;ch.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});render()});
q.addEventListener('input',render);render();
})();
