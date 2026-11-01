(function(){
var N='919324694699',$=function(s){return document.querySelector(s)};
function wa(t){return 'https://wa.me/'+N+'?text='+encodeURIComponent(t)}
function setupWa(){document.querySelectorAll('a.wa').forEach(function(a){
 var m=a.dataset.model;
 a.href=wa(m?'Hello Shree Shyam Hiring Service, I would like to enquire about the '+m+' for a long-term infrastructure project. Please confirm availability and share the hiring quotation.':'Hello Shree Shyam Hiring Service, I am interested in long-term boom lift hiring for an infrastructure project. Please share equipment availability and the hiring quotation.');
 a.target='_blank';a.rel='noopener';});}

$('#yr').textContent=new Date().getFullYear();
var b=$('.menu-btn'),nav=$('#nav');
b.addEventListener('click',function(){var o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');b.setAttribute('aria-expanded',false)}});
var f=$('#f'),st=$('#status');
f.addEventListener('submit',function(e){
 e.preventDefault();var bad=null;
 f.querySelectorAll('.err').forEach(function(x){x.remove()});
 f.querySelectorAll('[aria-invalid]').forEach(function(x){x.removeAttribute('aria-invalid')});
 function fail(el,msg){var s=document.createElement('span');s.className='err';s.id=el.id+'-e';s.textContent=msg;el.setAttribute('aria-invalid','true');el.setAttribute('aria-describedby',s.id);el.closest('.fr').appendChild(s);bad=bad||el}
 f.querySelectorAll('[required]').forEach(function(el){
  if(el.type==='checkbox'){if(!el.checked)fail(el,'Please accept to continue.')}
  else if(!el.value.trim())fail(el,'This field is required.')});
 var p=$('#phone');if(p.value.trim()&&p.value.replace(/\D/g,'').length<10)fail(p,'Enter a valid phone number (at least 10 digits).');
 var em=$('#email');if(em.value.trim()&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value))fail(em,'Enter a valid email address.');
 if(bad){bad.focus();st.textContent='Please correct the highlighted fields.';return}
 var v=function(id){return $('#'+id).value.trim()||'-'};
 var t='Hello SSHS, I would like to send a project enquiry.\nName: '+v('name')+'\nCompany: '+v('company')+'\nPhone: '+v('phone')+'\nEmail: '+v('email')+'\nProject location: '+v('loc')+'\nEquipment: '+v('equip')+'\nProject type: '+v('ptype')+'\nExpected start: '+v('start')+'\nDuration: '+v('dur')+'\nRequirements: '+v('msg')+'\nPlease confirm availability and share the hiring quotation.';
 st.textContent='WhatsApp opened with your details. Review and press Send there; the enquiry is not delivered until you do.';
 window.open(wa(t),'_blank','noopener');
});

function apply(c){
 ['heroHeadline','heroLead','person','equip1Name','equip1Desc','equip2Name','equip2Desc'].forEach(function(k){if(c[k])document.querySelectorAll('[data-c="'+k+'"]').forEach(function(e){e.textContent=c[k]})});
 if(c.whatsapp)N=String(c.whatsapp).replace(/\D/g,'');
 if(c.phone)document.querySelectorAll('a[href^="tel:"]').forEach(function(a){a.href='tel:'+c.phone.replace(/[^\d+]/g,'');a.textContent=(/^Call/.test(a.textContent)?'Call ':'')+c.phone});
 if(c.email)document.querySelectorAll('a[href^="mailto:"]').forEach(function(a){a.href='mailto:'+c.email;a.textContent=c.email});
 document.querySelectorAll('.card').forEach(function(card,i){var n=c['equip'+(i+1)+'Name'];if(n){card.querySelector('.wa').dataset.model=n;var o=$('#equip').options[i+1];o.text=o.value=n}});
}
fetch('content.json',{cache:'no-store'}).then(function(r){return r.ok?r.json():{}}).catch(function(){return {}}).then(function(c){
 try{if(/[?&]preview/.test(location.search)){var d=JSON.parse(localStorage.getItem('sshs-draft')||'null');if(d)c=d}}catch(e){}
 apply(c);setupWa();});
})();