<template>
    <div class="page-title-section section-padding-top bg-cover" data-overlay="0.7" :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="page-title">
            <div class="container">
                <h1 class="title">{{ title }}</h1>
            </div>
        </div>
        <div class="page-breadcrumb position-static">
            <div class="container">
                <b-breadcrumb class="page-breadcrumb" :items="items"></b-breadcrumb>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items', 'title', 'backgroundUrl']
    };
</script>