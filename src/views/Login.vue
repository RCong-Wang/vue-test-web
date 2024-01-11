<template>
    <div>
      <form @submit="login" method="POST">
        <div>
            <label for="username">用戶名: </label>
            <input type="text" id="username" v-model="username">
        </div>
        <div>
            <label for="password">密碼: </label>
            <input type="password" id="password" v-model="password">
        </div>
        <div>
            <button type="submit">登陸</button>
        </div>
      </form>
    </div>
</template>
  
<script>
    import { inject } from 'vue';

    export default{
        created() {
            this.axios = inject('axios');
        },
        data(){
            return{
                username: '',
                password: '',
            };
        },
        methods:{
            login(event){
                event.preventDefault();
                
                const userdata = {
                    username: this.username,
                    password: this.password
                };
                this.axios.get('https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/getcsrf/')
                .then(response=>{
                    const csrf = response.data.csrf_token;
                    
                    this.axios.post('https://5e0d-2401-e180-8d23-1fdd-b1d6-64a-7746-e486.ngrok-free.app/user/login/',userdata,{
                        withCredentials: true,
                        headers:{
                            'X-CSRFToken': csrf,
                            'Content-Type': 'application/json',
                        }
                    })
                    .then(response=>{
                        console.log(document.cookie.includes('sessionid'));
                        console.log('登陸成功:',response.data);
                        this.$router.push('/');
                    })
                    .catch(error => {
                        console.error('登陸失敗:',error);
                    });
                })
                
            },

        }
    };
</script>