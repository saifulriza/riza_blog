<script>
  import Logo from "./Logo.svelte";
  import Nav from "./Nav.svelte";

  export let segment;

  function toggle() {
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 1em;
    width: 100%;
  }
  .circle {
    margin-left: 3em;
    margin-right: 1em;
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

<header>
  <Logo />
  <Nav {segment} />
  <span class="circle" on:click={toggle}> <span class="crescent" /> </span>
</header>
