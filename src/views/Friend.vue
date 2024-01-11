<template>
  <div>
    <p>good</p>

    <ul>
      <li v-for="friend in Friends" :key="friend.friend_id" >
        <button @click="EnterChatroom(friend.friend_id)">{{ friend.friend_id }}_{{ friend.friend_name }}</button>
      </li>
    </ul>
    
  </div>
  <div>
    <label for="search-box">搜尋好友: </label>
    <input type="text" id="search-box" v-model="search_box">
    <button @click="SearchFriend">搜尋</button>
  </div>
  <div>
    <button v-if="user_id" @click="AddFriend">{{ user_name }}</button>
    <!-- <p v-if="user_id">{{ user_name }}</p> -->
  </div>
</template>

<script>
  import { inject } from 'vue';
  
  export default {
    name: "Friend",
    created(){
      this.axios = inject('axios');
      this.FriendList();
    },
    data(){
      return{
        search_box: '',
        user_id: null,
        user_name: '',
        Friends: [],
      }
    },
    methods:{
      FriendList(){
        this.axios.get('https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/friendlist/')
        .then(response=>{
          this.Friends = response.data.friends;
          console.log(this.Friends)
        })
        .catch(error=>{
          console.error('好友清單錯誤',error);
        })
        console.log("good");
      },
      SearchFriend(){
        this.axios.get('https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/searchfriend/',{
          params:{
            username: this.search_box
          }
        })
        .then(response=>{
          this.user_id = response.data.user_id;
          this.user_name = response.data.user;

          console.log("搜尋成功: ",response.data);
        })
        .catch(error=>{
          console.error('搜尋失敗',error);
        })
      },
      AddFriend(){
        this.axios.get('https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/getcsrf/')
        .then(response=>{
          const csrf = response.data.csrf_token;
          console.log(csrf);          
          this.axios.post('https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/addfriend/',this.user_id,{
              withCredentials: true,
              headers:{
                'X-CSRFToken': csrf,
                'Content-Type': 'application/json',
              }
          })
          .then(response=>{
            this.FriendList();
            if (response && response.data) {
              console.log('成功回應:', response.data);
            }
            else {
              console.log('成功回應:',response);
              console.error('回應未定義或缺少數據');
            }
          })
          .catch(error => {
            if (error.response && error.response.data) {
              console.error('錯誤訊息:', error.response.data); // 如果有 response data，輸出詳細錯誤信息
            }
            else {
              console.error('發生錯誤:', error); // 其他錯誤，顯示錯誤物件
            }
          });
        })
      },
      EnterChatroom(friend_id){
        console.log(friend_id);
        this.axios.get("https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/main/isexistchatroom/",{
          params:{
            id: friend_id
          }
        })
        .then(response=>{
          console.log("搜尋成功",response.data);
          if(response.data.success){
            this.$store.dispatch('updateroomid',response.data.success);
            this.$router.push('chatroom/');
          }
          else{
            this.axios.get("https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/getcsrf/")
            .then(response=>{
              const csrf = response.data.csrf_token;
              console.log(csrf);
              this.axios.post("https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/main/createchatroom/",friend_id,{
                withCredentials: true,
                headers:{
                  'X-CSRFToken': csrf,
                  'Content-Type': 'application/json',
                }
              })
              .then(response=>{
                this.$store.dispatch('updateroomid',response.data.success);
                this.$router.push('chatroom/');
              })
              .catch(error=>{
                console.error("創建聊天室失敗:",error);
              })
            })
          }
        })
        .catch(error=>{
          console.error("進入聊天室錯誤:",error);
        })
      },
    },
  };
</script>