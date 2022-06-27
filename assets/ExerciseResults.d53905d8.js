import{N as f}from"./NavBarTop.1849cc74.js";import{_ as y,r as d,o as u,i as v,am as w,c as _,d as e,b as g,t as m,F as h,al as C,h as F,e as k,p as D,f as R}from"./index.0d42f483.js";import{D as x}from"./DeleteForm.6bec366d.js";import{k as B,l as I}from"./fdb.0745fae4.js";import"./firebaseAuth.c819ba0d.js";import"./vee-validate.esm.a38a434b.js";const N={name:"MovementPercentageInTime",props:{dataProp:Array},data(){return{}},mounted(){}};function P(t,s,l,c,a,o){const i=d("line-chart");return u(),v(i,{data:l.dataProp,xtitle:"Datum",ytitle:"Beweegbaarheid (%)",language:"de"},null,8,["data"])}var M=y(N,[["render",P]]);const S={name:"Exercise results",components:{NavBarTop:f,MovementPercentageInTime:M,DeleteForm:x},data(){return{results:[],graphResults:[],showForm:!1,route:w(),routeName:""}},methods:{async getCategoryResults(){let t=this.route.params.name,s=this.route.params.category;this.$store.state.age,this.$store.state.gender;const l=await B(t,s),c=l.results;l.results,this.routeName=l.name;const a=c.reduce((o,i,p)=>(o[i.date]=i.beweging,o),{});this.graphResults=a,this.results=c},goBackToPatient(){this.$router.push({name:"patient"})},addMeasurement(){let t=this.route.params.name,s=this.route.params.category;this.$router.push({name:"measureInfo",params:{name:t,category:s}})},async deleteCategory(){let t=this.route.params.name,s=this.route.params.category;await I(t,s),this.$router.push({name:"patient"})},blurrStyle(){return this.showForm?"filter: blur(24px); opacity: 0.6;":""},showDeleteForm(t){t.stopPropagation(),this.showForm=!0},closeForm(){this.showForm=!1,this.errorMessage=""}},mounted(){this.getCategoryResults()}},n=t=>(D("data-v-a2105e44"),t=t(),R(),t),T={class:"title"},V={class:"result_container"},$=n(()=>e("b",null,"Meest recente metingen ",-1)),E={class:"recent_results"},j=n(()=>e("b",null,"Recente resultaten in vergelijking tot de norm",-1)),z=n(()=>e("tr",null,[e("th",null,"Datum"),e("th",null,"Beweging (graden)"),e("th",null,"Vergeleken tot de norm i")],-1)),A=n(()=>e("b",null,"Verwijder categorie",-1)),L=[A],q=n(()=>e("div",{style:{"margin-top":"80px"}},null,-1)),G=n(()=>e("b",null,"Terug",-1)),H=[G],J=n(()=>e("b",null,"Niewe meting",-1)),K=[J];function O(t,s,l,c,a,o){const i=d("nav-bar-top"),p=d("movement-percentage-in-time"),b=d("DeleteForm");return u(),_(h,null,[e("div",{style:F(o.blurrStyle())},[g(i),e("h1",T,m(a.routeName),1),e("main",null,[e("div",V,[$,g(p,{"data-prop":a.graphResults},null,8,["data-prop"])]),e("div",E,[j,e("table",null,[z,(u(!0),_(h,null,C(a.results,r=>(u(),_("tr",{key:r},[e("td",null,m(r.date),1),e("td",null,m(r.beweging)+"\xB0",1),e("td",null,m(r.norm)+"%",1)]))),128))])])]),e("button",{class:"delete_categoryBtn",onClick:s[0]||(s[0]=(...r)=>o.showDeleteForm&&o.showDeleteForm(...r))},L),q,e("footer",null,[e("button",{class:"backBtn",onClick:s[1]||(s[1]=r=>o.goBackToPatient())},H),e("button",{class:"addMeasurement",onClick:s[2]||(s[2]=r=>o.addMeasurement())},K)])],4),a.showForm?(u(),v(b,{key:0,onClose:o.closeForm,onDelete:o.deleteCategory},null,8,["onClose","onDelete"])):k("",!0)],64)}var ee=y(S,[["render",O],["__scopeId","data-v-a2105e44"]]);export{ee as default};
