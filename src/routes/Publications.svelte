<script>
    import ExpandableBox from "./ExpandableBox.svelte";

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

<h1 class="text-3xl mt-8 mb-2">Publications</h1>
<ExpandableBox>
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
</ExpandableBox>
