<template>
    <v-container>
        <v-content>
            <div class="text-center display-3 my-4">Sub</div>
            <v-divider></v-divider>
            <div class="text-center display-3 my-1">{{sTitle}}</div>
            <div class="text-center display-1 my-4">{{sTitle1}}</div>
            <div class="text-center">
                <v-btn fab large class="mt-5" color="teal" dark to="/main">
                    <v-icon>mdi-replay</v-icon>
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
        }
    }
</script>