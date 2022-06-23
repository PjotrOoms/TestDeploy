import{N as b}from"./NavBarTop.d4a026de.js";import{_ as p,o as s,c as u,d as t,n as g,r as d,b as y,w as F,F as f,aj as P,h as w,i as S,e as k,p as B,f as x,t as v}from"./index.1496f8ab.js";import{L as C}from"./LinkButton.6878d449.js";import{e as I}from"./fdb.58f18549.js";import $ from"./PatientCreatorForm.3a296021.js";import"./firebaseAuth.352d3f5d.js";import"./vee-validate.esm.75a23db2.js";import"./object.63d6def7.js";const L={name:"IconButton",props:{icon:{type:String,required:!0},name:{type:String,required:!0},color:{type:String,default:"text-success"}}},N=["aria-label"];function q(e,r,o,h,a,n){return s(),u("div",null,[t("button",{type:"button","aria-label":o.name},[t("i",{class:g(`bi ${o.icon} ${o.color}`)},null,2)],8,N)])}var T=p(L,[["render",q],["__scopeId","data-v-74b625b8"]]);const V={name:"LinkButton",props:{navigateTo:{type:String,required:!0},icon:{type:String,required:!0},name:{type:String,required:!0},color:{type:String,default:"text-success"},id:{type:Number,required:!1}}},z=["active","href","aria-label","onClick"];function E(e,r,o,h,a,n){const _=d("router-link");return s(),u("div",null,[y(_,{to:{name:o.navigateTo,params:{id:o.id}},custom:""},{default:F(({href:m,navigate:i,isActive:l})=>[t("button",{type:"button",active:l,href:m,"aria-label":o.name,onClick:i},[t("i",{class:g(`bi ${o.icon} ${o.color}`)},null,2)],8,z)]),_:1},8,["to"])])}var R=p(V,[["render",E],["__scopeId","data-v-5416119e"]]);const j={name:"patients",components:{NavBarTop:b,IconButton:T,LinkParamButton:R,PatientForm:$,LinkButton:C},data(){return{showForm:!1,user:null,showLoginForm:!1,patients:null,newPatientForm:!1}},mounted(){this.getPatientsFromFireStore()},methods:{async getPatientsFromFireStore(){let e=this.$store.getters.getUser.uid;await I(e).then(r=>{this.patients=r})},goToPatient(e){this.$router.push({name:"patient",params:{name:e}})},showPatientForm(e){e.stopPropagation(),this.showForm=!0},blurrStyle(){return this.showForm?"filter: blur(24px); opacity: 0.6;":""},closeForm(){this.showForm=!1,this.showLoginForm=!1,this.errorMessage="",this.getPatientsFromFireStore()},addNewPatient(){this.$router.push({name:"patientCreator"})}}},c=e=>(B("data-v-fcf97f2e"),e=e(),x(),e),D=c(()=>t("h1",{class:"title"},"Pati\xEBnten",-1)),G=c(()=>t("i",{class:"bi bi-person-square userIcon"},null,-1)),M={class:"patient-text-holder"},U={class:"text",style:{"word-break":"break-word"}},W=["onClick"],A=c(()=>t("b",null," Ga naar pati\xEBnt",-1)),H=[A],J=c(()=>t("div",{style:{"margin-top":"80px"}},null,-1)),K=c(()=>t("b",null,"Pati\xEBnt toevoegen",-1)),O=[K];function Q(e,r,o,h,a,n){const _=d("NavBarTop"),m=d("PatientForm");return s(),u(f,null,[t("div",{style:w(n.blurrStyle())},[y(_),D,t("main",null,[(s(!0),u(f,null,P(a.patients,([i,l])=>(s(),u("div",{key:l,class:"patient"},[G,t("div",M,[t("p",null,[t("b",null,v(l.name),1)]),t("p",U,v(l.email),1)]),t("button",{class:"seeResultsButton",onClick:X=>n.goToPatient(i)},H,8,W)]))),128))]),J,t("footer",null,[t("button",{class:"seeResultsButton",onClick:r[0]||(r[0]=(...i)=>n.showPatientForm&&n.showPatientForm(...i))},O)])],4),a.showForm&&!a.showLoginForm?(s(),S(m,{key:0,onSend:e.registerWithEmail,onClose:n.closeForm},null,8,["onSend","onClose"])):k("",!0)],64)}var at=p(j,[["render",Q],["__scopeId","data-v-fcf97f2e"]]);export{at as default};
