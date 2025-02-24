<script>
    import { base } from "$app/paths";

    const projs = {
        "Grad School": [
            {
                title: "Octo",
                img: "octo.png",
                url: "https://octo-models.github.io",
                desc: "An open-source foundation model for robotic manipulation. I also made the website :)",
            },
            {
                title: "DLimp",
                img: "dlimp.png",
                url: "https://github.com/kvablack/dlimp",
                desc: "A lightweight dataloading library for video data, used in Octo",
            },
        ],
        Undergrad: [
            {
                title: "Starfish",
                img: "ssi2.png",
                url: "https://autognc-starfish.readthedocs.io",
                desc: "Generates synthetic training data for deep learning computer vision tasks using Blender",
            },
            {
                title: "OPAT",
                img: "opat.png",
                url: "https://github.com/autognc/opat-js",
                desc: "A simple web-based Object Pose Annotation Tool for manually annotating images with 6D pose information",
            },
            {
                title: "FPGA Flight Controller",
                img: "quad.jpg",
                url: "https://github.com/kvablack/fpga-flight-controller",
                desc: "A working quadcopter flight controller written in SystemVerilog and deployed to an FPGA",
            },
            {
                title: "Vortex",
                img: "vortex.png",
                url: "https://devpost.com/software/911-call-handler",
                desc: "An automated 911 call handler intended for disaster relief scenarios that uses natural language processing to cluster calls by incident (HackMIT 2019)",
            },
            {
                title: "Syntype",
                img: "syntype.png",
                url: "https://devpost.com/software/syntype",
                desc: "A smart typing trainer for programmers that learns from the user in real time and targets more difficult patterns (HackDFW 2019)",
            },
            {
                title: "Copykey",
                img: "copykey.png",
                url: "https://devpost.com/software/copykey",
                desc: "Turns an image of a key into a working 3D-printed copy (HackTX 2018)",
            },
        ],
        "High School": [
            {
                title: "Hovercraft",
                img: "hovercraft.jpg",
                url: "https://tinyurl.com/kevin-black-hovercraft",
                desc: "A nationals-winning device built for the Science Olympiad high school competition",
            },
            {
                title: "Wireless Encrypted Voice Communication",
                img: "voicedemo.jpg",
                url: "https://www.silabs.com/community/projects.entry.html/2017/08/25/wireless_encryptedv-jwJk",
                desc: "A 32-bit microcontroller applet from my summer 2017 internship at Silicon Labs",
            },
            {
                title: "lasa.us",
                img: "lasa.png",
                url: "https://github.com/lasa/website",
                desc: "A website and custom content management system created for my high school",
            },
            {
                title: "ManaTEAMS",
                img: "manateams.png",
                url: "https://github.com/project-manatee",
                desc: "An Android app allowing Austin ISD students to easily check their grades",
            },
        ],
    };
</script>

<h1 class="text-2xl mt-8 mb-2">Other Projects</h1>
    {#each Object.entries(projs) as [category, projs], i}
        <div class="flex items-center w-full mb-4 {i > 0 ? 'mt-4' : ''}">
            <div class="grow border-t border-gray-400 border-dotted"></div>
            <div class="shrink px-1 text-sm text-gray-400">{category}</div>
            <div class="grow border-t border-gray-400 border-dotted"></div>
        </div>
        <div class="w-full flex flex-wrap gap-4">
            {#each projs as proj, i}
                <div class="flex flex-[1_0_300px]">
                    <a href={proj.url} class="self-center">
                        <div
                            class="w-32 h-32 mr-4 rounded-lg overflow-hidden bg-slate-500 flex justify-center items-center"
                        >
                            <img src={`${base}/${proj.img}`} />
                        </div>
                    </a>
                    <div class="flex flex-col shrink">
                        <div>
                            <a href={proj.url} class="text-2xl font-semibold font-raleway">
                                {proj.title}
                            </a>
                        </div>
                        <p>{proj.desc}</p>
                    </div>
                </div>
            {/each}
        </div>
    {/each}

<div class="mb-64"></div>
