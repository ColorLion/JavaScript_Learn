<!--로그인 후 화면-->
<template>
    <v-container>
        <v-row>
            <v-col xs="12" class="mt-5 text-center">
                <h1 class="display-1 my-1">로그인 후 화면</h1>
                <p class="body-1">인증된 사용자가 방문하는 페이지</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col dark offset="1" cols="10" class="mt-5 text-center">
                <img v-if="fnGetUser.photoURL" :src="fnGetUser.phtoURL" class="avatar_style" alt/>
                <h3 class="pt-2 mt-4 grey lighten-2">{{fnGetUser.name}}</h3>
                <p class="pb-2 grey lighten-2">{{fnGetUser.email}}</p>
            </v-col>
            <v-col offset="3" cols="6" class="text-center mt-1">
                <v-btn @click="fnSendPasswordReset" block color="orange" large dark>
                    <v-icon left>mdi-email</v-icon>비밀번호 재설정
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { oFirebaseAuth } from "../database/firebase"
export default{
    computed: {
        fnGetUser(){
            let oUserInfo = this.$store.getters.fnGetUser;
            return oUserInfo;
        }
    },
    methods: {
        fnSendPasswordReset(){
            oFirebaseAuth
             .sendPasswordResetEmail(this.fnGetUser.email)
             .then(function(){
                 console.log("비밀번호 재설정 메일 보냈다");
             })
             .catch(function(error){
                 console.log(error);
             });
        }
    }
}
</script>

<style>
    .avatar_style{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
</style>