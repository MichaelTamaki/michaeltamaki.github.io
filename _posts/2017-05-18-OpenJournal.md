---
layout: post
title:  "Creating OpenJournal"
date:   2017-05-18 01:00:00 -0700
categories: project
img: "openjournal_img.png"
---
Check out the [Github Repository](https://github.com/MichaelTamaki/OpenJournal) and [live site](https://warm-reaches-94999.herokuapp.com/)!

# Background
During my second year's winter break, I met with some old high school friends to discuss an app idea. Jacob and Kevin were interested in making an app that promotes mental health. I really liked their motivation and passion for the idea, and so I joined their team to work on a web app. After researching mental health resources and talking to people, we found that it would be most effective to lead users to get expert help when necessary and connect users to a supportive community.

Currently, we have a lot of ideas to achieve these goals. OpenJournal was started as a prototype to test out ideas and to learn the technologies necessary for the actual app. At LA Hacks 2017, I made a working version, with the ability to create and view journals with Django/PostGreSQL, as well as user authentication via Facebook using Python Social Auth. I set everything up on Github such that there were clear instructions to set up a development environment for future teammates, and the website got fully deployed on Amazon Web Services!

![OpenJournal Screenshot]({{ site.url }}/images/openjournal1.png)

# Lessons Learned
Before I went into the weekend, I assumed that deploying would be the easiest part of the project. My mind quickly changed 24 hours into the hackathon while I was dealing with deployment issues. Setting up the static files was frustrating, as I often was left with an error that my website could not find the CSS files. As seen by the 1000's of commits, I had to figure out how to configure the Elastic Beanstalk settings so the static files would work, but I had to commit every time I made a change. The next time I go through this process of making several tiny commits, I'll try to squash them into a singular commit. However, it was helpful to go throught he process of learning how to use Amazon Web Services.

Another issue I ran into was the secret keys. Originally I just had my secret keys for Django and Facebook auth in my `settings.py` file and published to the public. I quickly realized that this is a major security issue, and thus [I had to remove it from my commit history](https://help.github.com/articles/removing-sensitive-data-from-a-repository/), and move the keys to a secret file. This ended up doubling the number of commits I have on Github. In the future, I will have to look into good practices of other open source projects on how they keep secret keys.

Coming back to the problems of deployment, about a month after the hackathon, I got an email that I was charged $572 for using Amazon RDS Service for PostGreSQL. *What???* When I followed a tutorial I assumed everything was covered under the Free Tier. After contacting support, I learned that I made a `db.m3.2xlarge` instance, which was not free. *Yikes.* Fortunately, they gave me a refund and removed all charges from my account. I ended up removing my instances from Amazon Web Services temporarily. Next time I will be more careful in reviewing what services I am using.

![AWS Screenshot]({{ site.url }}/images/openjournal2.png)

# Next Steps
- After finals, [I deployed the website on Heroku](https://warm-reaches-94999.herokuapp.com/)! Since the Heroku Free Tier is much more clear, I shouldn't run into a $600 charge again! I want to futher explore Heroku, especially the pipeline with Github integration.  
- Improve the user experience. Right now it has functionality, but it is not easy for users. I'm planning on adding better options to view journal entries, perhaps by converting the web app to a single page app with React.  
- Add Bootstrap to improve styling and to make the web app mobile friendly. The CSS is extremely basic. I want to make the interface more attractive with Bootstrap and maybe Sass.  

# Final Thoughts
It's funny how much time and effort was put into figuring out how to deploy the website. I gained a new found respect for the engineers who deal with maintaining the production code, especially those who work with Amazon Web Services. In the future, I want to better understand deployment, so that I can spend more time focusing on actual development. Thank you to the LA Hacks planners at UCLA for their hospitality, and thank you to my friends for inspiring this project!