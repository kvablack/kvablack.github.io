<script>
    import { clickOutside } from "../lib/clickOutside.js";
    let expanded = false;
</script>

<div
    class:expanded
    class="border-slate-100 border-4 py-4 px-2 w-full rounded-md max-h-96 h-full cursor-default overflow-hidden transition-all relative duration-300"
    on:click={() => (expanded = !expanded)}
    on:keydown={(e) => {
        if (e.key !== "Tab") expanded = !expanded;
    }}
    tabindex="0"
    role="button"
    use:clickOutside={() => (expanded = false)}
>
    <slot />
    <div
        class="fade absolute bottom-0 bg-gradient-to-b from-transparent to-white h-32 w-full transition-all duration-300"
    ></div>
    <div class="chevron-down cursor-pointer transition-all duration-300"></div>
    <div class="h-4 w-full"></div>
</div>

<style>
    .expanded {
        max-height: 5000px;
    }
    .expanded .fade {
        opacity: 0;
    }
    .expanded .chevron-down {
        transform: translateY(-50%) rotate(-135deg);
    }
    .chevron-down {
        @apply border-slate-400 border-r-4 border-b-4;
        width: 15px;
        height: 15px;
        transform: translateY(-100%) rotate(45deg);
        position: absolute;
        left: 50%;
        bottom: 0;
    }
</style>
