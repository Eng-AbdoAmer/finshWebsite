<template>
    <div class="section-padding-top success-section-padding-bottom-180">
        <div class="container">
            <div class="row">
                <!-- Success Image Start -->
                <div class="col-lg-6">
                    <div class="about-image-area right-0 skill-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/skill/skill-1.jpg" alt="image">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/skill/skill-2.jpg" alt="image">
                        </div>
                        <!-- Animation Shape Start -->
                        
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <!-- Success Image End -->

                <!-- Success Content Start -->
                <div class="offset-lg-1 col-lg-5" data-aos="fade-up">
                    <div class="success-content">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Your success is our success</span>
                            <h3 class="title">Web design, marketing & SEO solutions that get results</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <div class="progress-bar--one">
                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts">
                                <h6 class="heading ">UX Design</h6>
                                <div class="progress">
                                    <div class="progress-bar gradient-1" role="progressbar" style="width: 81%; visibility: visible;"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">81%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts ">
                                <h6 class="heading ">Marketing</h6>
                                <div class="progress">
                                    <div class="progress-bar gradient-2" role="progressbar" style="width: 72%; visibility: visible;"    aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">72%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts ">
                                <h6 class="heading ">Web Design</h6>
                                <div class="progress">
                                    <div class="progress-bar gradient-3" role="progressbar" style="width: 80%; visibility: visible;"    aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">80%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->

                            <!-- Start Single Progress Charts -->
                            <div class="progress-charts ">
                                <h6 class="heading ">Development</h6>
                                <div class="progress">
                                    <div class="progress-bar gradient-4" role="progressbar" style="width: 57%; visibility: visible;"    aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        <span class="percent-label">57%</span>
                                    </div>
                                </div>
                            </div>
                            <!-- End Single Progress Charts -->
                        </div>
                    </div>
                </div>
                <!-- Success Content End -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation') ,
        },
    };
</script>

