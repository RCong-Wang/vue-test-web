<template>
  <div>
    <h1>聊天室:{{ this.roomID }}</h1>
  </div>
  <div class="chat-window">
    <div class="message-container" ref="messageContainer">
      <ul>
        <li v-for="(message, index) in messages" :key="message.id">
          <p>
            <span style="font-size: 12px;">{{ message.time }}</span><br>
            {{ message.senter }}: <span style="border-style: dashed;" @contextmenu.prevent="showMessageContextMenu(message, $event)">
                {{ message.context }}
                <Teleport to="body">
                  <MessageContextMenu 
                    v-if="isMessageContextMenu" :position="contextMenuPosion" :message="currentMessage"
                    @close="closeMessageContextMenu"
                  />
                </Teleport>
            </span>
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="input-container">
    <input type="text" id="send-message-box" v-model="sendmessage" @keyup.enter="SendMessage"/>
    <button @click="SendMessage">發送訊息</button>
  </div>
</template>

<script>
import { inject } from 'vue';
import { ref } from 'vue';

import MessageContextMenu from '@/components/MessageContextMenu.vue';

export default{
  name: "Chatroom",
  components:{
    MessageContextMenu,
  },
  setup(){
    const isMessageContextMenu = ref(false);
    const contextMenuPosion = ref({top:0,left:0});
    const currentMessage = ref(null);
    const showMessageContextMenu = (message, event)=>{
      event.preventDefault();
      isMessageContextMenu.value = true;
      contextMenuPosion.value = {top:event.clientY,left:event.clientX};
      currentMessage.value = message;
    };
    const closeMessageContextMenu = () =>{
      isMessageContextMenu.value = false;
    };
    return {
      isMessageContextMenu,
      contextMenuPosion,
      currentMessage,
      showMessageContextMenu,
      closeMessageContextMenu,
    }
  },
  computed:{
    roomID() {
      return this.$store.getters.getroomid;
    },
  },
  data(){
    return{
      websocket: null,
      messages: [],
      sendmessage:'',
    }
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.closeWebSocket);
  },
  created(){
    this.axios = inject('axios');
    this.GetMessage();
    this.websocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${this.roomID}/`);
    this.websocket.onopen = (event) =>{
      console.log("successful link: ",event);
    };
    window.addEventListener("beforeunload", this.closeWebSocket);
  },
  mounted() {
    this.websocket.onmessage = (event) =>{
      const message = JSON.parse(event.data).message;
      // this.messages.push(message);
      this.messages.unshift(message);
    };
  },
  methods:{
    GetMessage(){
      this.axios.get(`http://127.0.0.1:8000/main/api/messages/`,{
        params:{
          id : this.roomID,
        }})
      .then(response=>{
        if(response.data.fail){
          console.log(response.data)
        }
        else{
          this.messages = response.data;
        }
      })
      .catch(error=>{
        console.error('獲得訊息失敗',error);
      })
    },
    SendMessage(){
      if(this.sendmessage==''){
        console.log('發送失敗: 訊息欄為空');
      }
      else{
        this.axios.get(`http://127.0.0.1:8000/user/getcsrf/`)
        .then(response=>{
          const csrf = response.data.csrf_token;
          const data = {
            context: this.sendmessage,
            room: [this.roomID],
          };
          this.axios.post(`http://127.0.0.1:8000/main/api/messages/`, data, {
            withCredentials: true,
            headers: {
              'X-CSRFToken': csrf,
              'Content-Type': 'application/json',
            }
          })
          .then(response=>{
            console.log("發送成功",response.data);
            const data = {
              message: response.data.id,
            };
            this.websocket.send(JSON.stringify(data));
            this.sendmessage = '';
          })
          .catch(error=>{
            console.error('發送失敗',error);
          })
        })
      }
    },
    closeWebSocket() {
      this.websocket.close();
    },
  }
}


</script>
<style>
.chat-window {
  width: auto;
  border: 1px solid #ccc;
  overflow: hidden;
}

.message-container {
  height: 200px;
  overflow-y: auto;
}

#send-message-box {
  width:100%;
  height: 30px;
}
.input-container {
  padding: 8px;
  /* border-top: 1px solid #ccc; */
}
</style>