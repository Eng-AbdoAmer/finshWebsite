<template>
    <div class="static-testimonial mb-30">
        <div class="testimonial-image">
            <img :src="testimonial.imgSrc" :alt="testimonial.name">
        </div>
        <div class="testimonial-content">
            <p>{{ testimonial.text }}</p>
        </div>
        <div class="author-info">
            <div class="cite">
                <h6 class="name">{{ testimonial.name }}</h6>
                <span class="position">{{ testimonial.position }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['testimonial']
    };
</script>