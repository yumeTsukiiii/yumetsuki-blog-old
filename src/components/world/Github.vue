<template>
    <v-container grid-list-xl>
        <v-layout column>
            <v-flex>
                <v-card hover color="#ffffff22">
                    <v-card-title class="display-1" style="color: #2196F3">
                        一个默默无闻的编程爱好者
                    </v-card-title>
                    <v-card-text class="headline" style="color: #37474F">
                        Github-Name：yumetsukiii
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card color="#ffffff22">
                    <v-toolbar dark color="#EF5350">
                        <v-toolbar-title>Repository信息</v-toolbar-title>
                    </v-toolbar>
                    <v-list style="background-color: #ffffff55" v-if="repo.length > 0">
                        <v-list-tile
                                v-for="item in repo"
                                :key="item.title"
                                @click="">

                            <v-list-tile-content>
                                <v-list-tile-title v-text="item.title"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action>
                                <v-icon color="#42A5F5">info</v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list>
                    <v-layout align-center column v-if="repo.length === 0">
                        <p class="headline" style="margin-top: 16px">暂无信息</p>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "Github",
        data: () => {
            return {
                repo: [

                ]
            }
        }
    }
</script>

<style scoped>

</style>