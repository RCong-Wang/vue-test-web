<template>
  <header>
    <nav id="menu">
      <ul class="menu-link" v-if="isuserlogin">
        <li>
          <router-link to="/">首頁</router-link>
        </li>
        <li>
          <router-link to="/friend">好友</router-link>
        </li>
        <li>
          <router-link to="/chatroom">聊天室</router-link>
        </li>
        <li>
          <button @click="logout">登出</button>
        </li>
      </ul>
      <ul id="menu-link" v-else>
        <li>
          <router-link to="/login">請先登錄</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <div>
      <p>模擬Line的網頁</p>
    </div>
  </footer>
</template>

<script>
import { inject } from 'vue';

export default {
  name: 'app',
  data(){
    return {
      isuserlogin: false,
    }
  },
  created(){
    this.axios = inject('axios');
    this.checkisuserlogin();
  },
  methods: {
    checkisuserlogin(){
      this.axios.get(`http://127.0.0.1:8000/user/checklogin/`)
      .then(response=>{
        this.isuserlogin = response.data.loggin;
      })
      .catch(error=>{
        console.error('無法獲取登陸狀態:',error);
      });
    },
    logout(){
      this.axios.get(`http://127.0.0.1:8000/user/getcsrf/`)
      .then(response=>{
        const csrf = response.data.csrf_token;

        console.log(csrf);
        this.axios.get(`http://127.0.0.1:8000/user/logout/`,{
            withCredentials: true,
            headers:{
                'X-CSRFToken': csrf,
                'Content-Type': 'application/json',
            }
        })
        .then(response=>{
            console.log('登出成功:',response.data);
            this.checkisuserlogin()
            this.$router.push('/');
            
        })
        .catch(error => {
          console.error('登出失敗:',error);
        });
      })
    }
  }
};
</script>

<style>
  .menu-link li{
    font-size: 24px;
    display: inline;
    margin: 3px;
  }
  header {
    background-color: pink;
    color: #fff;
    padding: 10px;
    /* position: fixed; */
  }
  footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px;
    text-align: center;
    }
</style>
