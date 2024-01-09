<script>
    import { base } from "$app/paths";
</script>

<div class="grid grid-cols-[150px_1fr] gap-x-4">
    <img
        class="mr-4 col-start-1 md:row-span-3 row-span-2 self-stretch rounded-lg object-cover"
        src="{base}/profile.jpg"
    />
    <div class="col-start-2 leading-none">
        <h1 class="text-4xl inline-block pr-1">Kevin Black</h1>
        <span class="text-sm font-raleway inline-block">
            <a href="mailto:kevin3.black@gmail.com">Email</a>
            |
            <a
                href="https://scholar.google.com/citations?user=axX7PCwAAAAJ&hl=en"
                >Scholar</a
            >
            | <a href="https://github.com/kvablack">GitHub</a>
            | <a href="https://twitter.com/kvablack">Twitter</a>
        </span>
    </div>

    <p class="mt-2 col-start-2">
        Hi, I'm Kevin. I'm currently a PhD student at <a
            href="https://bair.berkeley.edu/">Berkeley AI</a
        >
        advised by
        <a href="https://people.eecs.berkeley.edu/~svlevine/"
            >Professor Sergey Levine</a
        >. I am graciously supported by the NSF Graduate Research Fellowship.
    </p>

    <p class="mt-2 md:col-start-2 md:col-span-1 col-start-1 col-span-2">
        Previously, I graduated from UT Austin where I worked with <a
            href="https://people.cs.umass.edu/~sniekum/"
            >Professor Scott Niekum</a
        >. Before that, I worked on the
        <a href="https://en.wikipedia.org/wiki/Seeker_(spacecraft)"
            >Seeker mission</a
        >
        as part of the
        <a href="https://sites.utexas.edu/tsl/">Texas Spacecraft Laboratory</a>.
        I was a member of the
        <a href="https://www.cs.utexas.edu/turing-scholars">Turing Scholars</a>
        and <a href="http://deansscholars.org/">Dean's Scholars</a> honors programs.
    </p>
</div>
