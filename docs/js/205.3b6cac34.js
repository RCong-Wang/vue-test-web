"use strict";(self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[]).push([[205],{7205:function(e,s,t){t.r(s),t.d(s,{default:function(){return C}});var o=t(3396),n=t(7139),a=t(9242);const i={class:"chat-window"},l={class:"message-container",ref:"messageContainer"},c={style:{"font-size":"12px"}},r=(0,o._)("br",null,null,-1),d=["onContextmenu"],u={class:"input-container"};function g(e,s,t,g,h,p){const m=(0,o.up)("MessageContextMenu");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o._)("h1",null,"聊天室:"+(0,n.zw)(this.roomID),1)]),(0,o._)("div",i,[(0,o._)("div",l,[(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.messages,((e,s)=>((0,o.wg)(),(0,o.iD)("li",{key:e.id},[(0,o._)("p",null,[(0,o._)("span",c,(0,n.zw)(e.time),1),r,(0,o.Uk)(" "+(0,n.zw)(e.senter)+": ",1),(0,o._)("span",{style:{"border-style":"dashed"},onContextmenu:(0,a.iM)((s=>g.showMessageContextMenu(e,s)),["prevent"])},[(0,o.Uk)((0,n.zw)(e.context)+" ",1),((0,o.wg)(),(0,o.j4)(o.lR,{to:"body"},[g.isMessageContextMenu?((0,o.wg)(),(0,o.j4)(m,{key:0,position:g.contextMenuPosion,message:g.currentMessage,onClose:g.closeMessageContextMenu},null,8,["position","message","onClose"])):(0,o.kq)("",!0)]))],40,d)])])))),128))])],512)]),(0,o._)("div",u,[(0,o.wy)((0,o._)("input",{type:"text",id:"send-message-box","onUpdate:modelValue":s[0]||(s[0]=e=>h.sendmessage=e),onKeyup:s[1]||(s[1]=(0,a.D2)(((...e)=>p.SendMessage&&p.SendMessage(...e)),["enter"]))},null,544),[[a.nr,h.sendmessage]]),(0,o._)("button",{onClick:s[2]||(s[2]=(...e)=>p.SendMessage&&p.SendMessage(...e))},"發送訊息")])],64)}var h=t(4870);function p(e,s,t,i,l,c){return(0,o.wg)(),(0,o.iD)("div",{class:"context-menu",style:(0,n.j5)({top:`${t.position.top}px`,left:`${t.position.left}px`})},[(0,o._)("ul",null,[(0,o._)("li",{ref:"editableMessage",contenteditable:"",onKeydown:s[0]||(s[0]=(0,a.D2)((()=>{}),["enter"]))},"Edit",544),(0,o._)("li",{onClick:s[1]||(s[1]=e=>c.handleAction("delete"))},"Delete"),(0,o._)("li",{onClick:s[2]||(s[2]=e=>c.handleAction("close"))},"Close")])],4)}var m={props:{position:Object,message:Object},created(){this.axios=(0,o.f3)("axios")},methods:{handleAction(e){this.$emit("close"),"edit"===e?console.log(this.message):"delete"===e?(console.log(this.message),this.DeleteMessage()):"close"===e&&console.log("Close...")},DeleteMessage(){this.axios.get("http://127.0.0.1:8000/user/getcsrf/").then((e=>{const s=e.data.csrf_token;this.axios.delete(`http://127.0.0.1:8000/main/api/messages/${this.message.id}/`,{headers:{"X-CSRFToken":s,"Content-Type":"application/json"},withCredentials:!0}).then((e=>{console.log(e.data)})).catch((e=>{console.error("訊息刪除失敗: ",e)}))}))},EditMessage(){}}},w=t(89);const M=(0,w.Z)(m,[["render",p],["__scopeId","data-v-57c5dd0a"]]);var x=M,f={name:"Chatroom",components:{MessageContextMenu:x},setup(){const e=(0,h.iH)(!1),s=(0,h.iH)({top:0,left:0}),t=(0,h.iH)(null),o=(o,n)=>{n.preventDefault(),e.value=!0,s.value={top:n.clientY,left:n.clientX},t.value=o},n=()=>{e.value=!1};return{isMessageContextMenu:e,contextMenuPosion:s,currentMessage:t,showMessageContextMenu:o,closeMessageContextMenu:n}},computed:{roomID(){return this.$store.getters.getroomid}},data(){return{websocket:null,messages:[],sendmessage:""}},beforeUnmount(){window.removeEventListener("beforeunload",this.closeWebSocket)},created(){this.axios=(0,o.f3)("axios"),this.GetMessage(),this.websocket=new WebSocket(`ws://127.0.0.1:8000/ws/chat/${this.roomID}/`),this.websocket.onopen=e=>{console.log("successful link: ",e)},window.addEventListener("beforeunload",this.closeWebSocket)},mounted(){this.websocket.onmessage=e=>{const s=JSON.parse(e.data).message;this.messages.unshift(s)}},methods:{GetMessage(){this.axios.get("http://127.0.0.1:8000/main/api/messages/",{params:{id:this.roomID}}).then((e=>{e.data.fail?console.log(e.data):this.messages=e.data})).catch((e=>{console.error("獲得訊息失敗",e)}))},SendMessage(){""==this.sendmessage?console.log("發送失敗: 訊息欄為空"):this.axios.get("http://127.0.0.1:8000/user/getcsrf/").then((e=>{const s=e.data.csrf_token,t={context:this.sendmessage,room:[this.roomID]};this.axios.post("http://127.0.0.1:8000/main/api/messages/",t,{withCredentials:!0,headers:{"X-CSRFToken":s,"Content-Type":"application/json"}}).then((e=>{console.log("發送成功",e.data);const s={message:e.data.id};this.websocket.send(JSON.stringify(s)),this.sendmessage=""})).catch((e=>{console.error("發送失敗",e)}))}))},closeWebSocket(){this.websocket.close()}}};const k=(0,w.Z)(f,[["render",g]]);var C=k}}]);
//# sourceMappingURL=205.3b6cac34.js.map