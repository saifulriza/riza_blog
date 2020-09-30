<script>
  import { onMount } from "svelte";
  export let link;

  onMount(() => {
    link = window ? window.location.href : "";
  });

  let jsonld =
{
  "@context": "http://www.schema.org",
  "@type": "person",
  "name": "Saiful Riza",
  "jobTitle": "Web developer",
  "height": "72 inches",
  "gender": "male",
  "url": "https://riza.my.id",
  "address": {
     "@type": "PostalAddress",
     "streetAddress": "Matangkuli, Aceh utara",
     "addressLocality": "Aceh utara",
     "addressRegion": "Aceh",
     "postalCode": "24386",
     "addressCountry": "Indonesia"
  },
  "email": "mail.saifulriza@gmail.com",
  "birthDate": "2000-03-18",
  "alumniOf": "Universitas Malikussaleh",
  "birthPlace": "Matangkuli",
  "memberOf": "Republican party",
  "nationality": "Indonesian",
  "colleague": [
     "https://unimal.ac.id"
  ]
}
jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${jsonld +
    "<"}/script>`;
</script>
<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
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
<meta property="og:title" content="About | Kumpulan postingan web developer">
<meta property="og:site_name" content="Saiful Riza's Blogs">
<meta property="og:url" content={link}>
<meta property="og:description" content="Kumpulan postingan dari Saiful riza tentang apa yang sudah ia pelajari mulai dari seputar teknologi, web development dan berbagai potingan yang menarik lainnya">
<meta property="og:type" content="article">
<meta property="og:image" content="https://xn--e28h.my.id/favicon.png">
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@rizasblog" />
<meta name="twitter:creator" content="@riza" />
<meta name="twitter:image" content="https://xn--e28h.my.id/riza.jpg" />
<link rel="canonical" href={link}/>
{@html jsonldScript}
  <title>About</title>
</svelte:head>

<div class="container">
  <h1>About</h1>
  <figure>
    <img src='riza.jpg' alt='Saiful Riza.'>
    <figcaption>Saiful Riza</figcaption>
  </figure>
  <p>Hello world!</p>
  <p>Saya adalah seorang mahasiswa yang lahir dan tumbuh besar di Aceh.</p>
  <p>Mencari dan belajar hal - hal baru adalah makanan favorit saya, Bagi saya belajar hal baru adalah makanan yang sedap dan bisa disantap setiap saat. </p>
  <p>Technique is equal to power! yay.. Itu kata yang indah yang saya suka, yang pertama kali saya dapat ketika habis menonton pertandingan MMA Adesanya vs Costa. </p>
</div>
