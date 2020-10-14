<script context="module">
  import { pages } from "./_posts";

  export function preload(page) {
    try {
      const index = +(page.query.page || 1);
      const halaman = {
        posts: pages[index - 1],
        hasMore: Object.keys(pages[index - 1]).length > index + 1,
        page: index,
      };
      return halaman;
    } catch (error) {
      throw "Terjadi kesalahan";
    }
  }
</script>

<script>
  // import Pagination from "../../components/Pagination.svelte";
  import { onMount } from "svelte";
  export let link;
  export let posts, hasMore, page;

  onMount(() => {
    link = window ? window.location.href : "";
  });

  let jsonld = {
    "@context": "http://www.schema.org",
    "@type": "person",
    name: "Saiful Riza",
    jobTitle: "Web developer",
    height: "72 inches",
    gender: "male",
    url: "https://riza.my.id",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Matangkuli, Aceh utara",
      addressLocality: "Aceh utara",
      addressRegion: "Aceh",
      postalCode: "24386",
      addressCountry: "Indonesia",
    },
    email: "mail.saifulriza@gmail.com",
    birthDate: "2000-03-18",
    alumniOf: "Universitas Malikussaleh",
    birthPlace: "Matangkuli",
    memberOf: "Republican party",
    nationality: "Indonesian",
    colleague: ["https://unimal.ac.id"],
  };
  jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${
    jsonld + "<"
  }/script>`;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
  .button {
    background-color: gray; /* Green */
    border: none;
    color: #d5d2d2;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  :global(body.dark-mode .button) {
    background-color: gray;
  }
</style>

<svelte:head>
  <meta
    name="Description"
    content="Kumpulan artikel dari Saiful riza tentang apa yang sudah ia pelajari mulai dari seputar web development dan hal lainnya" />
  <meta name="geo.region" content="Indonesia" />
  <meta name="language" content="id" />
  <link rel="alternate" hreflang="id-ID" href={link} />
  <meta name="geo.region" content="Indonesia" />
  <meta name="language" content="id" />
  <link rel="alternate" hreflang="id-ID" href={link} />
  <meta
    property="og:title"
    content="List Artikel | Kumpulan postingan web developer" />
  <meta property="og:site_name" content="Saiful Riza's Blogs" />
  <meta property="og:url" content={link} />
  <meta
    property="og:description"
    content="Kumpulan artikel dari Saiful riza tentang apa yang sudah ia pelajari mulai dari seputar web development dan hal lainnya" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://xn--e28h.my.id/favicon.png" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@rizasblog" />
  <meta name="twitter:creator" content="@riza" />
  <meta name="twitter:image" content="https://xn--e28h.my.id/riza.png" />
  <link rel="canonical" href={link} />
  {@html jsonldScript}
  <title>Artikel | Kumpulan Artikel Yang Ditulis Berdasarkan Pengalaman</title>
</svelte:head>

<div class="container">
  <h1>Blog</h1>
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
  {#if page > 1}<a class="button" href="/blog?page={page - 1}">Previous</a>{/if}

  {#if hasMore}<a class="button" href="/blog?page={page + 1}">Next</a>{/if}
</div>
