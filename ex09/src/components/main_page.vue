<template>
    <v-container>
        <v-content>
            <div class="text-center display-3 my-4">Main</div>
            <v-row>
                <v-col offset-fm="1" sm="10">
                    <v-text-field label="Title" v-model="sTitle"></v-text-field>
                    <v-text-field label="Title" v-model="sTitle1"></v-text-field>
                </v-col>
            </v-row>
            <div class="text-center">
                <v-btn large class="mt-5" color="purple" dark @click="fnSetTitle">
                    확 인
                </v-btn>
            </div>
        </v-content>
    </v-container>    
</template>

<script>
    export default{
        data(){
            return {
                sTitle: this.$store.getters.fnGetData,
                sTitle1: this.$store.getters.fnGetData1
            }
        },
        methods:{
            fnSetTitle(){
                this.$store.commit('fnSetData', this.sTitle),
                this.$store.commit('fnSetData1', this.sTitle1),
                this.$router.push('/sub');
            }
        }
    }
</script>