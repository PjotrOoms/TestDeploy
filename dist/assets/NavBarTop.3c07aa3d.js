import{a as r}from"./firebaseAuth.2d0d8684.js";import{_ as d,o as l,c as n,d as e,t as i,p as c,g as p}from"./index.5890984c.js";var _="/334-HOGESCHOOL-UTRECHT-INSTITUUT-VOOR-BEWEGINGSSTUDIES/assets/beeldmerk.0b159481.png",u="/334-HOGESCHOOL-UTRECHT-INSTITUUT-VOOR-BEWEGINGSSTUDIES/assets/blackImage.380b9819.jpg";const m={name:"NavBarTop",data(){return{user:{}}},computed:{},methods:{logOut(){r()},getDisplayName(){let a=this.$store.getters.getUser.email,t=this.$store.getters.getUser.displayName;return typeof t=="undefined"?a:t}}},s=a=>(c("data-v-60e7acdb"),a=a(),p(),a),g={class:"navbar1"},h={class:"container-fluid1"},v=s(()=>e("img",{src:_,height:"40",alt:"hu logo",loading:"lazy"},null,-1)),f={class:"item-left-side"},S={class:"userName"},T={class:"dropdown"},N=s(()=>e("a",{class:"dropdown-toggle d-flex align-items-center hidden-arrow",href:"#",id:"navbarDropdownMenuAvatar",role:"button","data-mdb-toggle":"dropdown","aria-expanded":"false"},[e("img",{src:u,class:"rounded-circle",height:"30",alt:"profile picture",loading:"lazy"})],-1)),b={class:"dropdown-menu dropdown-menu-end","aria-labelledby":"navbarDropdownMenuAvatar"},I=s(()=>e("li",null,[e("a",{class:"dropdown-item",href:"#"},"My profile")],-1)),O=s(()=>e("li",null,[e("a",{class:"dropdown-item",href:"#"},"Settings")],-1));function w(a,t,y,E,U,o){return l(),n("nav",g,[e("div",h,[v,e("div",f,[e("p",S,i(o.getDisplayName()),1),e("div",T,[N,e("ul",b,[I,O,e("li",null,[e("a",{onClick:t[0]||(t[0]=B=>o.logOut()),class:"dropdown-item",href:"#"},"Logout")])])])])])])}var G=d(m,[["render",w],["__scopeId","data-v-60e7acdb"]]);export{G as N};
