<template>
<div class="cards-container">
    <div class="cards-details"  @mouseover="hover=true" @mouseleave="hover=false">
        <div class="movie-poster">
            <img :src='generateImg' alt="poster">
        </div>
        <br>
        <div class="movie-details" v-if="hover" >
            <h5>{{ title }}</h5>
            <div class="original-launguage">
                Original Language: 
                <flag v-if="original_language == 'en'" iso="us" />
                <flag v-else :iso="original_language" />
            </div>  
            <span><i v-for="n in 5" :key="n" class="fa-star" :class="n <= voteRounded ? 'fas' : 'far' "></i></span> 
        </div>
    </div>
</div>
</template>



<script>

export default {
    name: 'Cards',
    components: {},
    props: {
        poster_path: String,
        title: String,
        original_title: String,
        original_language: String,
        vote_average: Number
    },
    computed:{
        generateImg(){
            return 'https://image.tmdb.org/t/p/w342' + this.poster_path 
        }
    },
    data(){
        return{
            hover:false,
            voteRounded: Math.round(this.vote_average / 2),            
        }
    },
}        
</script>


<style lang="scss" scoped>
.cards-container{
    margin: 70px 20px;
    position: relative;
    max-width: 320px;
    .movie-details{
        text-align: center;
        color:rgb(255, 255, 255);
        position: absolute;
        left: 100px;
        background-color: rgba(96, 97, 99, 0.658);
        box-shadow: 1px 1px 50px #aaa;
        padding: 10px;
        border-radius: 25px;
    }
    .movie-poster:hover {

        box-shadow: 1px 1px 500px rgb(255, 254, 254);
    }
    .original-launguage {
        font-size: 15px;
    }
}
</style>