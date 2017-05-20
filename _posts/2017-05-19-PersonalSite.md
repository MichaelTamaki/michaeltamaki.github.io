---
layout: post
title:  "My Personal Site"
date:   2017-05-19 01:00:00 -0800
categories: project
img: "personalsite_img.png"
---
Check out the [Github Repository](https://github.com/MichaelTamaki/michaeltamaki.github.io) and *surprise*! You're on the site!

# Introduction
To make implementation with Github pages easy, I used Jekyll to power my blog. It gave me the power to be able to create blog posts from markdown files. I based my site off of the default theme, minima. To suit my needs, I ended up changing most of the HTML layouts and put my spin on the Sass style. The home/landing screen was made from scratch, and I changed the default blog listing to also include an image, along with the title. This allowed me to keep the simple, minimalistic style of the original, but added my own individual color to the theme.

# Responsive Design and Conquering the Evil Flexbox
Originally, I had not planned to use responsive design for my website, as I assumed most visitors to my site would be using a larger screen. However, since the original minima theme had responsive design, it would be weird to have parts of my site NOT be accessible via phones/tablets, and I thought it would be convinient if any web-enabled device could view my site.

One of the things that bothers me the most about web design is vertically centering elements. I tend to try hacky solutions, such as using `transformY` to manually center. However, I ended up finding that this did not make mobile viewing very pretty...

![Personal Site Screenshot]({{ site.url }}/images/personalsite1.png)

My head would get chopped off... Not great. And thus, I turned to my greatest of enemies, the flexbox. In the past, I could very rarely get it to work. My friends often thought that I was cursed by the flex gods. However, about an hour or two into the process of adding flex, the flex gods broke the curse. They blessed me with knowledge, via the Google Chrome inspector, showing me that I had to give the html, body, and wrapper classes a 100% height. *Thank you flex god.* I feel a lot more comfortable with flex now. Then, I checked the mobile site. My head was still chopped off. Turns out the 100% height wasn't big enough for the iPhone 5 in landscape mode to contain both my head AND the text. Thus, for phone screens, I had to ditch the vertical centering, as I had to switch the height to auto... So I didn't quite conquer the mobile phone screen, but I did conquer flexbox!

If you are using a phone and find a weird visual bug, please let me know! I'm still learning and it would greatly help me.

# Unleashing the Power of Jekyll
While building this site, I found that there were a lot of ways that I could customize the theme and really make the site my own. The most significant feature I made was the blog post listings. I added a field to the front matter for a preview image file name. This allowed me to add an image with the title when listing my blog posts. This helped add color and more detail in my blog listing, rather than just a title.

![Personal Site 2 Screenshot]({{ site.url }}/images/personalsite2.png)

# Final Thoughts
Making this site was a very fun personal project. I had a great time messing around with Sass styling, as well as writing the blog posts. In the future, I hope to improve the user interface for mobile devices. I also want to improve the about page so it is not just an embeded Box pdf of my resume. Overall, I am proud of my work and I hope to continue learning ways to improve my user experience on this website, and for my future projects.