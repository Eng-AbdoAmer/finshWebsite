<template>
    <nav class="site-main-menu">
        <ul>
            <li class="has-children">
                <n-link to="/">Home</n-link>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/">Home One</n-link>
                    </li>
                    <li>
                        <n-link to="/home-two">Home Two</n-link>
                    </li>
                    <li>
                        <n-link to="/home-three">Home Three</n-link>
                    </li>
                </ul>
            </li>
            <li>
                <n-link to="/about">About Us</n-link>
            </li>
            <li>
                <n-link to="/service">Services</n-link>
            </li>
            <li class="has-children">
                <n-link to="/project">Project</n-link>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/project">Project</n-link>
                    </li>
                    <li>
                        <n-link to="/project-details">Project Details</n-link>
                    </li>
                </ul>
            </li>
            <li class="has-children">
                <n-link to="/blog-grid">Blog</n-link>
                <ul class="sub-menu">
                    <li>
                        <n-link to="/blog-grid">Blog Grid</n-link>
                    </li>
                    <li>
                        <n-link to="/blog-classic">Blog Classic</n-link>
                    </li>
                    <li>
                        <n-link to="/blog-details">Blog Details</n-link>
                    </li>
                </ul>
            </li>
            <li>
                <n-link to="/contact-us">Contact Us</n-link>
            </li>
        </ul>
    </nav>
</template>