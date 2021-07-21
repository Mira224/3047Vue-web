<template>
    <Page>
        <StackLayout>
            <Image :src="tappedQpon.image" height="300"
                stretch="aspectFill" />
            <ScrollView>
                <StackLayout class="m-10">
                    <Label class="h1" :text="tappedQpon.restaurant" />
                    <Label class="h2" :text="tappedQpon.title" />
                    <Label class="body" :text="tappedQpon.detail" />

                    <Label class="h3 m-y-20 pull-left"
                        :text="'Coin: $' + tappedQpon.coins" />
                    <Label class="h3 m-y-20 pull-left"
                        :text="'Mall: ' + tappedQpon.mall" />
                    <Label class="h3 m-y-20 pull-left"
                        :text="'Expiry Date: ' + tappedQpon.expiryDate" />


                    <Button class="h2 -primary -rounded-lg" text="Redeem"
                        @tap="onButtonTapRedeem" />
                    <Button class="h2 -primary -rounded-lg" text="Address"
                        @tap="onAddressTap" />
                </StackLayout>
            </ScrollView>
        </StackLayout>
    </Page>
</template>

<script>
    import Address from "./Address";
    import Vue from "nativescript-vue";
    export default {
        props: ["tappedQpon"],
        methods: {
            onButtonTap() {
                console.log("Coupon was pressed");
                this.tappedQpon.quantity = parseInt(this.textFieldValue) || 0;
                this.$navigateBack();
            },
            onAddressTap: function(args) {
                console.log("Coupon with index: " + args.index +
                    " tapped");
                console.log("Coupon address tapped: " + args.item.mall);
                this.$navigateTo(Address, {
                    transition: {},
                    props: {
                        tappedQponAddress: args.item.mall
                    }
                });
            },
            onButtonTapRedeem: async function() {
                var result = await confirm({
                    title: "Are you sure? ",
                    message: "To redeem this coupon?",
                    okButtonText: "Yes",
                    cancelButtonText: "No"
                });
                if (result) {
                    var response = await fetch(global.baseUrl +
                        "/user/redeemed", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(this.redeem)
                        });
                    if (response.ok) {
                        var data = await response.json();
                        this.figures = data.json;
                    } else {
                        console.log(response.status);
                    }
                }
            }
        },
        data() {
            return {};
        }
    };
</script>

<style>
</style>