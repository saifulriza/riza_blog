<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Bio from "../../components/Bio.svelte";
  import { onMount } from "svelte";
  export let link;

  onMount(() => {
    link = window ? window.location.href : "";
  });
  export let post;

  let jsonld =  {
      "@context": "https://schema.org/",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "http://localhost:3000/blog"
      },
      "name": `${post.title}`,
      "headline": `${post.headline}`,
      "publisher": `${post.publisher}`,
      "publisher": {
        "@type": "Organization",
        "name": "Riza's Blog",
        "logo": {
          "@type": "ImageObject",
          "url": `http://localhost:3000/logo.jpg`
          }
        },
      "image": [
        `${post.image}`
       ],
      "author": {
        "@type": "Person",
        "name": `${post.author}`
      },
      "datePublished": `${post.printDate}`,
      "dateModified": `${post.modified}`
    }
;
  jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${jsonld +
    "<"}/script>`;
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-family: Rubik, sans-serif;
    font-weight: 600;
  }

  header hr {
    min-width: 100px;
    width: 30%;
  }
</style>

<svelte:head>
  <meta name="Description" content={post.description} />
  <meta name="geo.region" content="Indonesia" />
  <meta name="language" content="id" />
  <link rel="alternate" hreflang="id-ID" href={link} />  
  <meta property="og:title" content={post.title}>
  <meta property="og:site_name" content="Saiful Riza's Blogs">
  <meta property="og:url" content={link}>
  <meta property="og:description" content={post.description}>
  <meta property="og:type" content="article">
  <meta property="og:image" content={post.image}>
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content=@{post.twitter_site} />
  <meta name="twitter:creator" content=@{post.twitter_author} />
  {@html jsonldScript}
  <title>{post.title}</title>
</svelte:head>

<header>
  <p>{post.printDate} ~ {post.printReadingTime}</p>
  <h1>{post.title}</h1>
  <hr />
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
  <hr />
  <Bio />
</div>
