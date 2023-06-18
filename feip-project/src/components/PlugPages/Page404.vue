<script>
export default {

}
</script>

<template>
    <!-- доработать верстку с позициями absolute -->

    <div class="container-xx">
        <div class="page-404 fixed-bottom">
            <div class="page-404__404 d-flex">
                <img src="../../assets/plug-pages/4.svg" alt="">
                <img src="../../assets/plug-pages/0.svg" alt="">
                <img src="../../assets/plug-pages/4.svg" alt="">
            </div>
            <div class="page-404__centered-block">
                <div class="page-404__title text-uppercase">
                    Такой страницы не существует
                </div>
                <div class="page-404__text">
                    Попробуйте перезагрузить страницу или проверьте ссылку
                </div>
                <div class="page-404__button">
                    <Button>
                        На главную
                    </Button>
                </div>
            </div>
            <div class="page-404__god">
                <img src="../../assets/plug-pages/god.png" alt="God">
            </div>
            
        </div>
    </div>
  
</template>

<style>
.page-404 {
    text-align: center;
    bottom: 0;
    
}

.page-404__404 {
    position: absolute;
    left: 38.9%;
    top: -10%;
    text-align: center;
    z-index: 2;
}

.page-404__god {
    position: relative;
}

.page-404__centered-block {
    position: absolute;
    left: 37%;
    top: 35%;
    z-index: 2;
}

.page-404__title {
    color: #323540;
    font-size: 24px;
    margin-bottom: 1rem;
}

.page-404__text {
    font-size: 16px;
    color: #323540;
    margin-bottom: 40px;
}

</style>