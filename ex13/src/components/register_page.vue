<template>
    <v-container flow>
        <v-row> 
            <v-col cols="12" class="text-center my-5">
                <h1 class="display-1">가입</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="text-center" cols="8" offset="2" sm="6" offset-sm="3"></v-col>
            <!--양식의 입력이 제출되면 페이지를 새로고침하지 않음-->
            <form @submit.prevent="fnRegisterUser">
                <v-text-field name="Email" lable="2mail" type="email" v-model="sEmail" required></v-text-field>
                <v-text-field name="Password" label="비밀번호486" v-model="sPassword" required></v-text-field>
                <v-text-field
                 name="ConfirmPassword"
                 label="486 확인"
                 type="password"
                 v-model="sConfirmPassword"
                 required
                 :rules="[fnComparePassword]"
                 ></v-text-field>
                 <!--지연 시 버튼 사라짐-->
                 <v-btn type="submit" v-if="!fnGetLoading" color="orange" dark>회원가입</v-btn>
                 <v-progress-circular
                  v-if="fnGetLoading"
                  indeterminate
                  :width="7"
                  :size="70"
                  color="grey lighten-1"
                  ></v-progress-circular>
                  <v-alert type="error" dismissible v-model="bAlert">{{fnGetErrMsg}}</v-alert>
            </form>
        </v-row>
    </v-container>
</template>

<script>
</script>