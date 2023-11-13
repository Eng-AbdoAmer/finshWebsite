<template>
    <div class="icon-box text-center" :class="addClassName">
        <div class="icon">
            <img class="svgInject" :src="service.iconSrc" :alt="service.title">
        </div>
        <div class="content">
            <h3 class="title">{{ service.title }}</h3>
            <div class="desc">
                <p>{{ service.text }}</p>
            </div>
            <n-link to="/project-details" class="link">Learn More</n-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['service', 'addClassName']
    };
</script>