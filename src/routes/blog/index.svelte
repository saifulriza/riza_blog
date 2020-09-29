<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>
<script>
  export let posts;
  import { onMount } from "svelte";
  export let link;

  onMount(() => {
    link = window ? window.location.href : "";
  });
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
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
<meta property="og:title" content="List Artikel | Kumpulan postingan web developer">
<meta property="og:site_name" content="Saiful Riza's Blogs">
<meta property="og:url" content={link}>
<meta property="og:description" content="Kumpulan postingan dari Saiful riza tentang apa yang sudah ia pelajari mulai dari seputar teknologi, web development dan berbagai potingan yang menarik lainnya">
<meta property="og:type" content="article">
<meta property="og:image" content="favicon.png">
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@rizasblog" />
<meta name="twitter:creator" content="@riza" />
  <title>Blog</title>
</svelte:head>

<div class="container">
  <h1>Blog</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
