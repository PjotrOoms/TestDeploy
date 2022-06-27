import{N as C}from"./NavBarTop.1fb7c80b.js";import{L as D}from"./LinkButton.0b700f11.js";import{h as T,i as x,j as S}from"./fdb.490cc6fa.js";import{_ as E,r as _,o as h,c as u,b as r,w as $,d as e,t as i,e as f,n as N,p as B,f as P,am as I,F as y,al as M,h as K,i as w}from"./index.cab829dc.js";import{D as L}from"./DeleteForm.fbb3cd68.js";import{F as G,a as V,E as j}from"./vee-validate.esm.4e319182.js";import{c as R,a as p,d as k}from"./object.0482da8e.js";import"./firebaseAuth.65225f02.js";function F(t){let s=t.split("-"),g=new Date(s[2],s[1]-1,s[0]),o=new Date-g;return Math.floor(o/315576e5)}const A={name:"Register",props:{firebaseError:String},components:{Form:G,Field:V,ErrorMessage:j},data(){const t=R().shape({email:p().email("Email is ongeldig").max(50,"Karakter limiet bereikt"),naam:p().max(50,"Karakter limiet bereikt"),geslacht:p().max(50,"Karakter limiet bereikt"),gewicht:k().typeError("Dit veld is verplicht"),date:p().max(50,"Karakter limiet bereikt"),lengte:k().lessThan(2.5,"Voer een valide lengte in").moreThan(0,"Voer een valide lengte in").typeError("Dit veld is verplicht")});return{successful:!1,loading:!1,message:"",schema:t}},mounted(){document.getElementsByName("email")[0].placeholder="-",document.getElementsByName("naam")[0].placeholder="-",document.getElementsByName("geslacht")[0].placeholder="-",document.getElementsByName("gewicht")[0].placeholder="-",document.getElementsByName("lengte")[0].placeholder="-"},methods:{goBackToPatient(){this.$emit("close")},editPatient(){this.$emit("edit")}}},c=t=>(B("data-v-82a7706a"),t=t(),P(),t),O={class:"form"},W=c(()=>e("h3",null,[e("b",null,"Pati\xEBnt gegevens aanpassen")],-1)),z={class:"form-group"},U=c(()=>e("label",{for:"email",style:{"font-weight":"bold"}},"Email",-1)),q={class:"form-group"},H=c(()=>e("label",{for:"naam",style:{"font-weight":"bold"}},"Naam",-1)),J={class:"form-group"},Q=c(()=>e("label",{for:"gewicht",style:{"font-weight":"bold"}}," Gewicht (kg)",-1)),X={class:"form-group"},Y=c(()=>e("label",{for:"lengte",style:{"font-weight":"bold"}}," Lengte (m)",-1)),Z={class:"form-group"},ee=c(()=>e("label",{for:"geslacht",style:{"font-weight":"bold"}}," Geslacht",-1)),te={class:"form-group"},se=c(()=>e("label",{for:"date",style:{"font-weight":"bold"}}," Geboorte datum",-1)),oe={id:"submit_btn_cover"},ae=c(()=>e("b",null,"Opslaan",-1)),re=[ae],ne=c(()=>e("b",null,"Terug",-1)),le=[ne],ie={key:0,id:"errorText"};function ce(t,s,g,v,o,a){const d=_("Field"),m=_("ErrorMessage"),b=_("Form");return h(),u("form",O,[W,r(b,{onSubmit:t.createPatientWithFireStore,"validation-schema":o.schema},{default:$(()=>[e("div",z,[U,r(d,{name:"email",type:"email",class:"form-control"}),r(m,{name:"email",class:"error-feedback"})]),e("div",q,[H,r(d,{name:"naam",type:"name",class:"form-control"}),r(m,{name:"naam",class:"error-feedback"})]),e("div",J,[Q,r(d,{name:"gewicht",type:"number",class:"form-control"}),r(m,{name:"gewicht",class:"error-feedback"})]),e("div",X,[Y,r(d,{name:"lengte",type:"number",class:"form-control"}),r(m,{name:"lengte",class:"error-feedback"})]),e("div",Z,[ee,r(d,{name:"geslacht",type:"name",class:"form-control"}),r(m,{name:"geslacht",class:"error-feedback"})]),e("div",te,[se,r(d,{name:"date",type:"date",class:"form-control"}),r(m,{name:"date",class:"error-feedback"})]),e("div",oe,[e("button",{class:"registerButton",style:{"font-weight":"bold"},onClick:s[0]||(s[0]=l=>a.editPatient())},re)])]),_:1},8,["onSubmit","validation-schema"]),e("button",{class:"returnButton",onClick:s[1]||(s[1]=l=>a.goBackToPatient())},le),g.firebaseError!==""?(h(),u("div",ie,i(g.firebaseError),1)):f("",!0),o.message?(h(),u("div",{key:1,class:N(["alert",o.successful?"alert-success":"alert-danger"])},i(o.message),3)):f("",!0)])}var de=E(A,[["render",ce],["__scopeId","data-v-82a7706a"]]);const me={name:"patients",components:{NavBarTop:C,LinkButton:D,DeleteForm:L,EditForm:de},data(){return{name:"",weight:null,age:"",heightInM:null,patients:null,categories:null,showFormDelete:!1,showFormEdit:!1,gender:"",email:"",fysio:this.$store.getters.getUser.uid,route:I(),patientID:null}},mounted(){this.getPatientData(),this.getCategories(),console.log(this.categories)},methods:{async getCategories(){const t=this.route.params.name;console.log(t);let s=await T(t);this.categories=s,console.log(this.categories)},async getPatientData(){const t=this.route.params.name;let s=await x(t);this.$store.commit("setPatientGender",s.gender),this.$store.commit("setPatientAge",F(s.dateOfBirth)),this.name=s.name,this.weight=s.weight,this.age=F(s.dateOfBirth),this.heightInM=s.heightInM,this.email=s.email,this.gender=s.gender},deletePatientWithFireStore(){let t=this.route.params.name;S(t),this.$router.push({name:"patients"})},goBackToPatientList(){this.$router.push({name:"patients"})},goToExerciseResults(t){let s=this.route.params.name;this.$router.push({name:"exerciseResults",params:{name:s,category:t}})},goToCategory(){const t=this.route.params.name;this.$router.push({name:"addCategorie",params:{name:t}})},blurrStyle(){return this.showFormDelete|this.showFormEdit?"filter: blur(24px); opacity: 0.6;":""},showDeleteForm(t){t.stopPropagation(),this.showFormDelete=!0},showEditForm(t){t.stopPropagation(),this.showFormEdit=!0},closeForm(){this.showFormDelete=!1,this.showFormEdit=!1,this.errorMessage=""},editPatient(){this.closeForm()}}},n=t=>(B("data-v-58db8dfa"),t=t(),P(),t),he={class:"title"},_e={class:"info_container"},ue=n(()=>e("b",null,"Pati\xEBnt gegevens",-1)),ge=n(()=>e("td",{class:"header_name"},[e("b",{class:"table_content"},"Naam ")],-1)),pe={class:"table_data"},fe=n(()=>e("td",{class:"header_name"},[e("b",null,"E-mail")],-1)),be={class:"table_data"},ve=n(()=>e("td",{class:"header_name"},[e("b",null,"Gewicht")],-1)),ye={class:"table_data"},we=n(()=>e("td",{class:"header_name"},[e("b",null,"Lengte")],-1)),ke={class:"table_data"},Fe=n(()=>e("td",{class:"header_name"},[e("b",null,"leeftijd ")],-1)),Ee={class:"table_data"},Be=n(()=>e("b",null,"Gegevens aanpassen",-1)),Pe=[Be],Ce={class:"text-holder"},De={style:{"max-width":"100%","word-break":"break-word"}},Te=["onClick"],xe=n(()=>e("b",null,"Verwijder pati\xEBnt",-1)),Se=[xe],$e=n(()=>e("div",{style:{"margin-top":"80px"}},null,-1)),Ne=n(()=>e("b",null,"Terug",-1)),Ie=[Ne],Me=n(()=>e("b",null,"Categorie toevoegen",-1)),Ke=[Me];function Le(t,s,g,v,o,a){const d=_("NavBarTop"),m=_("DeleteForm"),b=_("EditForm");return h(),u(y,null,[e("div",{style:K(a.blurrStyle())},[r(d),e("h1",he,i(o.name),1),e("div",_e,[ue,e("table",null,[e("tr",null,[ge,e("td",null,[e("div",pe,i(o.name),1)])]),e("tr",null,[fe,e("td",null,[e("div",be,i(o.email),1)])]),e("tr",null,[ve,e("td",null,[e("div",ye,i(o.weight)+" kg",1)])]),e("tr",null,[we,e("td",null,[e("div",ke,i(o.heightInM)+" m",1)])]),e("tr",null,[Fe,e("td",null,[e("div",Ee,i(o.age)+" jaar",1)])])]),e("button",{class:"editButton",onClick:s[0]||(s[0]=(...l)=>a.showEditForm&&a.showEditForm(...l))},Pe)]),(h(!0),u(y,null,M(o.categories,([l])=>(h(),u("div",{key:t.docKeyCategory,class:"category"},[e("div",Ce,[e("p",null,[e("div",De,[e("b",null,i(l),1)])])]),e("button",{class:"see-results",onClick:Ge=>a.goToExerciseResults(l)}," Bekijk ",8,Te)]))),128)),e("button",{class:"deletePatientBtn",onClick:s[1]||(s[1]=(...l)=>a.showDeleteForm&&a.showDeleteForm(...l))},Se),$e,e("footer",null,[e("button",{class:"backBtn",onClick:s[2]||(s[2]=l=>a.goBackToPatientList())},Ie),e("button",{class:"addCategory",onClick:s[3]||(s[3]=l=>a.goToCategory())},Ke)])],4),o.showFormDelete&&!o.showFormEdit?(h(),w(m,{key:0,onClose:a.closeForm,onDelete:a.deletePatientWithFireStore},null,8,["onClose","onDelete"])):f("",!0),o.showFormEdit&&!o.showFormDelete?(h(),w(b,{key:1,onClose:a.closeForm,onEdit:a.editPatient},null,8,["onClose","onEdit"])):f("",!0)],64)}var qe=E(me,[["render",Le],["__scopeId","data-v-58db8dfa"]]);export{qe as default};
