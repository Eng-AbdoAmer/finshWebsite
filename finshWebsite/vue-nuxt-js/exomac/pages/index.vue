<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <HeroSliderOne />

        <AboutOne />

        <FeatureOne :style="{backgroundColor: '#f8faff'}" />

        <SuccessStory />

        <PortfolioGallery />

        <BlogSectionOne />

        <Newsletter />

        <CallToActionOne />

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            HeroSliderOne: () => import('@/components/HeroSliderOne'),
            AboutOne: () => import('@/components/AboutOne'),
            FeatureOne: () => import('@/components/FeatureOne'),
            SuccessStory: () => import('@/components/SuccessStory'),
            PortfolioGallery: () => import('@/components/PortfolioGallery'),
            BlogSectionOne: () => import('@/components/BlogSectionOne'),
            Newsletter: () => import('@/components/Newsletter'),
            CallToActionOne: () => import('@/components/CallToActionOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        head() {
            return {
                title: 'Corporate Business'
            }
        },
    };
</script>


