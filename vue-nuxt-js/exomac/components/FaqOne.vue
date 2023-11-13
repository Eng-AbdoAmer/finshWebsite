<template>
    <div class="faq-section section-padding-top" :style="{backgroundColor: '#f8faff'}">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1">
                <!-- Faq Content Start -->
                <div class="col mb-30">
                    <div class="faq-content">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Frequently asked questions</span>
                            <h3 class="title">You’ve got questions and <br> we’ve got answers</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <AccordionStyleOne />
                    </div>
                </div>
                <!-- Faq Content End -->

                <div class="col pl-xl-12">
                    <div class="about-image-area faq-image-area">
                        <div class="about-image right-n50 js-tilt">
                            <img src="/images/faq/faq-2.jpg" alt="image">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/faq/faq-1.jpg" alt="image">
                        </div>
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="4" imgSrc="/images/shape-animation/video-shape-1.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            AccordionStyleOne: () => import('@/components/AccordionStyleOne'),
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>