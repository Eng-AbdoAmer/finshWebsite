<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 m-auto">
                    <!-- Section Title Start -->
                    <div class="about-content-full text-center mb-50" data-aos="fade-up">
                        <h2 class="title">Creative agency focused on vision, product and people</h2>
                        <p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences.</p>
                        <n-link to="/about" class="link"> <mark>Read More</mark> </n-link>
                    </div>
                    <!-- Section Title End -->
                </div>

                <div class="col-12">
                    <div class="video-popup-area video-three">
                        <div class="skill-video">
                            <client-only>
                                <silent-box :image="videos[0]">
                                    <template v-slot:silentbox-item>
                                        <img class="image" src="/images/video/about-video.jpg" alt="image" />
                                        <div class="icon video-popup">
                                            <i class="fas fa-play"></i>
                                        </div>
                                    </template>
                                </silent-box>
                            </client-only>
                        </div>
                        <!-- Video Popup End -->

                        <!-- Animation Shape Start -->
                        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/video-shape-1.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation'),
        },
        
        data() {
            return {
                videos: [
                    { src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY" }
                ]
            }
        },
    };
</script>