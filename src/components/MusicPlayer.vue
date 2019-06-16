<template>
    <div class="wrap">
        <div style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">忍 - 紅い瞳に映るセカイ</div>
        <v-btn flat icon color="white" @click="changePlay">
            <v-icon>{{icon}}</v-icon>
        </v-btn>
        <audio id="audio" autoplay loop>
            <source src="../assets/忍 - 紅い瞳に映るセカイ.mp3" type="audio/mpeg"/>
        </audio>
    </div>
</template>

<script>
    export default {
        name: "MusicPlayer",
        data: () => {
            return {
                isPlay: false,
                icon: 'play_arrow'
            }
        },
        mounted(){
            let audio = document.getElementById("audio");
            audio.onplaying = () => {
                this.isPlay = true;
                this.icon = this.isPlay? 'pause' : 'play_arrow';
            };
            audio.onpause = () => {
                this.isPlay = false;
                this.icon = this.isPlay? 'pause' : 'play_arrow';
            }
        },
        methods: {
            changePlay(){
                let audio = document.getElementById("audio");
                if (this.isPlay){
                    audio.pause();
                } else {
                    audio.play();
                }
                this.isPlay = !this.isPlay;
                this.icon = this.isPlay? 'pause' : 'play_arrow';
            }
        }
    }
</script>

<style scoped>
    .wrap{
        background-color: #ffffff00;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media all and (max-width: 436px) {
        .wrap div{
            display: none;
        }
    }

</style>