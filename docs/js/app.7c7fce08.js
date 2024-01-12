(function(){"use strict";var e={2424:function(e,n,t){var o=t(9242),r=t(3396);const i={id:"menu"},u={key:0,class:"menu-link"},a=(0,r.Uk)("首頁"),l=(0,r.Uk)("好友"),s=(0,r.Uk)("聊天室"),c={key:1,id:"menu-link"},d=(0,r.Uk)("請先登錄"),f=(0,r._)("footer",null,[(0,r._)("div",null,[(0,r._)("p",null,"模擬Line的網頁")])],-1);function p(e,n,t,o,p,h){const m=(0,r.up)("router-link"),g=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r._)("nav",i,[p.isuserlogin?((0,r.wg)(),(0,r.iD)("ul",u,[(0,r._)("li",null,[(0,r.Wm)(m,{to:"/"},{default:(0,r.w5)((()=>[a])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(m,{to:"/friend"},{default:(0,r.w5)((()=>[l])),_:1})]),(0,r._)("li",null,[(0,r.Wm)(m,{to:"/chatroom"},{default:(0,r.w5)((()=>[s])),_:1})]),(0,r._)("li",null,[(0,r._)("button",{onClick:n[0]||(n[0]=(...e)=>h.logout&&h.logout(...e))},"登出")])])):((0,r.wg)(),(0,r.iD)("ul",c,[(0,r._)("li",null,[(0,r.Wm)(m,{to:"/login"},{default:(0,r.w5)((()=>[d])),_:1})])]))])]),(0,r._)("main",null,[(0,r.Wm)(g)]),f],64)}t(560);var h={name:"app",data(){return{isuserlogin:!1}},created(){this.axios=(0,r.f3)("axios"),this.checkisuserlogin()},methods:{checkisuserlogin(){this.axios.get("https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/checklogin/").then((e=>{this.isuserlogin=e.data.loggin})).catch((e=>{console.error("無法獲取登陸狀態:",e)}))},logout(){this.axios.get("https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/getcsrf/").then((e=>{const n="qtyghdd82MOhdd2EX84iEG1sxvgzrDjFl4LMK0bZZhUBIKnSPNK9T2GtPu4rFHTZ";console.log(n),this.axios.get("https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/logout/",{withCredentials:!0,headers:{"X-CSRFToken":n,"Content-Type":"application/json"}}).then((e=>{console.log("登出成功:",e.data),this.checkisuserlogin(),this.$router.push("/")})).catch((e=>{console.error("登出失敗:",e)}))}))}}},m=t(89);const g=(0,m.Z)(h,[["render",p]]);var v=g,b=t(2483);const k=[{path:"/",component:()=>t.e(24).then(t.bind(t,2024)),name:"Home"},{path:"/friend",component:()=>t.e(302).then(t.bind(t,6302)),name:"Friend"},{path:"/chatroom",component:()=>t.e(28).then(t.bind(t,3028)),name:"Chatroom"},{path:"/login",component:()=>t.e(855).then(t.bind(t,6855)),name:"Login"}],y=(0,b.p7)({history:(0,b.PO)(),routes:k});var w=y,_=t(65),O=(0,_.MT)({state:{roomID:null},getters:{getroomid:e=>e.roomID},mutations:{setroomID(e,n){e.roomID=n}},actions:{updateroomid(e,n){e.commit("setroomID",n)}},modules:{}}),j=t(1076);j.Z.defaults.xsrfCookieName="csrftoken",j.Z.defaults.xsrfHeaderName="X-CSRFToken",j.Z.defaults.withCredentials=!0;const C=j.Z.create({withCredentials:!0});C.interceptors.response.use((e=>e),(e=>Promise.reject(e)));var x=C;(0,o.ri)(v).use(O).use(w).provide("axios",x).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var u=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{24:"1f971255",28:"52886106",302:"b2cd2dd6",855:"6b93c77b"}[e]+".js"}}(),function(){t.miniCssF=function(e){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="my-vue-app:";t.l=function(o,r,i,u){if(e[o])e[o].push(r);else{var a,l;if(void 0!==i)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=o),e[o]=[r];var f=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue-test-web/"}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var u=t.p+t.u(n),a=new Error,l=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};t.l(u,l,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,u=o[0],a=o[1],l=o[2],s=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var c=l(t)}for(n&&n(o);s<u.length;s++)i=u[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},o=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(2424)}));o=t.O(o)})();
//# sourceMappingURL=app.7c7fce08.js.map