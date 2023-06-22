<script setup>
import Carousel from 'primevue/carousel';


const sliderItem = [
    'mountains',
    'mountains',
    'mountains',
    'mountains',
    'mountains',
    'mountains',
    'mountains'
]

// const img = 'mountains'

</script>

<template>

    <Carousel :value="sliderItem" :numVisible="3" :numScroll="1">
        <template #item="sliderItem">
            <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div class="mb-3">
                    <img :src="`/info-page/${img}.jpg`" class="w-6 shadow-2" />
                </div>
                
                    
            </div>
        </template>
    </Carousel>


</template>

<style>
.slider-item {
    width: 266px;
}
</style>