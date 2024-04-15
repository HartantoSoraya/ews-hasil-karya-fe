import{d as X,Q as I,r as m,R as Y,w as S,o as Z,f as $,i as o,c as l,U as E,I as K,W as ee,l as a,j as ae}from"./index-19627c6f.js";import{u as M}from"./ews-device-004ac032.js";import{u as P}from"./region-66ba9fe3.js";import{V as r,a as le,d as Q,f as T}from"./VTextField-3c136c46.js";import{V as te}from"./VForm-9c2cc0e3.js";import{a as D,V as h}from"./VTextarea-78ec0b37.js";import"./VGrid-811bdf3a.js";import"./VSelect-8d815467.js";import"./VMenu-c409457e.js";import"./VOverlay-f5a0fce8.js";const se=ae("h2",{class:"mb-0"}," Ubah EWS Device ",-1),Ve={__name:"edit-ews-device",setup(oe){const q=X(),{loading:z,error:t}=I(M()),{fetchEwsDevice:G,updateEwsDevice:H}=M(),{provinces:U,regencies:x,districts:N,subdistricts:R}=I(P()),{fetchProvinces:J,fetchRegencies:k,fetchDistricts:B,fetchSubdistricts:C}=P();J();const W=q.params.id,f=m(""),V=m(""),g=m(""),c=m(""),v=m(""),p=m(""),b=m(""),y=m(""),w=m(""),j=async()=>{var d,s,e,_;try{const i=await G(W);f.value=i.code,V.value=i.name,g.value=i.type,c.value=(d=U.value.find(u=>u.name===i.province))==null?void 0:d.id,await k(c.value),v.value=(s=x.value.find(u=>u.name===i.regency))==null?void 0:s.id,await B(v.value),p.value=(e=N.value.find(u=>u.name===i.district))==null?void 0:e.id,await C(p.value),b.value=(_=R.value.find(u=>u.name===i.subdistrict))==null?void 0:_.id,y.value=i.address,w.value=i.description}catch(i){console.error(i)}};Y(()=>{j(),document.title="Ubah EWS Device"});const L=()=>{var i,u,A,F;const d=(i=U.value.find(n=>n.id===c.value))==null?void 0:i.name,s=(u=x.value.find(n=>n.id===v.value))==null?void 0:u.name,e=(A=N.value.find(n=>n.id===p.value))==null?void 0:A.name,_=(F=R.value.find(n=>n.id===b.value))==null?void 0:F.name;H({id:W,code:f.value,name:V.value,type:g.value,province:d,regency:s,district:e,subdistrict:_,address:y.value,description:w.value})};S(c,d=>{k(d)}),S(v,d=>{B(d)}),S(p,d=>{C(d)});const O=()=>{j()};return(d,s)=>(Z(),$(Q,null,{default:o(()=>[l(r,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:o(()=>[se,l(E,{to:{name:"app-ews-device"},color:"primary"},{default:o(()=>[K(" Kembali ")]),_:1})]),_:1}),l(r,{cols:"12"},{default:o(()=>[l(le,null,{default:o(()=>[l(te,{onSubmit:ee(L,["prevent"])},{default:o(()=>[l(Q,null,{default:o(()=>[l(r,{cols:"12",md:"6"},{default:o(()=>[l(T,{modelValue:f.value,"onUpdate:modelValue":s[0]||(s[0]=e=>f.value=e),label:"Kode",readonly:""},null,8,["modelValue"])]),_:1}),l(r,{cols:"12",md:"6"},{default:o(()=>[l(T,{modelValue:V.value,"onUpdate:modelValue":s[1]||(s[1]=e=>V.value=e),label:"Nama","error-messages":a(t)&&a(t).name?[a(t).name]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"12"},{default:o(()=>[l(T,{modelValue:g.value,"onUpdate:modelValue":s[2]||(s[2]=e=>g.value=e),label:"Tipe","error-messages":a(t)&&a(t).type?[a(t).type]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6"},{default:o(()=>[l(D,{modelValue:c.value,"onUpdate:modelValue":s[3]||(s[3]=e=>c.value=e),label:"Provinsi",items:a(U),"error-messages":a(t)&&a(t).province?[a(t).province]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:o(()=>[l(D,{modelValue:v.value,"onUpdate:modelValue":s[4]||(s[4]=e=>v.value=e),label:"Kabupaten/Kota",items:a(x),"error-messages":a(t)&&a(t).regency?[a(t).regency]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:o(()=>[l(D,{modelValue:p.value,"onUpdate:modelValue":s[5]||(s[5]=e=>p.value=e),label:"Kecamatan",items:a(N),"error-messages":a(t)&&a(t).district?[a(t).district]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12",md:"6"},{default:o(()=>[l(D,{modelValue:b.value,"onUpdate:modelValue":s[6]||(s[6]=e=>b.value=e),label:"Kelurahan/Desa",items:a(R),"error-messages":a(t)&&a(t).subdistrict?[a(t).subdistrict]:[],"item-title":e=>e.name,"item-value":e=>e.id},null,8,["modelValue","items","error-messages","item-title","item-value"])]),_:1}),l(r,{cols:"12"},{default:o(()=>[l(h,{modelValue:y.value,"onUpdate:modelValue":s[7]||(s[7]=e=>y.value=e),label:"Alamat","error-messages":a(t)&&a(t).address?[a(t).address]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12"},{default:o(()=>[l(h,{modelValue:w.value,"onUpdate:modelValue":s[8]||(s[8]=e=>w.value=e),label:"Deskripsi","error-messages":a(t)&&a(t).description?[a(t).description]:[]},null,8,["modelValue","error-messages"])]),_:1}),l(r,{cols:"12",md:"6",class:"d-flex gap-4"},{default:o(()=>[l(E,{type:"submit",loading:a(z),color:"primary"},{default:o(()=>[K(" Simpan ")]),_:1},8,["loading"]),l(E,{color:"secondary",variant:"tonal",onClick:O},{default:o(()=>[K(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{Ve as default};
