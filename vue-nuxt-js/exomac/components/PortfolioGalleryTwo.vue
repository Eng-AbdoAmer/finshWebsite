<template>
    <div class="section-padding">
        <div class="container-fluid px-0">
            <div class="section-title text-center" data-aos="fade-up">
                <h2 class="title">Great even greater creative works</h2>
                <p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p>
            </div>

            <div class="messonry-button text-center mb-60">
                <button data-filter="all"><span class="filter-text">All</span></button>
                <button data-filter=".app"><span class="filter-text">App</span></button>
                <button data-filter=".development"><span class="filter-text">Development</span></button>
                <button data-filter=".marketing"><span class="filter-text">Marketing</span></button>
                <button data-filter=".software"><span class="filter-text">Software</span></button>
                <button data-filter=".design"><span class="filter-text">Design</span></button>
            </div>

            <div class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 no-gutters box">
                <div class="col mix" :class="portfolio.category" v-for="(portfolio, index) in portfolioData.portfolios" :key="index">
                    <div class="single-portfolio">
                        <div class="thumbnail">
                            <img class="img-fluid" :src="portfolio.imgSrc" :alt="portfolio.title">
                        </div>
                        <div class="content">
                            <h5 class="title">
                                <n-link to="/project-details">{{ portfolio.title }}</n-link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import portfolioData from "~/data/portfolios.json";

    export default {
        data() {
            return {
                portfolioData,
                mixer: null
            }
        },

        mounted () {
            this.$nextTick(() => {
                const containerEl = document.querySelector('.box')
                this.mixer = new this.mixitup(containerEl)
            })
        },
    };
</script>