<template>
    <div class="section-padding-t90-b100">
        <div class="container">
            <!-- Section Title Start -->
            <SectionTitle title="We create a unique action plan for brands" sub-title="Get your company heading in the right direction with our digital marketing strategist" add-class-name="mb-60" />
            <!-- Section Title End -->

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" data-aos="fade-up" v-for="(feature, index) in features" :key="index">
                    <div class="icon-box text-center" :class="addClassName">
                        <div class="icon">
                            <img class="svgInject" :src="feature.iconSrc" :alt="feature.title">
                        </div>
                        <div class="content">
                            <h3 class="title">{{ feature.title }}</h3>
                            <div class="desc">
                                <p>{{ feature.text }}</p>
                            </div>
                            <n-link to="/about" class="link">Learn More</n-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["addClassName"],

        components: {
            SectionTitle: () => import("@/components/SectionTitle"),
        },

        data() {
            return {
                features: [
                    {
                        id: 1,
                        title: "Branding",
                        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
                        iconSrc: "/images/svg/linea/linea-basic-target.svg"
                    },
                    {
                        id: 2,
                        title: "UX Design",
                        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
                        iconSrc: "/images/svg/linea/linea-basic-picture-multiple.svg"
                    },
                    {
                        id: 3,
                        title: "Strategy",
                        text: "First impressions count! Make sure your brand works for you. We offer digital marketing.",
                        iconSrc: "/images/svg/linea/linea-basic-picture.svg"
                    }
                ]
            }
        },
    };
</script>