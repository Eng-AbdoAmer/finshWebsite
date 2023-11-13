<template>
    <div class="section-padding-t110-b120 newsletter-section bg-cover" data-overlay="0.7" :style="{ backgroundImage: `url('/images/bg/newsletter.jpg')` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-12">
                    <div class="newsletter-content">
                        <SectionTitle title="Let’s find out how to work together" sub-title="Ready to start your project? The contact information collected through this form will only be used to send a response to your inquiry." add-class-name="color-light" />

                        <!-- Newsletter Form Start -->
                        <div class="newsletter-form">
                            <form>
                                <input type="email" placeholder="Ente your email" name="mail">
                                <button class="btn btn-primary btn-hover-secondary">Subscribe</button>
                            </form>
                        </div>
                        <!-- Newsletter Form End -->
                    </div>
                </div>
            </div>
        </div>

        <ShapeWithAnimation add-class-name="shape-1" data-depth="1" img-src="/images/shape-animation/newsletter-shape.png" />
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
            ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
        },
    };
</script>