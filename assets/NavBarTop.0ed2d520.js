import{a as l}from"./firebaseAuth.731393f7.js";import{_ as n,o as d,c as i,d as e,t as p,p as c,f as _}from"./index.84698fb9.js";var u="/project334/assets/beeldmerk.0b159481.png",m="/project334/assets/blackImage.380b9819.jpg";const g={name:"NavBarTop",data(){return{user:{}}},computed:{},methods:{logOut(){l()},goBackToHome(){this.$router.push({name:"patients"})},goToDevelop(){this.$router.push({name:"feed"})},getDisplayName(){let t=this.$store.getters.getUser.email,o=this.$store.getters.getUser.displayName;return typeof o=="undefined"?t:o}}},a=t=>(c("data-v-21ab5c6f"),t=t(),_(),t),v={class:"navbar1"},h={class:"container-fluid1"},f=a(()=>e("img",{src:u,height:"40",alt:"hu logo",loading:"lazy"},null,-1)),b=[f],w={class:"item-left-side"},y={class:"userName"},N={class:"dropdown"},k=a(()=>e("a",{class:"dropdown-toggle d-flex align-items-center hidden-arrow",href:"#",id:"navbarDropdownMenuAvatar",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"},[e("img",{src:m,class:"rounded-circle",height:"30",alt:"profile picture",loading:"lazy"})],-1)),B={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdownMenuAvatar"},D=a(()=>e("li",null,[e("a",{class:"dropdown-item"},"Mijn profiel")],-1)),T=a(()=>e("li",null,[e("a",{class:"dropdown-item"},"Settings")],-1));function $(t,o,x,I,S,s){return d(),i("nav",v,[e("div",h,[e("button",{onClick:o[0]||(o[0]=r=>s.goBackToHome())},b),e("div",w,[e("p",y,p(s.getDisplayName()),1),e("div",N,[k,e("ul",B,[D,T,e("li",null,[e("a",{onClick:o[1]||(o[1]=r=>s.logOut()),class:"dropdown-item"},"Log uit")]),e("li",null,[e("a",{onClick:o[2]||(o[2]=r=>s.goToDevelop()),class:"dropdown-item"},"Development")])])])])])])}var M=n(g,[["render",$],["__scopeId","data-v-21ab5c6f"]]);export{M as N};
