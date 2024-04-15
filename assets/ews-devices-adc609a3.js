import{u as w}from"./ews-device-004ac032.js";import{c as u}from"./permissionHelper-bea28319.js";import{Q as E,r as T,R as S,Z as K,e as W,a2 as A,o,J as B,L as N,l as a,f as n,i as e,c as t,I as r,t as U,U as d,s as x,O as m,K as R,j as z}from"./index-19627c6f.js";import{a as D,c as j,e as F,V as p,f as H,d as I}from"./VTextField-3c136c46.js";import{V as J}from"./VDialog-4dc2a923.js";import"./VGrid-811bdf3a.js";import"./VOverlay-f5a0fce8.js";const L=z("h2",{class:"mb-0"}," EWS Device ",-1),X={__name:"ews-devices",setup(M){const V=[{text:"Kode",align:"start",sortable:!1,value:"code"},{text:"Nama",value:"name"},{text:"Tipe",value:"type"},{text:"Provinsi",value:"province"},{text:"Kabupaten/Kota",value:"regency"},{text:"Kecamatan",value:"district"},{text:"Kelurahan/Desa",value:"subdistrict"},{text:"Alamat",value:"address"},{text:"Deskripsi",value:"description"},{text:"Aksi",value:"operation",width:300}],{ewsDevices:y,loading:v,error:h,success:i}=E(w()),{fetchEwsDevices:f,deleteEwsDevice:g}=w();f();async function k(_){confirm("Apakah Anda yakin ingin menghapus EWS Device ini?")&&(await g(_.id),f())}const c=T("");return S(()=>{document.title="EWS Device"}),K(()=>{h.value=null}),(_,l)=>{const b=W("EasyDataTable"),C=A("id");return o(),B(R,null,[N((o(),n(J,{modelValue:a(i),"onUpdate:modelValue":l[1]||(l[1]=s=>x(i)?i.value=s:null),"max-width":"400"},{default:e(()=>[t(D,null,{default:e(()=>[t(j,null,{default:e(()=>[r(U(a(i)),1)]),_:1}),t(F,null,{default:e(()=>[t(d,{color:"primary",text:"",onClick:l[0]||(l[0]=s=>i.value=!1)},{default:e(()=>[r(" Tutup ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])),[[C,a(i)]]),t(I,null,{default:e(()=>[t(p,{cols:"12",class:"d-flex justify-space-between align-items-center"},{default:e(()=>[L,a(u)("ews-device-create")?(o(),n(d,{key:0,to:"/app/ews-device/create",color:"primary"},{default:e(()=>[r(" Tambah EWS Device ")]),_:1})):m("",!0)]),_:1}),t(p,{cols:"12"},{default:e(()=>[t(H,{modelValue:a(c),"onUpdate:modelValue":l[2]||(l[2]=s=>x(c)?c.value=s:null),label:"Cari EWS Device",placeholder:"Cari EWS Device",clearable:"",loading:a(v),variant:"solo"},null,8,["modelValue","loading"])]),_:1}),t(p,{cols:"12"},{default:e(()=>[t(D,null,{default:e(()=>[t(b,{headers:V,items:a(y),loading:a(v),"search-value":a(c),"buttons-pagination":"","search-keys":["code","name","type","province","regency","district","subdistrict","address"],"show-index":"",class:"data-table"},{"item-operation":e(s=>[a(u)("ews-device-edit")?(o(),n(d,{key:0,to:{name:"app-ews-device-edit",params:{id:s.id}},color:"primary",size:"small",class:"m-5"},{default:e(()=>[r(" Ubah ")]),_:2},1032,["to"])):m("",!0),a(u)("ews-device-list")?(o(),n(d,{key:1,to:{name:"app-ews-device-view",params:{id:s.id}},color:"info",size:"small"},{default:e(()=>[r(" Detail ")]),_:2},1032,["to"])):m("",!0),a(u)("ews-device-delete")?(o(),n(d,{key:2,color:"error",size:"small",class:"m-5",onClick:()=>k(s)},{default:e(()=>[r(" Hapus ")]),_:2},1032,["onClick"])):m("",!0)]),_:1},8,["items","loading","search-value"])]),_:1})]),_:1})]),_:1})],64)}}};export{X as default};
