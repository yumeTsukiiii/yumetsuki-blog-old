<template>
    <v-container>
        <v-card color="#ffffff22">
            <v-toolbar dark color="#EF5350">
                <v-toolbar-title>最新动态</v-toolbar-title>
            </v-toolbar>
            <v-list style="background-color: #ffffff55">
                <v-list-tile
                        v-for="item in news"
                        :key="item.title"
                        @click="">

                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>

                    <v-list-tile-action>
                        <v-chip color="#42A5F5" text-color="white">{{item.time}}</v-chip>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "News",
        data: () => {
            return {
                news: [
                    { "title": "更新了动态", "time": "2019-2-26" },
                    { "title": "继续摸鱼", "time": "2019-2-26" },
                    { "title": "开始摸鱼", "time": "2019-2-26" },
                ]
            }
        }
    }
</script>

<style scoped>

</style>