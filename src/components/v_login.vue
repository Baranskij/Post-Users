<template>
    <div>
        <h1>Post $ Users</h1>
        
            <div class="authorization" v-if="!flag">
                <div class="authorization-block">
                    <input class="authorization-block__input" type="text" id="login" v-model="login" placeholder="Имя пользователя">
                </div>
                <div class="authorization-block">
                    <input class="authorization-block__input" type="password" id="password" v-model="password" placeholder="Пароль">
                </div>
                <div>
                    <button class="authorization-etry" @click="entry">Вход</button>
                </div>
            </div>
        
        <div v-if="flag" class="info">
           <v_panel 
           ></v_panel>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import v_panel from './v_panel.vue'

    export default {
        components: {
            v_panel
        },
        data() {
            return {
                login: null,
                password: null,
                // flag: true,
                flag: false,
                user:null
            }
        },
        methods:  {
            async entry(){
               
                const url = 'https://dummyjson.com/auth/login'
                let loginInput = document.querySelector('#login')
                let passwordInput = document.querySelector('#password')
                if(this.login && this.password) {
                    await axios.post(url, {
                        username: this.login,
                        password: this.password,
                    })

                    .then(response => {
                        this.getUser(response.data.token);
                        this.flag = true;
                    })
                    .catch(response => {
                        console.log(response)
                        loginInput.classList.add('err');
                        passwordInput.classList.add('err');
                        this.login = null
                        this.password = null
                    }) 
                } else {
                    if(this.login < 3){
                        loginInput.classList.add('err')
                    }
                    if (this.password < 3) {
                        passwordInput.classList.add('err')
                    }
                }
            },
            getUser(token) {
                const url = 'https://dummyjson.com/auth/me';
                axios.get(url, {
                    headers: {
                        'Authorization': token,
                    },
                })
                .then(response => {
                    this.user = response
                })
            }
        }
    }


</script>
<style scoped>
    .authorization {
        display: flex;
        flex-direction: column;
        gap: 35px;
        justify-content: center;
        margin-top: 60px;
    }
    .authorization-block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .authorization-block__input {
        height: 30px;
        width: 300px;
        border: none;
        box-shadow: -4px 3px 12px -3px #b3b2b2;
        border-radius: 5px;
        font-size: 19px;
        padding: 10px;
    }
    .authorization-block__input:focus {
        border: none;
        box-shadow: 0px 0px 8px 0px #918787;
    }
    .authorization-block__input:focus-visible {
        outline: none;
        box-shadow: 0px 0px 8px 0px #918787;
    }
    .err{
        border: 1px solid red;
        background-color: #ffdfdf;
    }
    .authorization-etry {
        border: none;
        background-color: #ffff;
        width: 70px;
        height: 35px;
        box-shadow: -4px 3px 12px -3px #b3b2b2;
        border-radius: 5px;
    }
    .authorization-etry:hover {
        background-color: #ccc6c6;
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 94px;
        align-items: flex-start;
        padding: 30px;
    }
    .info-block {
        padding: 10px;
        border: 1px solid #ccc6c6;
        box-shadow: -4px 3px 12px -3px #b3b2b2;
    }
</style>
<!-- username: 'kminchelle',
    password: '0lelplR', -->