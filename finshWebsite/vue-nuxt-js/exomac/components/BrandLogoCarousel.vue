<template>
    <div class="brand-section section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-wrapper">
                        <div class="brand-list">
                            <swiper :options="swiperOption">
                                <div class="swiper-slide brand" v-for="(brand, index) in brandData" :key="index">
                                    <n-link to="/">
                                        <img :src="brand.logo" alt="brand.alt">
                                    </n-link>
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import brandData from '~/data/brand-logo.json'

    export default {
        data() {
            return {
                brandData,

                swiperOption: {
                    speed: 1000,
                    loop: true,
                    spaceBetween: 30,
                    slidesPerView: 6,
                    autoplay: true,
                    breakpoints: {
                        1200: {
                            slidesPerView: 6
                        },
                        992: {
                            slidesPerView: 5
                        },
                        768: {
                            slidesPerView: 4
                        },
                        576: {
                            slidesPerView: 3
                        },
                        320: {
                            slidesPerView: 2
                        }
                    }
                }
            }
        },
    };
</script>