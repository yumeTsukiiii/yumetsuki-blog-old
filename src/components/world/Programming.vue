<template>
    <v-container>
        <v-card color="#ffffff22">
            <v-toolbar dark color="#EF5350">
                <v-toolbar-title>历史手记</v-toolbar-title>
            </v-toolbar>
            <v-list style="background-color: #ffffff55" v-if="records.length > 0">
                <v-list-tile
                        v-for="item in records"
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
            <v-layout align-center column v-if="records.length === 0">
                <p class="headline" style="margin-top: 16px">暂无记录</p>
            </v-layout>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Programming",
        data: () => {
            return {
                records: [

                ]
            }
        }
    }
</script>

<style scoped>

</style>