<template>
    <v-container>
        <v-row>
            <!-- 반응형 -->
            <v-col cols="12" sm ="6" md="4" lg="3" xl="2" v-for="item in this.oPictures" :key=item.key>
                <v-card class="py-2 px-2">
                    <!--사진을 읽어 표시하고 세부 페이지로 이동-->
                    <v-img :src="item.url" height="200px" class="pointer" @click="fnDisplayInfo(item['.key'])"></v-img>
                    <v-card-title>
                        <h1 class="title grey--text text--darken-3 mb-3">{{item.title}}</h1>
                        <p class="body-1 grey--text">{{item.info}}</p>
                    </v-card-title>
                </v-card>
            </v-col>
            <v-col cols="12" class="mt-5 text-center">
                <!-- 만약 업로드 없으면 안내 문구-->
                <p v-if="!this.oPictures.length">사진 노노 추가 고고</p>
            </v-col>
            <v-btn @click="$router.push('/post')" color="red" dark fixed bottom right fab>
                <v-icon>add</v-icon>
            </v-btn>
        </v-row>
    </v-container>
</template>