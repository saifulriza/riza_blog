<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let totalPages = 1;
    export let activePage = 0;

    const switchPage = async (page) => {
        console.log(page);
        activePage = page;
        dispatch('change', {
            page
        });
    };

    const isInRange = (page) => {
        if ((page < 3) || (page >= totalPages - 3)) {
            return true;
        }

        if (page > activePage - 3 && page < activePage + 3) {
            return true;
        }

        return false;
    };
</script>

<nav>
    <ul>
        {#each Array(totalPages) as ignoredVal, currentPage}
            {#if isInRange(currentPage)}
                <li class:active={currentPage === activePage} class="page mouse-pointer" on:click={() => switchPage(currentPage)}>{currentPage + 1}</li>
            {:else if isInRange(Math.max(currentPage - 1, 0)) }
                <li>...</li>
            {/if}
        {/each}
    </ul>
</nav>

<style>
    .mouse-pointer:hover {
        cursor: pointer;
    }

    ul {
        display: flex;
        list-style-type: none;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-inline-start: 0;
    }

    .page {
        padding: 0.5em 1em;
        border-left: 1px solid lightblue;
        border-top: 1px solid lightblue;
        border-bottom: 1px solid lightblue;
    }
    .page:last-of-type {
        border-right: 1px solid lightblue;
    }
    .page:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    .page.active {
        background-color: rgb(129, 200, 176);
    }
</style>