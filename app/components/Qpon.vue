<template>
    <Page>
        <ActionBar title="Q-pon " />

        <StackLayout>
            <BottomNavigation>
                <TabStrip>
                    <TabStripItem>
                        <Label text="Home"></Label>
                        <Image src="res://search"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Malls"></Label>
                        <Image src="res://browse"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="Coins"></Label>
                        <Image src="res://favorites"></Image>
                    </TabStripItem>
                    <TabStripItem>
                        <Label text="User"></Label>
                        <Image src="res://home"></Image>
                    </TabStripItem>
                </TabStrip>


                <TabContentItem>
                    <ListView for="qpon in qpons" @itemTap="onItemTap">
                        <v-template>
                            <StackLayout height="350">
                                <Image :src="qpon.image" height="300"
                                    stretch="aspectFill" />
                                <Label :text="qpon.title" class="h2" />
                            </StackLayout>
                        </v-template>
                    </ListView>
                </TabContentItem>


                <TabContentItem>
                    <StackLayout>
                        <ListView for="mall in malls" @itemTap="onMallQpons">
                            <v-template>
                                <FlexboxLayout flexDirection=" row">
                                    <Label :text="mall.mall" class="t-12" />
                                </FlexboxLayout>
                            </v-template>
                        </ListView>
                    </StackLayout>

                </TabContentItem>



                <TabContentItem>
                    <GridLayout>
                        <Label text="Search Page" class="h2 text-center">
                        </Label>
                    </GridLayout>
                </TabContentItem>

                <TabContentItem>
                    <GridLayout>
                        <v-template>
                            <FlexboxLayout flexDirection="row">
                                <Image
                                    src:"http://616pic.com/sucai/z7ri3e251.html" />

                                <Label text="User profile" class="t-12"
                                    style="width: 60%" />
                            </FlexboxLayout>
                        </v-template>


                        <ListView for="user operations" @itemTap="onItemTap"
                            style="height:300">
                            <v-template>
                                <FlexboxLayout flexDirection="row">

                                    <Label text="Login/Logoff" class="h2" />
                                    <Label text="My redeemed coupons"
                                        class="h2" />
                                </FlexboxLayout>
                            </v-template>
                        </ListView>

                    </GridLayout>
                </TabContentItem>
            </BottomNavigation>
        </StackLayout>
    </Page>
</template>

<script>
    import QponDetail from "./QponDetail";
    import Vue from "nativescript-vue";
    export default {
        methods: {
            onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
                console.log("Qpon tapped: " + args.item.title);
                this.$navigateTo(QponDetail, {
                    transition: {},
                    props: {
                        tappedQpon: args.item
                    }
                });
            },
            onMallQpons: function(args) {
                console.log("Mall with index: " + args.index + " tapped");
            }
        },
        async mounted() {
            var response = await fetch(global.baseUrl + "/qpon/json");
            if (response.ok) {
                this.qpons = await response.json();
                console.log(JSON.stringify(this.qpons));
            } else {
                console.log(response.statusText);
            }
        },

        data() {
            return {
                qpons: [],
                malls: [{
                        mall: "IFC Mall",
                        latitude: 22.2849,
                        longitude: 114.158917
                    },
                    {
                        mall: "Pacific Place",
                        latitude: 22.2774985,
                        longitude: 114.1663225
                    },
                    {
                        mall: "Times Square",
                        latitude: 22.2782079,
                        longitude: 114.1822994
                    },
                    {
                        mall: "Elements",
                        latitude: 22.3048708,
                        longitude: 114.1615219
                    },
                    {
                        mall: "Harbour City",
                        latitude: 22.2950689,
                        longitude: 114.1668661
                    },
                    {
                        mall: "Festival Walk",
                        latitude: 22.3372971,
                        longitude: 114.1745273
                    },
                    {
                        mall: "MegaBox",
                        latitude: 22.319857,
                        longitude: 114.208168
                    },
                    {
                        mall: "APM",
                        latitude: 22.3121738,
                        longitude: 114.22513219999996
                    },
                    {
                        mall: "Tsuen Wan Plaza ",
                        "latitude ": 22.370735,
                        " longitude ": 114.111309
                    },
                    {
                        "mall ": "New Town Plaza ",
                        "latitude ": 22.3814592,
                        "longitude ": 114.1889307
                    }
                ]
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }
</style>