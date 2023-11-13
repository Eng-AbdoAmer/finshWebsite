<template>
    <div class="intro-slider">
        <swiper :options="swiperOptions">
            <swiper-slide class="swiper-slide" v-for="(banner, index) in sliderData" :key="index">
                <div class="intro-section overlay bg-cover" :style="{ backgroundImage: `url(${banner.bgImgSrc})` }">
                    <div class="container">
                        <div class="row row-cols-lg-1 row-cols-1">
                            <div class="col align-self-center">
                                <div class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
                                    <h2 class="title">{{ banner.heading }}</h2>
                                    <div class="desc">
                                        <p>{{ banner.text }}</p>
                                    </div>
                                    <n-link to="/about" class="btn btn-primary btn-hover-secondary">Get Started</n-link>
                                    <n-link to="/about" class="btn btn-outline-white btn-hover-primary">Learn More</n-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- pagination class -->
        <div class="home-slider-prev swiper-button-prev main-slider-nav">
            <i class="fal fa-angle-left"></i>
        </div>
        <div class="home-slider-next swiper-button-next main-slider-nav">
            <i class="fal fa-angle-right"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    speed: 1000,
                    loop: true,
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.home-slider-next',
                        prevEl: '.home-slider-prev',
                    },
                },

                sliderData: [
                    {
                        id: 1,
                        heading: "Designing awesome brands & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "/images/hero-image/hero-1.jpg"
                    },
                    {
                        id: 2,
                        heading: "Designing awesome brands & experiences",
                        text: "We are an agency located in New York. We think strategy, craft design, develop digital and create motion. To forward your brand and business.",
                        bgImgSrc: "/images/hero-image/hero-2.jpg"
                    }
                ]
            }
        },
    };
</script>