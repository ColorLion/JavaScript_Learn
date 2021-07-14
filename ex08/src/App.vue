<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>멀티 페이지</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon><mdi-dots-vertical></mdi-dots-vertical></v-icon>
      </v-btn>
    </v-app-bar>
    <!--라우터 페이지 랜더링-->
    <v-content>
      <!--페이지 장면 전환 효과-->
      <v-slide-x-transition mode="out-in">
        <router-view></router-view>
      </v-slide-x-transition>
    </v-content>

    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">HMAPs.net</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
