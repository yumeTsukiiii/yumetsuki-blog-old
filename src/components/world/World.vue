<template>
    <v-app light :style="{height: screenHeight + 'px', overflowY: 'hidden'}">
        <v-navigation-drawer app v-model="drawer" style="background-color: #ffffffcc">
            <div class="drawer-header">
                <v-avatar>
                    <img src="../../assets/avatar.jpg" alt="Avatar">
                </v-avatar>
                <p>二阶堂梦月</p>
            </div>
            <v-list dense class="pt-0" style="background-color: #ffffff00">
                <v-list-tile
                        style="background-color: #ffffff00"
                        v-for="(item,index) in items"
                        :key="item.title"
                        @click="trip(index)"
                >
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content >
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>

                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="primary" fixed style="color: #FF5252;">
            <v-avatar @click.stop="drawer = !drawer">
                <img src="../../assets/avatar.jpg" alt="Avatar">
            </v-avatar>
            <v-toolbar-title>遥远世界的梦</v-toolbar-title>
            <v-spacer></v-spacer>
            <MusicPlayer></MusicPlayer>
        </v-toolbar>
        <v-content :class="{ 'o-main-content': isPC, 'v-main-content': !isPC }">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import MusicPlayer from '../MusicPlayer.vue'

    export default {
        name: "World",
        components: {
            MusicPlayer: MusicPlayer,
        },
        data: () => {
            return {
                index: 3,
                screenHeight: 0,
                isPC: true,
                dialog: false,
                items: [
                    { title: '编程手记', icon: 'book' },
                    { title: '梦月的github信息', icon: 'work' },
                    { title: '梦月的b站信息', icon: 'radio' },
                    { title: '最新动态', icon: 'assignment' },
                    { title: '返回主页', icon: 'home' }
                ],
                drawer: false
            }
        },
        mounted() {
            this.screenHeight = window.innerHeight;
            this.isPC = window.innerWidth >= 768;
            this.drawer = this.isPC;
            window.onresize = () => {
                this.isPC = window.innerWidth >= 768;
                this.screenHeight = window.innerHeight;
            };
            this.$router.push("/news");
        },
        methods: {
            trip(index){
                if (!this.isPC){
                    this.drawer = false;
                }
                switch (index) {
                    case 0:
                        this.$router.push("/programming");
                        break;
                    case 1:
                        this.$router.push("/github");
                        break;
                    case 2:
                        this.$router.push("/bilibili");
                        break;
                    case 3:
                        this.$router.push("/news");
                        break;
                    case 4:
                        this.$router.replace("/");
                        break;
                }
            }
        }
    }
</script>

<style scoped>
    .o-main-content{
        height: 100%;
        background-image: url("../../assets/o-back.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: auto;
    }
    .v-main-content{
        height: 100%;
        background-image: url("../../assets/v-back.jpg");
        background-size: cover;
        background-position:top center;
        background-repeat: no-repeat;
        background-attachment: fixed;
        overflow-y: auto;
    }
    .drawer-header{
        height: 24vh;
        background-color: #EF5350;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
    }
    .drawer-header p{
        margin-top: 16px;
        text-align: center;
    }
</style>