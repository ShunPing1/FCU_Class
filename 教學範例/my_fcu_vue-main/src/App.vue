<script>
import { RouterView } from 'vue-router'

export default {
  // 元件宣告
  components: {
    RouterView
  },
}
</script>

<template>
  <!-- 觀察你的設計稿 把共用的部分放在此頁面 -->
  <header>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/calc">calc</a>
    <!-- <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
    <RouterLink to="/calc">calc</RouterLink> -->
  </header>
  <main>
    <RouterView />
    <div class="calc text-[80px]">我來自公版</div>
  </main>
  <footer>
  </footer>

</template>

<!-- scoped style只影響這支vue -->
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
