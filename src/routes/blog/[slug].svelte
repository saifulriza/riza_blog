<script context="module">
  import { findPost } from "./_posts";

  // sapper calls this to load our data
  export function preload(page) {
    // find the post based on the permalink param
    const post = findPost(page.params.slug);
    console.log(post);
    // return a list of props
    return { post };
  }
</script>

<script>
  import Bio from "../../components/Bio.svelte";
  import { onMount } from "svelte";
  export let link;

  onMount(() => {
    link = window ? window.location.href : "";
    document.querySelector("#hightlight-css").removeAttribute("disabled");
  });
  export let post;

  let jsonld = {
    "@context": "https://schema.org/",
    "@type": "NewsArticle",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://xn--e28h.my.id/blog",
    },
    name: `${post.title}`,
    headline: `${post.headline}`,
    publisher: `${post.publisher}`,
    publisher: {
      "@type": "Organization",
      name: "Riza's Blog",
      logo: {
        "@type": "ImageObject",
        url: `https://xn--e28h.my.id/favicon.png`,
      },
    },
    image: [`${post.image}`],
    author: {
      "@type": "Person",
      name: `${post.author}`,
    },
    datePublished: `${post.printDate}`,
    dateModified: `${post.modified}`,
  };
  jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${
    jsonld + "<"
  }/script>`;
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
  <meta property="og:title" content={post.title} />
  <meta property="og:site_name" content="Saiful Riza's Blogs" />
  <meta property="og:url" content={link} />
  <meta property="og:description" content={post.description} />
  <meta property="og:type" content="article" />
  <meta property="og:image" content={post.image} />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@{post.twitter_site}" />
  <meta name="twitter:title" content="@{post.title}" />
  <meta name="twitter:description" content="@{post.description}" />
  <meta name="twitter:creator" content="@{post.twitter_author}" />
  <meta name="twitter:image" content="https://xn--e28h.my.id/riza.jpg" />
  <link rel="canonical" href={link} />
  {@html jsonldScript}
  <title>{post.title} | Blog Riza</title>
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
