<template>
    <div class="section-padding-top section-padding-bottom-180">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-image-area">
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-3.jpg" alt="image">
                        </div>
                        <div class="about-image js-tilt">
                            <img src="/images/about/about-4.jpg" alt="image">
                        </div>
                        
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/about-shape-1.png" />
                    </div>
                </div>
                <div class="col-xl-5 col-lg-6 col-12" data-aos="fade-up">
                    <div class="about-content-area about-four">
                        <div class="section-title-two">
                            <span class="sub-title">Our solutions begin with brand research</span>
                            <h3 class="title">We’ve worked alongside plenty of brands & startups</h3>
                        </div>
                        <p>Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.</p>
                        <n-link to="/" class="btn btn-primary btn-hover-secondary mt-30">Get Started</n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation')
        },
    };
</script>