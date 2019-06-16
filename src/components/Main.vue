<template>
    <v-app light :style="{height: screenHeight + 'px', overflowY: 'hidden'}">
        <v-toolbar app color="primary" fixed style="color: #FF5252;">
            <v-avatar @click.stop="drawer = !drawer">
                <img src="../assets/avatar.jpg" alt="Avatar">
            </v-avatar>
            <v-toolbar-title>遥远世界的梦</v-toolbar-title>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-content :class="{ 'o-main-content': isPC, 'v-main-content': !isPC }">
            <div class="header-content">
                <p class="display-2">你好啊</p>
                <p class="display-3">欢迎来到遥远世界的梦</p>
                <v-btn color="#1976D2cc" dark @click.stop="toWorld">前往梦月的世界</v-btn>
                <p class="headline">关于梦境主人</p>
                <v-icon color="primary">arrow_downward</v-icon>
            </div>
            <v-container grid-list-xl fluid>
                <v-layout column>
                    <v-flex>
                        <v-card hover color="#ffffff22">
                            <v-card-title class="display-1" style="color: #2196F3">
                                我是谁？
                            </v-card-title>
                            <v-card-text class="headline" style="color: #37474F">
                                二阶堂梦月，现某高校二年生，一个活在遥远世界的梦里的普通男生，喜欢编程，吉他。
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex>
                        <v-card hover color="#ffffff22">
                            <v-card-title class="display-1" style="color: #2196F3">
                                背景和头像
                            </v-card-title>
                            <v-card-text class="headline" style="color: #37474F">
                                背景和头像出自Favorite作品《五彩斑斓的世界/曙光》、《你朱眸里的五彩世界》。这名少女名为二阶堂真红，半透明的魔法师，是名很温柔的少女。
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex>
                        <v-card hover color="#ffffff22">
                            <v-card-title class="display-1" style="color: #2196F3">
                                为什么用这样的背景和头像，你是死宅么？
                            </v-card-title>
                            <v-card-text class="headline" style="color: #37474F">
                                死宅怎么了？！死宅拯（hui）救（mie）世界！强调一遍！不是因为是死宅才用这样的背景和头像！是因为这个人很重要！很重要！很重要！
                            </v-card-text>
                        </v-card>
                    </v-flex>
                    <v-flex>
                        <v-card hover color="#ffffff22">
                            <v-card-title class="display-1" style="color: #2196F3">
                                关于本博客
                            </v-card-title>
                            <v-card-text class="headline" style="color: #37474F">
                                该博客为二阶堂梦月的个人博客，你可以在这里看到一些博主的个人信息，博主的个人动态，以及一些编程技术的手记等。
                            </v-card-text>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
            <div class="footer">
                <div>
                    <img src="../assets/beian-icon.png" alt="icon">
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=21011202000324" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">辽公网安备 21011202000324号</p></a>
                </div>
            </div>
        </v-content>
    </v-app>
</template>

<script>
    import MusicPlayer from './MusicPlayer.vue'

    export default {
        name: "Main",
        components: {
            MusicPlayer: MusicPlayer
        },
        data: () => {
            return {
                screenHeight: 0,
                isPC: true,
                dialog: false
            }
        },
        mounted() {
            this.screenHeight = window.innerHeight;
            this.isPC = window.innerWidth >= 768;
            window.onresize = () => {
                this.isPC = window.innerWidth >= 768;
                this.screenHeight = window.innerHeight;
            }
        },
        methods: {
            toWorld(){
                this.$router.push({
                    path: '/world',
                    name: 'World'
                })
            }
        }
    }
</script>

<style scoped>
    .o-main-content{
        height: 100%;
        background-image: url("../assets/o-back.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: auto;
    }
    .v-main-content{
        height: 100%;
        background-image: url("../assets/v-back.jpg");
        background-size: cover;
        background-position:top center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: auto;
    }
    .footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #FFD54Faa;
        padding: 8px 0;
    }

    @keyframes show
    {
        from {
            color: #EF535000;
        }
        to {
            color: #EF5350cc;
        }
    }

    @-moz-keyframes show /* Firefox */
    {
        from {
            color: #EF535000;
        }
        to {
            color: #EF5350cc;
        }
    }

    @-webkit-keyframes show /* Safari 和 Chrome */
    {
        from {
            color: #EF535000;
        }
        to {
            color: #EF5350cc;
        }
    }

    @-o-keyframes show /* Opera */
    {
        from { color: #EF535000 }
        to { color: #EF5350cc }
    }
    .header-content{
        position: relative;
        padding: 36vh 2vw 4vh 2vw;
        text-align: center;
        color: #EF5350cc;
        animation: show 1.5s;
        -moz-animation: show 1.5s;	/* Firefox */
        -webkit-animation: show 1.5s;	/* Safari 和 Chrome */
        -o-animation: show 1.5s;
    }
    .display-3{
        padding-top: 8vh;
    }
    .headline{
        padding-top: 4vh;
    }
</style>