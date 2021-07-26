<template>
  <v-app>
  <!--반응형 중단점이 데탑 이상일 때 탐색 서랍이 툴바 아래에 표시 app어트리뷰트는 반드시 설정-->
  <v-navigation-drawer clipped v-model="drawer" app>
    <v-list>
      <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :to="item.to" :key="i">
        <v-list-item-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item>
      <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
        <v-list-item-action>
          <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
        </v-list-item-action>
        <v-list-item-title>로그아웃</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar clipped-left app color="primary" dark>
    <!--sm이상일때 아이콘 숨김-->
    <v-app-bar-nav-icon @click.stop="drawer =! drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
    <router-link to="/" style="cursor: pointer">
      <v-icon class="hidden-xs-only" large color="teal lighten-4">mdi-home</v-icon>
    </router-link>
    <v-toolbar-title class="headline">
      이메일-구글 인증 로그인
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn text v-for="item in fnGetMenuItems" :key="item.title" :to="item.to">
        <v-icon left>{{item.icon}}</v-icon>
        {{ item.title }}
      </v-btn>
      <v-btn text @click="fnDoLogout" v-if="fnGetAuthStatus">
        <v-icon left>mdi-arrow-right-bold-box-outline</v-icon> 로그아웃
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>

  <v-content>
    <router-view />
  </v-content>

  <v-footer>
    <div class="mx-auto">&copy; CODE-DESIGN.web.app.net</div>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    return {
      drawer: false
    }
  }),

  computed: {
    // 스토어에서 현재 인증상태인지 확인
    fnGetAuthStatus(){
      return this.$store.getters.fnGetAuthStatus
    },

    // 로그인 여부에 따라 탐색 서랍 툴바 항목배치
    fnGetMenuItems(){
      if (!this.fnGetAuthStatus){
        return [{
          title: '회원가입',
          to: '/register',
          icon: 'mdi-lock-open-outline'
        }]
      } else {
        return [{
          title: '페인 메이지',
          to: '/main',
          icon: 'mdi-account'
        }]
      }
    }
  },

  // 스토어의 로그아웃 기능 사용
  methods: {
    fnDoLogout(){
      this.$store.dispatch('fnDoLogout')
    }
  }
}
</script>
