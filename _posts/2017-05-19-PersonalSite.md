---
layout: post
title:  "My Personal Site"
date:   2017-05-19 01:00:00 -0700
categories: project
img: "personalsite_img.png"
---
Check out the [Github Repository](https://github.com/MichaelTamaki/michaeltamaki.github.io) and *surprise*! You're on the site!

# Introduction
To make implementation with Github Pages easy, I used Jekyll to power my blog. It gave me the power to be able to create blog posts from markdown files. I based my site off of the default theme, minima. To suit my needs, I ended up changing most of the HTML layouts and Sass styles. The home/landing screen was made from scratch, and I changed the default blog listing to also include an image, along with the title. This allowed me to keep the simple, minimalistic style of the original, but added my own individual personality to the theme.

# Responsive Design
For all the new pages and layouts I created, I tried to replicate the responsive design found in the existing minima design. One the challenges was my home screen. My original plan was to have one column for my picture, and another for site navigation buttons. On a small phone screen, it would compact into a single column. I also attempted to vertically center the elements, which worked on larger screens, but this did not work as intended on an iPhone 5 in landscape mode.  

![Personal Site Screenshot]({{ site.url }}/images/personalsite1.png)

I tried using things like flexbox, but eventually I found that the small height of the phone screen could not fit all the elements in the site. To solve this issue, I had to adapt the height of the site to be either 100% of the screen height, or the height of the photo plus site navigation in a single column. 

Other aspects of responsive design can be seen in the footer, where the two columns will combine into a single column when the screen is too thin. The blog titles also shrink on phone screens so they can fit in one line.

# Unleashing the Power of Jekyll
While building this site, I found that there were a lot of ways that I could customize the theme and really make the site my own. The most significant feature I made was the blog post listings. I added a field to the front matter for a preview image file name. This allowed me to add an image with the title when listing my blog posts. This helped add color and more detail in my blog listing, rather than just a title. The Liquid language for HTML was also very helpful. At the beginning of each blog post, I calculated the reading time based on the length of the content. The number of words can be found with

{% raw %}`{% assign words = content | number_of_words %}`{% endraw %}

This can then be converted into minutes:

{% raw %}`{{ words | divided_by:180 }} mins`{% endraw %} (assuming reading at 180 words per minute)

![Personal Site 2 Screenshot]({{ site.url }}/images/personalsite2.png)

# Final Thoughts
Making this site was a very fun personal project. I had a great time messing around with Sass styling, as well as writing the blog posts. In the future, I hope to improve the user interface for mobile devices. I also want to improve the about page so it is not just an embeded Box pdf of my resume. Overall, I am proud of my work and I hope to continue learning ways to improve my user experience on this website, and for my future projects.