<script>
  export let segment;
  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Rubik, sans-serif;
    font-weight: 700;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    position: relative;
    margin-left: 15px;
  }

  a:not(.selected) {
    opacity: 0.7;
  }

  a::before {
    content: "";
    position: absolute;
    transition: transform 0.3s ease;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #aaa;
    transform: scaleX(0);
  }

  a:hover::before,
  .selected::before {
    transform: scaleX(1);
  }

  .selected::before {
    background: #fd6378;
  }
  .circle {
    margin-left: 0.5em;
    margin-right: 0.5em;
    margin-bottom: auto;
    margin-top: auto;
    cursor: pointer;
    position: relative;
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    background: linear-gradient(40deg, #8983f7, #a3dafb 70%);

    box-shadow: -2px 7px 8px 4px #e2e2ea;
  }

  .circle:hover {
    box-shadow: 2px 3px 2px gray;
  }

  :global(body.dark-mode .circle) {
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    box-shadow: none;
  }

  :global(body.dark-mode .circle:hover) {
    box-shadow: 2px 3px 2px gray;
  }

  .crescent {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    transform: scale(1);
    background: #f2eee2;
    transform-origin: top right;
    transition: transform 0.6s cubic-bezier(0.445, 0.025, 0.155, 0.5);
  }
  :global(body.dark-mode .crescent) {
    background: white;
    transform: scale(0);
  }
</style>

<nav>
  <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
  <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
  <a
    rel="prefetch"
    class={segment === 'blog' ? 'selected' : ''}
    href="blog">blog</a>
  <a
    rel="prefetch"
    class={segment === 'link' ? 'selected' : ''}
    href="link">link</a>
  <span class="circle" on:click={toggle}> <span class="crescent" /> </span>
</nav>
