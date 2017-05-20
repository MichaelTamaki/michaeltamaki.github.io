---
layout: post
title:  "Creating OpenJournal"
date:   2017-05-18 01:00:00 -0800
categories: project
img: "openjournal_img.png"
---
Check out the [Github Repository](https://github.com/MichaelTamaki/OpenJournal) and [live site](https://warm-reaches-94999.herokuapp.com/)!

# Background
During second year's winter break, I met with some old high school friends to discuss an app idea. Jacob and Kevin were interested in making an app that promotes mental health, with friends and family as inspiration. I really liked their motivation and passion for the idea, and so I jumped on to work on the web app, while they worked on a mobile app. We talked with some mental health advocates, and learned about the best approaches to using technologies for the app, such as leading users to get expert help when necessary and connecting users to a supportive community.

Currently, we have a lot of ideas. However, I needed a way to learn the technologies to produce the web app. And thus, I got the idea to start OpenJournal, with the goal of making a prototype for the actual app. At LA Hacks 2017 in my spring break, I created functionality of creating journal entries and logging in via Facebook. I set everything up on Github such that there were clear instructions to set up a development environment for future teammates, and I got the website fully deployed on Amazon Web Services!

# Technologies Used
- Django: I already had experience with Django in my previous experiences, but I never created a full web app from scratch before.  
- Python Social Auth: When thinking about the web app, I thought that it would be best to make authentication through trusted services, such as Facebook. This also removed the need to remember a username/password for the web app.  
- Amazon Web Services: Perhaps the most grueling part of this experience was deploying. Out of the entire weekend, I might have spent a third of my development time trying to get the website to read the CSS files and connect the database.  

![OpenJournal Screenshot]({{ site.url }}/images/openjournal1.png)

# Lessons Learned
Before I went into the weekend, I assumed that deploying would be the easiest part of the project. I couldn't have been more wrong. It was infuriating getting the error that the website could not read my CSS files, so I was often left with an unstyled deployed website. Additionally, (as seen by the 1000's of commits) I had to figure out how to configure the Elastic Beanstalk settings so it would work, but I had to commit every time I made a change. If I were to go through this again, I would make a Pull Request so I could squash all the changes into a single commit. It is not pretty to have 52 commits with each commit being a line of change.

Keeping secrets while keeping the code public on Github was tough. Originally I just had my secret keys for Django and Facebook auth in my `settings.py` file and published to the public. When I realized this problem, [I had to remove the file from my commit history](https://help.github.com/articles/removing-sensitive-data-from-a-repository/), and move the keys to a secret file. This ended up doubling the number of commits I have on Github. Next time, I'll have to research better ways to keep secret keys from the public.

Coming back to the problems of deployment, about a month after the hackathon, I got an email that I was charged $572 for using Amazon RDS Service for PostGreSQL. *Huh???* When I followed a tutorial I assumed everything was covered under the Free Tier. After contacting support, I learned that I made a `db.m3.2xlarge` instance, which was not free. *Yikes.* Fortunately, they gave me a refund and removed all charges from my account. This experience scared me away, and I ended up deleting all instances from my account just in case. 

![AWS Screenshot]({{ site.url }}/images/openjournal2.png)

# Next Steps
- After finals, [I deployed the website on Heroku](https://warm-reaches-94999.herokuapp.com/)! The free tier is much more clear, so hopefully I won't find a $600 charge in the future! I want to futher explore Heroku, especially the pipeline with Github integration.  
- Improve the user experience. Right now it has functionality, but it is not easy for users. I'm planning on adding better options to view journal entries, perhaps by converting the web app to a single page app.  
- Add Bootstrap to improve styling and to make the web app mobile friendly. The CSS is extremely basic. I want to make the interface more attractive.  

# Final Thoughts
It's funny how much time and effort was put into figuring out how to deploy the website. I gained a new found respect for the engineers who deal with maintaining the production code, especially those who work with Amazon Web Services. In the future, I want to better understand deployment, so that I can spend more time focusing on actual development. Thank you to the LA Hacks planners at UCLA for their hospitality, and thank you to my friends, Jacob and Kevin, for onboarding me onto the team! Hopefully we will be able to fully realize our ideas in the future.