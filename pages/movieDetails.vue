<template>
  <div>
    <!-- Popular -->
    <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">Movie Info</p>
        </div>
    </section>
    <div class="columns">
        <div class="column is-3" >
            <img :src="`https://image.tmdb.org/t/p/w500` + posterPath" >
        </div>
        <div class="title">
            <h2>{{title}}</h2>
            <p>
                개봉 <span>{{releaseDate}}</span>
            </p>
            <p>
                장르 <span v-for="(item, index) in genres" :key="index"> {{item.name}}  </span>
            </p>
            <p>
                국가 <span>{{productionCountries}}</span>
            </p>
            <p>
                러닝타임 <span>{{runtime}}분</span>
            </p>
            <p>
                평점 <span> <i class="fas fa-star"> </i>{{voteAverage}}</span>
            </p>
            <p>
                러닝타임 <span>{{runtime}}분</span>
            </p>
        </div>
    </div>
    <h2 class="overview">
        개요
    </h2>
    <div class="columns">
        <div class="column" >
            {{overview}}
        </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default{
      async asyncData({params}){
          const movieId = params.id;
          const movieDetailsInfo = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=f19d3890180da322a305b1e1a80791d2`);
          console.log(movieDetailsInfo)

          return {
                title : movieDetailsInfo.data.title,
                overview : movieDetailsInfo.data.overview,
                posterPath : movieDetailsInfo.data.poster_path,
                releaseDate : movieDetailsInfo.data.release_date, // 개봉일
                runtime : movieDetailsInfo.data.runtime, // 런타임
                genres : movieDetailsInfo.data.genres, // 장르
                productionCountries : movieDetailsInfo.data.production_countries[0].name, // 국가
                voteAverage : movieDetailsInfo.data.vote_average, // 평점
          };
      },
      methods:{
          movieDetailsPage(movieId){
          this.$router.push({ path: `/movieDetails/${movieId}`})
        }
      }
    }
</script>

<style scoped>
    .hero{
        text-align: center;
    }
  .columns{
      width: 1180px;
      margin: auto;
  }
  .title{
      padding: 12px;
  }
  .title h2{
      width: 800px;
  }
  .title p{
      font-size: 16px;
      padding: 20px 0px 10px 0px;
      color: #9898C9;
  }
  .title span{
      font-size: 16px;
      padding: 20px 0px 10px 0px;
      color: black;
  }
  .fa-star{
      color: red;
  }
  .overview{
      width: 1180px;
      margin: auto;
      padding: 12px;
      font-size: 30px;
  }
</style>