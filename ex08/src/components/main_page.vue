<template>
  <v-container>
    <p class="display-1 my-4">main page</p>
    <v-divider></v-divider>
    <p class="display-4 my-4">메인이라고</p>
    <div class="text-center">
      <v-btn fab large class="mt-5" color="purple" dark to="/sub">
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: '',

    data: () => ({

    }),
  }
</script>
