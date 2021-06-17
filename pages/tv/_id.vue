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
            <h2>{{name}}</h2>
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
                평점 <span> <i class="fas fa-star"> </i>{{voteAverage}}</span>
            </p>
            <p>
                창작자 <span v-for="(item, index) in createdBy" :key="index"> {{item.name}}  </span>
            </p>
            <p>
                러닝타임 <span> {{episodeRunTime}}분</span>
            </p>
            <p>
                시즌 <span> {{seasonNumber}}</span>
            </p>
            <p>
                홈페이지 <span> <a :href="homepage">{{homepage}}</a></span>
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
          const tvProgramId = params.id;
          console.log(tvProgramId)
          const tvProgramInfo = await axios.get(`https://api.themoviedb.org/3/tv/${tvProgramId}?api_key=f19d3890180da322a305b1e1a80791d2`);
          console.log(tvProgramInfo.data)

          return {
                name : tvProgramInfo.data.name,
                overview : tvProgramInfo.data.overview,
                posterPath : tvProgramInfo.data.poster_path,
                releaseDate : tvProgramInfo.data.last_air_date, // 개봉일
                genres : tvProgramInfo.data.genres, // 장르
                productionCountries : tvProgramInfo.data.production_countries[0].name, // 국가
                voteAverage : tvProgramInfo.data.vote_average, // 평점
                createdBy :  tvProgramInfo.data.created_by,// 창작자
                episodeRunTime :  tvProgramInfo.data.episode_run_time[0], //런타임
                homepage : tvProgramInfo.data.homepage,
                seasonNumber : tvProgramInfo.data.last_episode_to_air.season_number,
          };
      },
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