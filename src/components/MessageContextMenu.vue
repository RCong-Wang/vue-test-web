<template>
    <div class="context-menu" :style="{ top: `${position.top}px`, left: `${position.left}px` }">
      <ul>
        <li ref="editableMessage" contenteditable @keydown.enter>Edit</li>
        <li @click="handleAction('delete')">Delete</li>
        <li @click="handleAction('close')">Close</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { inject } from 'vue';

  export default {
    props: {
      position: Object,
      message: Object,
    },
    created(){
      this.axios = inject('axios');
    },
    methods: {
      handleAction(action) {
        // 處理右鍵後的選單
        this.$emit('close'); // 關閉選單
        // 執行選單內容
        if (action === 'edit') {
          console.log(this.message);
        } else if (action === 'delete') {
          console.log(this.message);
          this.DeleteMessage();
        }
        else if(action==='close') {
          console.log('Close...');
        }
      },
      DeleteMessage(){
        this.axios.get(`http://127.0.0.1:8000/user/getcsrf/`)
        .then(response=>{
          const csrf = response.data.csrf_token;
          this.axios.delete(`http://127.0.0.1:8000/main/api/messages/${this.message.id}/`,{
            headers: {
              'X-CSRFToken': csrf,
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          })
          .then(response=>{
            console.log(response.data);
          })
          .catch(error=>{
            console.error("訊息刪除失敗: ",error);
          })
        })
      },
      EditMessage(){

      },
    },
  };
  </script>
  
  <style scoped>
  .context-menu {
    position: fixed;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  
  .context-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .context-menu li {
    padding: 8px 16px;
    cursor: pointer;
  }
  
  .context-menu li:hover {
    background-color: #f0f0f0;
  }
  </style>
  