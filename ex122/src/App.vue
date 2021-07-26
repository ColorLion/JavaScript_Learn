<template>
  <v-app>
    <v-app-bar app color="pink" dark fixed>
      <v-btn icon v-if="$route.name !== 'home_page'" @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>카갤</v-toolbar-title>
      <v-spacer></v-spacer>
      <!--홈화면에만 보이는 촬영아이콘-->
      <v-btn icon v-if="$route.name=='home_page'" @click="$router.push('/camera')">
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
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
