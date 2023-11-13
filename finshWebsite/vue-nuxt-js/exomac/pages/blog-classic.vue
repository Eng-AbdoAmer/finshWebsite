<template>
    <div class="main-container">

        <TheHeader />

        <OffCanvasMobileMenu />

        <SearchPopup />

        <BreadcrumbOne :items="items" title="Find all our latest news, insights, and events" backgroundUrl= "/images/bg/breadcrumb-bg-four.jpg" />

        <!-- Blog Section Start -->
        <div class="section-padding fix">
            <div class="container">
                <div class="row  mtn-50">
                    <div class="col-lg-8 col-12 order-lg-1 mt-50">
                        <div class="row row-cols-1 no-gutters">
                            <div class="blog-3 col" data-aos="fade-up" v-for="(blog, index) in blogData.slice(0, 3)" :key="index">
                                <div class="thumbnail">
                                    <n-link to="/blog-details" class="image">
                                        <img :src="blog.bigImgSrc" :alt="blog.title">
                                    </n-link>
                                </div>
                                <div class="info">
                                    <ul class="meta">
                                        <li>
                                            <i class="fal fa-pencil-alt"></i>
                                            Written by Admin, 10 Oct 2020
                                        </li>
                                        <li>
                                            <i class="fas fa-tags"></i>
                                            Marketing, UX Design
                                        </li>
                                        <li>
                                            <i class="fas fa-comments"></i>
                                            {{ blog.comment }} Comments
                                        </li>
                                    </ul>
                                    <h3 class="title">
                                        <n-link to="/blog-details">
                                            {{ blog.title }}
                                        </n-link>
                                    </h3>
                                    <div class="desc mb-30">
                                        <p>We've always known the power of digital, and we've mastered the strategy, tactics, and technology to harness it. Now, other departments have had to embrace the digital transformation that businesses have been talking about for so long.</p>
                                    </div>
                                    <n-link to="/blog-details" class="btn btn-primary btn-hover-secondary">Read More</n-link>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <paginate
                                    :page-count="3"
                                    :page-range="3"
                                    :margin-pages="2"
                                    :prev-text="'Prev'"
                                    :next-text="'Next'"
                                    :container-class="'pagination center'"
                                    :page-class="'page-item'">
                                </paginate>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-12 order-lg-2 mt-50">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Section End -->

        <CallToActionTwo />

        <TheFooter />

    </div>
</template>

<script>
    import blogData from "~/data/blog.json";

    export default {
        components: {
            TheHeader: () => import('@/components/TheHeader'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            SearchPopup: () => import('@/components/SearchPopup'),
            BreadcrumbOne: () => import('@/components/BreadcrumbOne'),
            BlogSidebar: () => import('@/components/BlogSidebar'),
            CallToActionTwo: () => import('@/components/CallToActionTwo'),
            TheFooter: () => import('@/components/TheFooter'),
        },

        data() {
            return {
                blogData,

                items: [
                    {
                        text: 'Home',
                        to: "/"
                    },
                    {
                        text: 'Blog Classic',
                        active: true
                    }
                ]
            }
        },

        head() {
            return {
                title: 'Blog Classic'
            }
        },
    };
</script>


