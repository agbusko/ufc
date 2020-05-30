<template>
    <header class="wrapper-header">
        <section class="desktop-header">
            <nav class="menu" v-for="(item, index) in basisNav[0]">
                <div class="menu__item">
                    <a href="#">
                        {{item.name}}
                    </a>
                </div>
            </nav>
            <nav class="menu menu_show">
                <div class="menu__logo">
                    <img :src="basisLogo.image" :alt="basisLogo.name">
                </div>
            </nav>
            <nav class="menu" v-for="(item, index) in basisNav[1]">
                <div class="menu__item">
                    <a href="#">
                        {{item.name}}
                    </a>
                </div>
            </nav>

            <nav class="menu menu_show-toggle">
                <div class="menu__toggle">
                    <div class="toggle-mobile">
                        <a href="#" class="toggle-mobile__button"><span></span></a>
                    </div>
                </div>
            </nav>
        </section>

        <section class="mobile-header">
            <div class="menu menu_location-01">
                <div class="menu__item menu__item_style-01 menu__item_font-01">
                    <a href="#">Item</a>
                </div>
                <div class="menu__item menu__item_style-01 menu__item_font-01">
                    <a href="#">Item</a>
                </div>
                <div class="menu__item menu__item_style-01 menu__item_font-01">
                    <a href="#">Item</a>
                </div>
                <div class="menu__item menu__item_style-01 menu__item_font-01">
                    <a href="#">Item</a>
                </div>
                <div class="menu__item menu__item_style-01 menu__item_font-01">
                    <a href="#">Item</a>
                </div>
                <div class="menu__item menu__item_style-01 menu__item_font-01">
                    <a href="#">Item</a>
                </div>
            </div>
        </section>
    </header>
</template>

<script>
    export default {
        name: "Header",

        data() {
            return {
                basisLogo: {
                    name: 'art-wedding',
                    link: '',
                    image: '/assets/logo_black.png'
                },
                basisNav: [ [
                    {
                        name: 'Раздел',
                        link: ''
                    },
                    {
                        name: 'Раздел',
                        link: ''
                    },
                    {
                        name: 'Раздел',
                        link: ''
                    }
                ], [
                    {
                        name: 'Раздел',
                        link: ''
                    },
                    {
                        name: 'Раздел',
                        link: ''
                    },
                    {
                        name: 'Раздел',
                        link: ''
                    }
                    ]
                ]
            }
        }
    }
</script>

<style lang="less" scoped>

</style>