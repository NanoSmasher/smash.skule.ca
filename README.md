## UofT Smash Website theme

Website was inspired by the [Google Material Design](https://www.google.com/design/spec/material-design/introduction.html#introduction-goals). It is built on top of [Twitter Bootstrap](http://getbootstrap.com/) like 99% of websites but it certainly doesn't feel that way.

The website is currently being hosted by the [UofT Skule Smash Club](http://smash.skule.ca). Check it out!

## Why do I have _site here?

Because [Ruby](https://www.ruby-lang.org/en/) is not installed on some *.skule.ca domains and that can't be changed.

## Managing the website

### Overview

This website was built with Jekyll. Jekyll is a static site builder that uses:

 - Liquid Templating System
 - Markdown Post Rendering
 - Leagues Of Legends (lol)

The following pages read from the default layout

```
archive.html
index.html
locations.html
rankings.html
tournaments.html
```

**index.html** for example will have the html start building from **_layouts/default.html**. As you can see in the file, there is an {{ include }} liquid tag. Thatmean it will pull all the data from the filename found in the **_include** folder. But here's the catch; since you are still reading it from the **/index.html** the base path is "**/**" and not **_layouts** or **_includes**. Take a look at **_site/index.html** to see the completed website.

The **about.html** page starts at **_layouts/page.html**, while all of the tournament threads/posts read from **_layouts/post.html**. Hierarchy of this site looks like this: *layout file* > *include files* > *actual files(html/css/js)* > *site. or page. variables*

### Maintaining the site

Do not touch **_site**. Ever. Jekyll will automatically update the folder. What you actually manage is:

 - **_posts**: To add or update a tournament and blurb. Follow the [markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and you should be fine.
 - **img**: To add or update an image. Make sure the images are the correct dimensions/filenames.
 - **_data/location.json**: To add, remove, or update a location and blurb
 - **_data/ranking.json**: To add, remove, or update a players ranking and blurb
 - **_config.yml**: For miscellaneous reason like changing site colors or site description or social media links

### Setting it up is as easy as 1, 2, 3!

 1. Install Ruby, RubyDevKit, and Jekyll. Windows users can just download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (It's about one 1GB!)
 2. Go to the root folder where **index.html** is found and type in:

    ```
    jekyll build
    ```
 3. FTP (or manual copy files one by one) everything in the **_site** folder to wherever you want. It wil most likely be the **/public_html** folder. If you are lazy, I've prepared a [small script that syncs a repo](https://gist.github.com/NanoSmasher/cdce664c6cd90c323108) for you.

Voila! Thanks for reading ~ Nanosmasher
