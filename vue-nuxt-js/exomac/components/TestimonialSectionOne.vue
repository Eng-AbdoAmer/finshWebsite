<template>
    <div class="testimonial-section section-padding-t90 section-padding-bottom">
        <div class="container-fluid">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title fz-32">What our customers are saying about our services</h2>
                <p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p>
            </div>
            <!-- Section Title End -->

            <!--Testimonial Slider Start -->
            <div class="testimonial-slider" data-aos="fade-up">
                <swiper :options="swiperOption">
                    <div class="swiper-slide" v-for="(testimonial, index) in testimonialData" :key="index">
                        <TestimonialItem :testimonial="testimonial" />
                    </div>
                </swiper>
                <div class="swiper-pagination text-center"></div>
            </div>
            <!--Testimonial Slider End -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            TestimonialItem: () => import('@/components/TestimonialItem'),
        },

        data() {
            return {
                swiperOption: {
                    slidesPerView : 3,
                    centeredSlides: true,
                    loop: true,
                    speed: 1000,
                    spaceBetween : 50,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    },
                    breakpoints: {
                        1499:{
                            slidesPerView : 3
                        },

                        768:{
                            slidesPerView : 2
                        },
                        320:{
                            slidesPerView : 1
                        }
                    }
                },

                testimonialData: [
                    {
                        id: 1,
                        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
                        imgSrc: "/images/testimonial/author-1.png",
                        name: "Uzzal Hossain",
                        position: "Frontend Developer"
                    },
                    {
                        id: 2,
                        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
                        imgSrc: "/images/testimonial/author-2.png",
                        name: "Tasnim Akter",
                        position: "Marketing Manager"
                    },
                    {
                        id: 3,
                        text: "We are completely satisfied with the quality of service that we get. Workers were respectful, efficient, accommodating, cleaned up thoroughly.",
                        imgSrc: "/images/testimonial/author-3.png",
                        name: "Yeasin Hossain",
                        position: "Team Leader"
                    }
                ]
            }
        },
    };
</script>