<template>
    <div class="section-padding" data-bg-color="#f8faff">
        <div class="container">
            <!-- Section Title Start -->
            <div class="section-title text-center mb-60" data-aos="fade-up">
                <h2 class="title">People behind the screen</h2>
                <p class="sub-title">Get your company heading in the right direction with our digital marketing strategist</p>
            </div>
            <!-- Section Title End -->

            <div class="row row-cols-lg-4 row-cols-sm-2 row-cols-1 mtn-30">
                <div class="col mt-30" v-for="(team, index) in teamData.slice(0, 4)" :key="index">
                    <TeamMember :team="team" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import teamData from '~/data/team.json';

    export default {
        components: {
            TeamMember: () => import('@/components/TeamMember'),
        },

        data() {
            return {
                teamData
            }
        },
    };
</script>