<script>
  import { onMount } from "svelte";
  export let link;

  onMount(() => {
    link = window ? window.location.href : "";
  });
</script>
<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .home-copy {
    flex: 1;
  }

  h1 {
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }

  figure {
    margin: 0 1em;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <meta
    name="Description"
    content="Kumpulan postingan dari Saiful riza tentang apa yang sudah ia pelajari mulai dari seputar teknologi, web development dan berbagai potingan yang menarik lainnya" />
  <meta name="geo.region" content="Indonesia" />
  <meta name="language" content="id" />
  <link rel="alternate" hreflang="id-ID" href={link} />
  <meta name="geo.region" content="Indonesia" />
  <meta name="language" content="id" />
  <link rel="alternate" hreflang="id-ID" href={link} />  
  <meta property="og:title" content="Kumpulan postingan web developer">
  <meta property="og:site_name" content="Saiful Riza's Blogs">
  <meta property="og:url" content={link}>
  <meta property="og:description" content="Kumpulan postingan dari Saiful riza tentang apa yang sudah ia pelajari mulai dari seputar teknologi, web development dan berbagai potingan yang menarik lainnya">
  <meta property="og:type" content="article">
  <meta property="og:image" content="favicon.png">
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@rizasblog" />
  <meta name="twitter:creator" content="@riza" />
  <title>It's All About Saiful Riza</title>
</svelte:head>

<div class="home-container">
  <div class="home-copy">
    <h1>Welcome to My Journey</h1>
    <p>
      let's start your world with me
    </p>
  </div>

  <figure>
    <img alt="Person typing on laptop" src="undraw-illustration.svg"/>
  </figure>
</div>
