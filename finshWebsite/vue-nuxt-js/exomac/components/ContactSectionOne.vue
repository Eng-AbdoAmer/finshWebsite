<template>
    <div class="section-padding contact-section">
        <div class="container">
            <div class="row row-cols-lg-2 row-cols-1 align-items-center">
                <div class="col">
                    <!-- Contact Information -->
                    <div class="contact-Information mr-xl-7">
                        <!-- Section Title Two Start -->
                        <div class="section-title-two">
                            <span class="sub-title">Innovative & cutting-edge technology</span>
                            <h3 class="title">We use latest technologies that are proven and practical</h3>
                        </div>
                        <!-- Section Title Two End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info ct-info-two" data-vivus-hover>
                            <div class="icon">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">Our Locations</h4>
                                <span class="info-text"> 110 W 34th St, NYC. / 67 Madison Avenue.</span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info ct-info-two" data-vivus-hover>
                            <div class="icon">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-message-txt.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title">Give Us A Call</h4>
                                <span class="info-text"> 0123456789 / 0123456789</span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->

                        <!-- Contact Info Item Start -->
                        <div class="contact-info ct-info-two" data-vivus-hover>
                            <div class="icon">
                                <img class="svgInject" src="/images/svg/linea/linea-basic-mail-open-text.svg" alt="">
                            </div>
                            <div class="info">
                                <h4 class="title"> Help Desk</h4>
                                <span class="info-text">
                                    <a href="mailto:demo@example.com">demo@example.com</a>,
                                    <a href="mailto:demo@example.com">demo@example.com</a>
                                </span>
                            </div>
                        </div>
                        <!-- Contact Info Item End -->
                    </div>
                    <!-- Contact Information -->
                </div>

                <div class="col">
                    <!-- Contact Form Start -->
                    <div class="contact-form-area box-shadow">
                        <!-- Section Title Start -->
                        <div class="section-title text-center mb-7">
                            <h2 class="title fz-28">Let’s talk about your project</h2>
                            <p class="sub-title">We have made it easy for clients to reach us and get their solutions weaved</p>
                        </div>
                        <!-- Section Title End -->
                        <form >
                            <div class="row mb-n4">
                                <div class="col-md-12 col-12 mb-4">
                                    <input type="text" placeholder="Your Name *" name="name">
                                </div>
                                <div class="col-md-12 col-12 mb-4">
                                    <input type="email" placeholder="Email *" name="email">
                                </div>
                                <div class="col-12 mb-30">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </div>
                                <div class="col-12 text-center mb-4">
                                    <button class="btn btn-primary btn-hover-secondary">Get a free consultation</button>
                                </div>
                            </div>
                        </form>
                        
                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/contact-shape.png" />
                    </div>
                    <!-- Contact Form End -->
                </div>
            </div>
        </div>

        <!-- Animation Shape Start -->
        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/contact-shape.png" />

    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
    };
</script>