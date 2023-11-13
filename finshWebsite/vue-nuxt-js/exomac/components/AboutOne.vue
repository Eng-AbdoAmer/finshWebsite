<template>
    <div class="section-padding-t90 section-padding-bottom-200">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title">We are a full-service creative agency</h2>
                <p class="sub-title">Our team of designers, developers and creatives are perfectionists who love what they do and love</p>
            </div>
            
            <!-- Section Title End -->

            <!-- About Wrapper Start -->
            <div class="row">
                <!-- About Image Area Start -->
                <div class="col-xl-7 col-lg-6" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/about/agency_about_1.jpg" alt="images">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/about/agency_about_2.jpg" alt="images">
                        </div>

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" dataDepth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                        <!-- Animation Shape End -->
                    </div>
                </div>
                <!-- About Image Area Start -->

                <!-- About Start -->
                <div class="col-xl-5 col-lg-6" data-aos="fade-up">
                    <div class="about-content-area about-one">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Every day brings new challenges</span>
                            <h3 class="title">Creative agency focused on vision, product and people</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <p>We’re boldly individual, always original and refreshingly easy-going. Our vision, passion and ideas are matched with focus, expertise and flair.</p>
                        <n-link to="/about" class="btn btn-primary btn-hover-secondary mt-4">About Us</n-link>
                    </div>
                </div>
                <!-- About Start -->
            </div>
            <!-- About Wrapper End -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>