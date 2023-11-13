<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="We work with bold brands that we believe in" backgroundUrl= "/images/bg/breadcrumb-bg-two.jpg" />

        <!-- Start Work Details -->
        <div class="section-padding">
            <div class="container">
                <div class="row">
                    <!-- Portfolio Left -->
                    <div class="col-lg-4 col-md-6 col-12">
                        <div class="work-left work-details" data-aos="fade-up">
                            <div class="portfolio-main-info">
                                <h2 class="title">About the <br> project</h2>
                                <!-- Start Details List -->
                                <div class="work-details-list mt-40">
                                    <div class="details-list">
                                        <label>Date</label>
                                        <span>28 Sep 2007</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Client</label>
                                        <span>HighGrove Partners</span>
                                    </div>

                                    <div class="details-list">
                                        <label>Categories</label>
                                        <span>
                                            <n-link to="">Digital</n-link>
                                        </span>
                                    </div>

                                    <div class="details-list">
                                        <label>Awards</label>
                                        <span>2015 Digital World Awards 2016 Finale Awards</span>
                                    </div>
                                </div>
                                <!-- End Details List -->
                                <!-- Start Work Share -->
                                <div class="work-share">
                                    <h6 class="heading heading-h6">SHARE</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Work Right -->
                    <div class="col-lg-7 col-md-6 offset-lg-1 col-12">
                        <div class="work-left work-details mt-30">
                            <div class="work-main-info">
                                <div class="work-content">
                                    <h6 class="title" data-aos="fade-up">ABOUT THE PROJECT</h6>

                                    <div class="desc mt-40">
                                        <div class="content mb-20" data-aos="fade-up">
                                            <p>Digital marketing encompasses all marketing efforts that use an electronic device or theinternet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.</p>
                                        </div>
                                        <div class="content mb-20" data-aos="fade-up">
                                            <p>It is. In fact, “constant” internet usage among adults increased by 5% in just the last three years, according to Pew Research. And although we say it a lot, the way people shop and buy really has changed along with it — meaning offline marketing isn’t as effective as it used to be.</p>
                                        </div>
                                        <div class="content mb-40" data-aos="fade-up">
                                            <p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. (Source: blog.hubspot.com)</p>
                                        </div>

                                        <div class="work-btn">
                                            <n-link to="/contact-us" class="btn btn-primary btn-hover-secondary">Go to link</n-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Start Thumbnail -->
                <div class="row">
                    <div class="col-lg-12">
                        <div class="custom-column-thumbnail mt-60" data-aos="fade-up">
                            <img class="w-100" src="/images/project/work-details-1.jpg" alt="Agency">
                        </div>
                    </div>
                </div>

                <!-- Start Digital Marketion Area -->
                <div class="row mt-60">
                    <div class="col-lg-4 col-md-12 col-12">
                        <div class="digital-marketing" data-aos="fade-up">
                            <h3 class="heading heading-h3">Digital Marketing.</h3>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-12 col-12 offset-lg-1">
                        <div class="digital-marketing" data-aos="fade-up">
                            <div class="inner">
                                <p>Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet. A seasoned inbound marketer might say inbound marketing and digital marketing are virtually the same thing, but there are some minor differences. And conversations with marketers and business owners in the U.S., U.K., Asia, Australia, and New Zealand, I've learned a lot about how those small differences are being observed across the world.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Digital Marketion Area -->

                <!-- Start Gallery Area -->
                <div class="custom-layout-gallery mt-60">
                    <div class="row mtn-30">
                        <div class="col-lg-6 col-md-6 col-12 mt-30">
                            <div class="thumbnail" data-aos="fade-up">
                                <img class="w-100" src="/images/project/work-details-2.jpg" alt="Agency">
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 mt-30">
                            <div class="thumbnail" data-aos="fade-up">
                                <img class="w-100" src="/images/project/work-details-3.jpg" alt="Agency">
                            </div>
                        </div>

                        <div class="col-lg-12 mt-30">
                            <div class="thumbnail" data-aos="fade-up">
                                <img class="w-100" src="/images/project/work-details-4.jpg" alt="Agency">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Gallery Area -->
            </div>
        </div>
        <!-- Start Work Details -->

        <TheFooter />

    </div>
</template>

<script>
    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Project Details',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Project Details'
            }
        },
    };
</script>


