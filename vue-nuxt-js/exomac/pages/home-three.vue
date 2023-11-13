<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <HeroSliderTwo />

        <AboutThree />

        <FunFcat :style="{backgroundColor: '#f8faff'}" />

        <FeatureOne addClassName="box-border" />

        <FaqOne />

        <PortfolioGalleryTwo />

        <TeamOne :style="{backgroundColor: '#f8faff'}" />

        <TestimonialSectionOne />

        <CallToActionTwo />

        <BlogSectionOne />

        <CallToActionOne :style="{backgroundColor: '#f8faff'}" />

        <BrandLogoCarousel />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroSliderTwo: () => import('@/components/HeroSliderTwo'),
            AboutThree: () => import('@/components/AboutThree'),
            FunFcat: () => import('@/components/FunFcat'),
            FeatureOne: () => import('@/components/FeatureOne'),
            FaqOne: () => import('@/components/FaqOne'),
            PortfolioGalleryTwo: () => import('@/components/PortfolioGalleryTwo'),
            TeamOne: () => import('@/components/TeamOne'),
            TestimonialSectionOne: () => import('@/components/TestimonialSectionOne'),
            CallToActionTwo: () => import('@/components/CallToActionTwo'),
            BlogSectionOne: () => import('@/components/BlogSectionOne'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            BrandLogoCarousel: () => import('@/components/BrandLogoCarousel'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        head() {
            return {
                title: 'Home-3'
            }
        },
    };
</script>


