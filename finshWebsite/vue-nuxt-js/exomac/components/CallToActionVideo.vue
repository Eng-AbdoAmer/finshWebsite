<template>
    <div class="video-section section-padding" :style="{backgroundImage: `url('/images/bg/video-bg.jpg')`}">
        <div class="container text-center">
            <!-- Section Title Start -->
            <div class="section-title color-light text-center" data-aos="fade-up">
                <h2 class="title">A full-service creative agency since 2007</h2>
            </div>
            <!-- Section Title End -->
            <client-only>
                <silent-box :image="videos[0]">
                    <template v-slot:silentbox-item>
                        <div class="play-btn icon video-popup">
                            <i class="fas fa-play"></i>
                        </div>
                    </template>
                </silent-box>
            </client-only>
        </div>

        <!-- Animation Shape Start -->
        <ShapeWithAnimation addClassName="shape-1" data-depth="1" imgSrc="/images/shape-animation/newsletter-shape.png" />
        <!-- Animation Shape End -->
    </div>
</template>

<script>
    export default {
        components: {
            ShapeWithAnimation: () => import('@/components/ShapeWithAnimation')
        },

        data() {
            return {
                videos: [
                    {
                        src: "https://www.youtube.com/watch?v=eS9Qm4AOOBY"
                    }
                ]
            };
        }
    };
</script>