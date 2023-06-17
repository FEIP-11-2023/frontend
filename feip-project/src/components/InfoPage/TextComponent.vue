<script setup>

</script>

<template>

    <div class="text-component">
        <div class="title text-uppercase fw-bold">
            <slot name="title"></slot>
        </div>
    
        <div class="text">
            <slot name="text"></slot>
        </div>
    </div>
    
</template>

<style>

.text-component {
    margin-top: 3rem;
    margin-bottom: 30px;
}

.title {
    font-size: 1rem;
    color: #323540;
    margin-bottom: 1rem;
}

.text, .text p {
    color: #515562;
    font-style: normal;
font-weight: 400;
line-height: 160%;
margin-bottom: 0.5rem;
}


</style>