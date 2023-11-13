<template>
    <div class="agency-accordion">
        <b-card no-body>
            <b-card-header header-tag="header" class="card-header">
                <b-button block v-b-toggle.accordion-1 class="acc-btn border-0 text-left">
                    What exactly is branding?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header" class="card-header">
                <b-button block v-b-toggle.accordion-2 class="acc-btn border-0 text-left">
                    What’s the branding process like?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header" class="card-header">
                <b-button block v-b-toggle.accordion-3 class="acc-btn border-0 text-left">
                    What type of creative services do you offer?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text>
                        Branding is more than a logo and a clever tagline. Your brand tells the story of your company. It’s your message and your values. When that happens, remarkable things occur.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>