<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="py-3 px-3">
                    <v-img height="450px" contain:src="this.itemPic.url"></v-img>
                    <v-card-text v-if="this.itemPic.title">
                        <h1 class="headline mt-1 text-center">
                            {{this.itemPic.title}}
                        </h1>
                        <p class="body-1 mt-1 text-center">
                            {{this.itemPic.info}}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" class="mt-3 text-center">
                <v-btn color="grey" fab dark @click="fnDeleteItem()">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { oStorage, oPicturesinDB } from '../datasources/firebase.js';
    export default {
        name: 'App',
        firebase: { oPictures: oPicturesinDB},
        data() {
            return {
                oPictures: [],
                itemPic: null,
            }
        },
        created(){
            const itemID = this.$route.params.p_id
            this.itemPic = this.oPictures.find(item => item['.key'] === itemID)
        },
        methods: {
            fnDeleteItem() {
                oPicturesinDB.child(this.itemPic['.key']).remove()
                if(this.itemPic['filename'])
                    oStorage.ref('images').child(this.itemPic['filename']).delete()
                this.$route.push('/');
            }
        }
    }
</script>