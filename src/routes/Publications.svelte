<script>
    import MediaQuery from "./MediaQuery.svelte";
    import { browser } from "$app/environment";
    import Pub from "./Pub.svelte";

    let isWide = true;

    const pubs = [
        {
            title: "Octo: An Open-Source Generalist Robot Policy",
            authors: [
                "Octo Model Team:",
                "K. Black*",
                "D. Ghosh*",
                "H. Walke*",
                "K. Pertsch*",
                "O. Mees*",
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
            venue: "Robotics: Science and Systems (2024)",
            url: "https://octo-models.github.io",
            video: "octo",
        },
        {
            title: "Zero-Shot Robotic Manipulation with Pretrained Image-Editing Diffusion Models",
            authors: [
                "K. Black*",
                "M. Nakamoto*",
                "P. Atreya",
                "H. Walke",
                "C. Finn",
                "A. Kumar",
                "S. Levine",
            ],
            venue: "International Conference on Learning Representations (2024)",
            url: "https://rail-berkeley.github.io/susie/",
            video: "susie",
        },
        {
            title: "Training Diffusion Models with Reinforcement Learning",
            authors: [
                "K. Black*",
                "M. Janner*",
                "Y. Du",
                "I. Kostrikov",
                "S. Levine",
            ],
            venue: "International Conference on Learning Representations (2024)",
            url: "https://rl-diffusion.github.io",
            video: "ddpo",
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
            venue: "Conference on Robot Learning (2023)",
            url: "https://rail-berkeley.github.io/bridgedata/",
            video: "bridge",
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
            venue: "AAS/AIAA Space Flight Mechanics Meeting (2021)",
            url: "https://arxiv.org/abs/2101.09553",
            video: "pose",
            hasVideo: false,
        },
    ];
</script>

<MediaQuery query="(min-width: 768px)" bind:matches={isWide} />
<h1 class="text-2xl mt-8 mb-4">Selected Publications</h1>
<div class="grid md:gap-y-8 {isWide ? 'grid-cols-[minmax(0,_200px)_2fr]' : 'grid-cols-1'}">
    {#each pubs as pub}
        <Pub {...pub} {isWide} />
    {/each}
</div>
