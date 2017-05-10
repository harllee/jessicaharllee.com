---
title: What blameless really means
date: 2014-03-10 13:40:00 Z
color: green
tags:
- dev life
- reflections
- etsy
---

Part of Etsy culture is [blameless post-mortems](http://codeascraft.com/2012/05/22/blameless-postmortems/). It's a term I've heard used a lot and up until last week I thought I thoroughly understood. Etsy supports an environment of learning, people make mistakes, don't point fingers, etc. All good things and things I believe in.

On Friday I was involved in a smallish incident on the site; I was driving a deploy and, long story short, the deploy didn't go perfectly. Nothing serious happened and the site was fine so we didn't have a post-mortem, but I had that terrible I-did-something-bad feeling in the pit of my stomach all day long. True to the culture, no one at Etsy pointed fingers (as expected), but I still felt pretty awful and like I could have done better.


One of the engineers I work with, [Ian](https://twitter.com/indec), graciously messaged me a few hours later to walk me through what happened in our own little post-mortem. As I was walking him through the timeline of what happened, he helped me realize two things:

1. When I was explaining what happened, I kept interjecting with "I should have...". Hindsight is 20/20, and I didn't have the knowledge that I do now of what would happen, so it's not fair to myself to make those statements.
2. Looking back at exactly what happened, there were things that explained why I was confused or why I reacted the way I did. I didn't arbitrarily make the decisions I made; rather, I was reacting to what I had in front of me.

It then occurred to me that the "blameless" part of a post-mortem doesn't just mean that you shouldn't blame those around you for what happened. I was blaming myself. I felt an incredible amount of guilt for not doing a better job, embarrassment for messing up, and frustration for not doing what, hours later, seemed obvious. The guilt prevented me from going back on my own and reviewing what actually happened because I didn't really want to relive it. I handle personal failure terribly.

If I hadn't gone back to reevaluate what happened and where things broke down, I wouldn't have realized I wasn't at fault and, more importantly, realized why I did what I did. The awful feeling I was experiencing was in fact blame, and I would have thought back to that stressful deploy with really negative feelings instead of with a real understanding of what happened.

Ian pointed out some learnings from this, the biggest of which was to always ask questions if you're unsure. But I think the most valuable thing I learned was that blameless applies first and foremost to yourself.
