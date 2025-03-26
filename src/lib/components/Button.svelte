<script lang="ts">
    import type { Snippet } from "svelte";


     interface ButtonProps{
        children: Snippet
     }

     let {children}: ButtonProps = $props();
</script>

<button> 
    {@render children()}
</button>
