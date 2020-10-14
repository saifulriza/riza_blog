<script>
  import { onMount } from "svelte";
  // import Api from '../libs/Api'
  export let link;
  export let result = null;
  export let loading = false;
  onMount(() => {
    link = window ? window.location.href : "";
  });
  let url = "";
  async function postLink() {
    loading = true;
    const res = await fetch("https://shortme.herokuapp.com/", {
      method: "POST",
      headers: new Headers({
        Accept: "*/*",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ url: url }),
    });
    result = await res.json();
    loading = false;
  }

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
  #link {
    width: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 3px solid #ccc;
    transition: 0.5s;
    color: #867f7f;
  }
  :global(body.dark-mode #link) {
    background-color: gray;
    color: #ccc;
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
  <meta property="og:title" content="About | Kenali Saiful Riza lebih dekat" />
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
  <meta name="twitter:image" content="https://xn--e28h.my.id/riza.jpg" />
  <link rel="canonical" href={link} />
  {@html jsonldScript}
  <title>Link | Buat shortlink dengan url unik</title>
</svelte:head>

<div class="container">
  <h1>Pendekkan</h1>
  <input bind:value={url} placeholder="Paste link.." type="text" id="link" />
  <button
    class="button"
    on:click={postLink}>{loading ? 'Loading..' : 'Submit'}</button>
  {#if typeof result === 'object' && result !== null}
    <p>Hasilnya : 😀.my.id/l/{result.id}</p>
  {/if}
</div>
