import{F as b,a as v,E as k}from"./vee-validate.esm.75a23db2.js";import{f as y}from"./fdb.58f18549.js";import{c as w,a as n,d as g}from"./object.63d6def7.js";import{_ as E,r as d,o as m,c as _,b as s,w as F,d as e,t as f,e as u,n as x,p as D,f as P}from"./index.1496f8ab.js";const S={name:"Register",props:{firebaseError:String},components:{Form:b,Field:v,ErrorMessage:k},data(){const t=w().shape({email:n().required("Dit veld is verplicht").email("Email is ongeldig").max(50,"Karakter limiet bereikt"),naam:n().required("Dit veld is verplicht").max(50,"Karakter limiet bereikt"),geslacht:n().required("Dit veld is verplicht").max(50,"Karakter limiet bereikt"),gewicht:g().required("Dit veld is verplicht").typeError("Dit veld is verplicht"),date:n().required("Dit veld is verplicht").max(50,"Karakter limiet bereikt"),lengte:g().required("Dit veld is verplicht").lessThan(2.5,"Voer een valide lengte in").moreThan(0,"Voer een valide lengte in").typeError("Dit veld is verplicht")});return{successful:!1,loading:!1,message:"",schema:t}},mounted(){},methods:{goBackToPatients(){this.$emit("close")},createPatientWithFireStore(t){let i=t.date.split("-")[2]+"-"+t.date.split("-")[1]+"-"+t.date.split("-")[0],l=this.$store.getters.getUser.uid;y(t.naam,t.gewicht,i,t.lengte,t.email,t.geslacht,l),this.goBackToPatients()}}},o=t=>(D("data-v-068ac032"),t=t(),P(),t),B={class:"form"},T=o(()=>e("h3",null,[e("b",null,"Pati\xEBnt Toevoegen")],-1)),q={class:"form-group"},C=o(()=>e("label",{for:"email",style:{"font-weight":"bold"}},"Email",-1)),V={class:"form-group"},I=o(()=>e("label",{for:"naam",style:{"font-weight":"bold"}},"Naam",-1)),K={class:"form-group"},N=o(()=>e("label",{for:"gewicht",style:{"font-weight":"bold"}}," Gewicht (kg)",-1)),G={class:"form-group"},M=o(()=>e("label",{for:"lengte",style:{"font-weight":"bold"}}," Lengte (m)",-1)),W={class:"form-group"},z=o(()=>e("label",{for:"geslacht",style:{"font-weight":"bold"}}," Geslacht",-1)),L={class:"form-group"},R=o(()=>e("label",{for:"date",style:{"font-weight":"bold"}}," Geboorte datum",-1)),U=o(()=>e("div",{id:"submit_btn_cover"},[e("button",{class:"registerButton",style:{"font-weight":"bold"}},[e("b",null,"Voeg patient toe")])],-1)),$=o(()=>e("b",null,"Terug",-1)),j=[$],A={key:0,id:"errorText"};function H(t,i,l,J,c,h){const r=d("Field"),a=d("ErrorMessage"),p=d("Form");return m(),_("form",B,[T,s(p,{onSubmit:h.createPatientWithFireStore,"validation-schema":c.schema},{default:F(()=>[e("div",q,[C,s(r,{name:"email",type:"email",class:"form-control"}),s(a,{name:"email",class:"error-feedback"})]),e("div",V,[I,s(r,{name:"naam",type:"name",class:"form-control"}),s(a,{name:"naam",class:"error-feedback"})]),e("div",K,[N,s(r,{name:"gewicht",type:"number",class:"form-control"}),s(a,{name:"gewicht",class:"error-feedback"})]),e("div",G,[M,s(r,{name:"lengte",type:"number",class:"form-control"}),s(a,{name:"lengte",class:"error-feedback"})]),e("div",W,[z,s(r,{name:"geslacht",type:"name",class:"form-control"}),s(a,{name:"geslacht",class:"error-feedback"})]),e("div",L,[R,s(r,{name:"date",type:"date",class:"form-control"}),s(a,{name:"date",class:"error-feedback"})]),U]),_:1},8,["onSubmit","validation-schema"]),e("button",{class:"returnButton",onClick:i[0]||(i[0]=O=>h.goBackToPatients())},j),l.firebaseError!==""?(m(),_("div",A,f(l.firebaseError),1)):u("",!0),c.message?(m(),_("div",{key:1,class:x(["alert",c.successful?"alert-success":"alert-danger"])},f(c.message),3)):u("",!0)])}var ee=E(S,[["render",H],["__scopeId","data-v-068ac032"]]);export{ee as default};