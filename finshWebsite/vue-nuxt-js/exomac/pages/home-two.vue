<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <HeroFixedBanner />

        <AboutTwo />

        <FunFcat />

        <FeatureOne :style="{backgroundColor: '#f8faff'}" />

        <SkillWithVideo />

        <PortfolioGalleryTwo :style="{backgroundColor: '#f8faff'}" />

        <TestimonialSectionOne />

        <BlogSectionOne :style="{backgroundColor: '#f8faff'}" />

        <ContactSectionOne />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroFixedBanner: () => import('@/components/HeroFixedBanner'),
            AboutTwo: () => import('@/components/AboutTwo'),
            FunFcat: () => import('@/components/FunFcat'),
            FeatureOne: () => import('@/components/FeatureOne'),
            SkillWithVideo: () => import('@/components/SkillWithVideo'),
            PortfolioGalleryTwo: () => import('@/components/PortfolioGalleryTwo'),
            TestimonialSectionOne: () => import('@/components/TestimonialSectionOne'),
            BlogSectionOne: () => import('@/components/BlogSectionOne'),
            ContactSectionOne: () => import('@/components/ContactSectionOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        head() {
            return {
                title: 'Home-2'
            }
        },
    };
</script>


