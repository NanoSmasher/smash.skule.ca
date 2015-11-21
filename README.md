UofT Smash Website theme
========================

Website was inspired by the [Google Material Design](https://www.google.com/design/spec/material-design/introduction.html#introduction-goals). It's not supposed to be a complete copy but rather an interpretation of the core ideals of the project. It is built on top of [Twitter Bootstrap](http://getbootstrap.com/) like 99% of websites but it certainly doesn't feel that way.

The website is currently being hosted by the [UofT Skule Smash Club](http://smash.skule.ca). Check it out!

Why do I have _site here?
------------------------

Because [Ruby](https://www.ruby-lang.org/en/) is not installed on some *.skule.ca domains and that can't be changed. Also why I have to use submit a cron job that [syncs the repo](https://gist.github.com/NanoSmasher/cdce664c6cd90c323108) because it doesn't have git either!

Managing the website
------------------------

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

**index.html** for example will have the html start building from **_layouts/default.html**. As you can see in the file, there is a {{ include }} liquid tag. That means it will pull all the data from the filename found in the **_include** folder. But here's the catch; since you are still reading it from the **/index.html** the base path is "**/**" and not **_layouts** or **_includes**. Take a look at **_site/index.html** to see the built file that is actually served to the user.

The **about.html** page starts at **_layouts/page.html**, while all of the tournament threads read from **_layouts/post.html**. Hierarchy of this site looks like this: *layout file* > *include files* > *actual files(html/css/js)* > *variables*.

### Maintaining the site

Do not touch **_site**. Ever. Jekyll will automatically update the folder. What you actually manage is:

 - **_posts**: To add or update a tournament and blurb. Follow the [markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and you should be fine.
 - **img**: To add or update an image. Make sure the images are the correct dimensions/filenames.
 - **_data/location.json**: To add, remove, or update a location and blurb
 - **_data/ranking.json**: To add, remove, or update a players ranking and blurb
 - **_config.yml**: For miscellaneous reason like changing site colors or site description or social media links

### Setting it up is as easy as 1, 2, 3!

 1. Install Ruby, RubyDevKit, and Jekyll. Windows users can just download [Portable Jekyll](https://github.com/madhur/PortableJekyll/releases) and run setpath.cmd. (Some zip programs have problems extracting so make sure to cross check with the repository)
 2. Go to the root folder where **index.html** is found and type in:

    ```
    jekyll build
    ```
 3. FTP everything in the **_site** folder to wherever you want. It wil most likely be the **/public_html** folder. If you are lazy, I've prepared a [small script that syncs a repo](https://gist.github.com/NanoSmasher/cdce664c6cd90c323108) to do it for you.

Things to do
------------

- [x] Locations page: Create a checkmark table
- [x] Rankings: convert into a Javascript Object (This will stop the entire **_site** folder from updating every single time)
- [ ] About page: dropdown Q&A tabs
- [x] Add upcoming tournament right below main pages
- [x] Game Flexible CSS
- [ ] Get better images

Voila! Thanks for reading ~ Nanosmasher
