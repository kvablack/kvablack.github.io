<script>
    import { clickOutside } from "../lib/clickOutside.js";
    let active = false;

    const pubs = [
        {
            title: "Octo: An Open-Source Generalist Robot Policy",
            authors: [
                "Octo Model Team:",
                "K. Black",
                "D. Ghosh",
                "H. Walke",
                "K. Pertsch",
                "O. Mees",
                "S. Dasari",
                "J. Hejna",
                "C. Xu",
                "J. Luo",
                "T. Kreiman",
                "Y. L. Tan",
                "D. Sadigh",
                "C. Finn",
                "S. Levine",
            ],
            venue: "Technical report",
            url: "https://octo-models.github.io",
        },
        {
            title: "Zero-Shot Robotic Manipulation with Pretrained Image-Editing Diffusion Models",
            authors: [
                "K. Black",
                "M. Nakamoto",
                "P. Atreya",
                "H. Walke",
                "C. Finn",
                "A. Kumar",
                "S. Levine",
            ],
            venue: "Preprint (under review)",
            url: "https://rail-berkeley.github.io/susie/",
        },
        {
            title: "BridgeData V2: A Dataset for Robot Learning at Scale",
            authors: [
                "H. Walke",
                "K. Black",
                "A. Lee",
                "M. J. Kim",
                "M. Du",
                "C. Zheng",
                "T. Zhao",
                "P. Hansen-Estruch",
                "Q. Vuong",
                "A. He",
                "V. Myers",
                "K. Fang",
                "C. Finn",
                "S. Levine",
            ],
            venue: "7th Annual Conference on Robot Learning, 2023",
            url: "https://rail-berkeley.github.io/bridgedata/",
        },
        {
            title: "ViNT: A Foundation Model for Visual Navigation",
            authors: [
                "D. Shah",
                "A. Sridhar",
                "N. Dashora",
                "K. Stachowicz",
                "K. Black",
                "N. Hirose",
                "S. Levine",
            ],
            venue: "7th Annual Conference on Robot Learning, 2023",
            url: "https://general-navigation-models.github.io/",
        },
        {
            title: "Training Diffusion Models with Reinforcement Learning",
            authors: [
                "K. Black",
                "M. Janner",
                "Y. Du",
                "I. Kostrikov",
                "S. Levine",
            ],
            venue: "Preprint (under review)",
            url: "https://rl-diffusion.github.io",
        },
        {
            title: "Flight-Ready, Non-Cooperative Spacecraft Pose Estimation Using Monocular Imagery",
            authors: [
                "K. Black",
                "S. Shankar",
                "D. Fonseka",
                "J. Deutsch",
                "A. Dhir",
                "M. R. Akella",
            ],
            venue: "31st AAS/AIAA Space Flight Mechanics Meeting, 2021",
            url: "https://arxiv.org/abs/2101.09553",
        },
        {
            title: "A Pipeline for Vision-Based On-Orbit Proximity Operations Using Deep Learning and Synthetic Imagery",
            authors: [
                "C. Schubert",
                "K. Black",
                "D. Fonseka",
                "A. Dhir",
                "J. Deutsch",
                "N. Dhamani",
                "G. Martin",
                "M. R. Akella",
            ],
            venue: "2021 IEEE Aerospace Conference, 2021",
            url: "https://arxiv.org/abs/2101.05661",
        },
    ];
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<h1 class="text-3xl mt-8 mb-2">Publications</h1>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class:active
    class="group border-slate-100 border-4 py-4 px-2 w-full rounded-md max-h-96 h-full overflow-hidden transition-all relative"
    on:click={() => (active = !active)}
    use:clickOutside={() => (active = false)}
>
    {#each pubs as pub, i}
        <div class:mb-4={i < pubs.length - 1}>
            <a class="text-xl font-semibold" href={pub.url}>
                {pub.title}
            </a>
            <p class="text-md">
                {#each pub.authors as author, j}
                    <span
                        class:font-bold={author.includes("K. Black")}
                        class="whitespace-nowrap">{author}</span
                    ><span>
                        {#if j < pub.authors.length - 1 && !author.endsWith(":")}
                            ,
                        {:else if j == pub.authors.length - 1}
                            .
                        {/if}
                    </span>
                {/each}
            </p>
            <p class="text-md italic">{pub.venue}.</p>
        </div>
    {/each}
    <div
        class="absolute bottom-0 bg-gradient-to-t from-white to-transparent h-64 w-full group-[.active]:opacity-0 transition-all"
    >
        <div class="chevron-down"></div>
    </div>
</div>

<style>
    .active {
        max-height: 10000px;
    }

    .chevron-down {
        display: inline-block;
        @apply border-slate-400 border-r-4 border-b-4;
        width: 15px;
        height: 15px;
        transform: translateY(-100%) rotate(45deg);
        position: absolute;
        left: 50%;
        bottom: 0;
    }
</style>
