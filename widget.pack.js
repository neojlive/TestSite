var IPayForm=(function(){var a=IPaySetBill();var b=IPayGetFields();if(a&&b){return true}return false});var IPayGetFields=(function(){var a={};var rr=0;var rrr=0;var ers=0;for(i=0;i<document.charger.elements.length;i++){var e=document.charger.elements[i];var n=e.name;var v=e.value;var t=e.type;var r=e.required;var o=e.options||false;var c=e.checked||false;var s=false;var mn=e.min||false;var mx=e.max||false;var mnl=e.getAttribute('minlength')||false;var mxl=e.getAttribute('maxlength')||false;e.classList.remove('error');if(o){s=e.selectedIndex||0}if(r){rrr+=1}if(t=='text'||(t=='checkbox'&&c)||(t=='radio'&&c)||o){if(o){v=o[s].value}if(r&&v){rr+=1}if((r&&!v)||(mnl&&mnl>v.length)||(mxl&&mxl<v.length)||(mn&&mn>parseFloat(v))||(mx&&mx<parseFloat(v))){e.classList.add('error');ers+=1}a[n]=v}else if(t=='hidden'){if(r&&v){rr+=1}}}if(rr==rrr&&ers==0){return true}return false});var IPaySetBill=(function(){var account=document.charger.account.value||false;if(account){account=account.replace(/\+38/g,'').replace(/[^\d]/g,'');var code=account.substr(0,3)||false;var a=document.charger.bill||false;var bb=false;a.value='';if(code&&a){bb=['067','096','097','098','039'].filter(function(item){return item==code}).length?541:false;bb=['093','063'].filter(function(item){return item==code}).length?2:(bb?bb:false);bb=['068'].filter(function(item){return item==code}).length?3:(bb?bb:false);bb=['050','066','095','099'].filter(function(item){return item==code}).length?664:(bb?bb:false);bb=['091'].filter(function(item){return item==code}).length?82:(bb?bb:false)}if(bb){a.value=bb;document.charger.account.value=account;return true}}return false});