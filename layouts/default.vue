<template>
  <div>
    <div class="tabs">
            <ul>
                <li class="is-active"><nuxt-link to="/"><i class="fas fa-home"></i>&nbsp;홈</nuxt-link></li>
                <li><nuxt-link to="/movie/Rank">&nbsp;랭킹</nuxt-link></li>
                <li><nuxt-link to="/tv/Program">&nbsp;TV 프로그램</nuxt-link></li>
                <li><nuxt-link to="/movie/News">&nbsp;영화 뉴스</nuxt-link></li>
            </ul>
        </div>
    <nuxt/> 
    <footer class="footer">
      <div class="content has-text-centered">
        <i class="fas fa-copyright"></i> 2020-2021, 모든 저작권은 <strong>영화소개에게 있습니다.</strong>
      </div>
    </footer>
  </div>
</template>