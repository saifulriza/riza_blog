<script>
  import Header from "../components/Header.svelte";

  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: white;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  :global(body.dark-mode main) {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: #1e212d;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  :global(body.dark-mode footer) {
    color: gray;
  }

  footer {
    color: #000;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 0.5em auto;
    max-width: 1400px;
    padding: 1em 1em;
    text-align: center;
    width: 100%;
  }
</style>

<div class="layout">
  <Header {segment} />

  <main>
    <slot />
  </main>

  <footer>
    <span> &copy; {new Date().getFullYear()} Saiful Riza's Blog. </span>
  </footer>
</div>
