<script>
    import { base } from "$app/paths";

    export let title;
    export let video;
    export let url;
    export let authors;
    export let venue;
    export let isWide;
    export let hasVideo = true;

    let videoElement;

    let hovered = false;
    $: paused = !hovered && isWide;

    let currentTime;

    function hover() {
        hovered = true;
    }

    function unhover() {
        hovered = false;
        currentTime = 0;
        // sets back to poster
        videoElement.load();
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class="contents" on:mouseover={hover} on:mouseleave={unhover}>
    <div
        class="transition-transform self-center justify-self-center"
        class:scale-125={hovered && isWide}
    >
        <div class="rounded-lg overflow-hidden">
            {#if hasVideo}
                <video
                    disableremoteplayback
                    muted
                    webkit-playsinline
                    playsinline
                    loop
                    bind:this={videoElement}
                    bind:paused
                    bind:currentTime
                    src={`${base}/pub_videos/${video}.mp4`}
                    poster={`${base}/pub_videos/${video}.jpg`}
                />
            {:else}
                <img src={`${base}/pub_videos/${video}.jpg`} alt={title} />
            {/if}
        </div>
    </div>
    <div
        class="md:pl-4 pt-2 md:pt-0 pb-16 md:pb-0 transition-transform"
        class:translate-x-8={hovered && isWide}
    >
        <a class="text-xl text-sky-600 font-semibold" href={url}>
            {title}
        </a>
        <p class="text-md">
            {#each authors as author, j}
                <span
                    class:font-bold={author.includes("K. Black")}
                    class="whitespace-nowrap">{author}</span
                ><span>
                    {#if j < authors.length - 1 && !author.endsWith(":")}
                        ,
                    {:else if j == authors.length - 1}
                        .
                    {/if}
                </span>
            {/each}
        </p>
        <p class="text-md italic">{venue}.</p>
    </div>
</div>
