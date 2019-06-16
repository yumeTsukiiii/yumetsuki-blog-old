<template>
    <v-container grid-list-xl fluid>
        <v-layout column>
            <v-flex>
                <v-card hover color="#ffffff22">
                    <v-card-title class="display-1" style="color: #2196F3">
                        一个不出名的up主
                    </v-card-title>
                    <v-card-text class="headline" style="color: #37474F">
                        up名称：幻の梦月
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card hover color="#ffffff22">
                    <v-card-title class="display-1" style="color: #2196F3">
                        就算不出名，偶尔也是会发些视频的
                    </v-card-title>
                    <v-card-text class="headline" style="color: #37474F">
                        主要视频类型：吉他指弹(偶尔会水点别的)
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card hover color="#ffffff22">
                    <v-card-title class="display-1" style="color: #2196F3">
                        请多多支持up主！
                    </v-card-title>
                    <v-card-text class="headline" style="color: #37474F">
                        up联系方式：QQ 540160575
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card hover color="#ffffff22">
                    <v-card-title class="display-1" style="color: #2196F3">
                        不去看看up的主页up就要不开心了！(嘟嘴)
                    </v-card-title>
                    <v-container>
                        <v-layout column align-center>
                            <img src="../../assets/mine.png"
                                 alt="icon"
                                 style="max-width: 80%;"/>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Bilibili"
    }
</script>

<style scoped>

</style>