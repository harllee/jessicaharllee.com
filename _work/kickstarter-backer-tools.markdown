---
title: Kickstarter backer tools
date: 2013-10-21 17:07:00 -04:00
published: false
company: Kickstarter
year: 2013
description: An overhaul of two features backers use to keep up with their backed
  projects.
share_image: "/uploads/work-backer-history-share.jpg"
assets:
- path: "/uploads/kickstarter-backer-tools-activity-social.jpg"
  name: kickstarter-backer-tools-activity-social
- path: "/uploads/kickstarter-backer-tools-activity-success.jpg"
  name: kickstarter-backer-tools-activity-success
- path: "/uploads/kickstarter-backer-tools-activity.jpg"
  name: kickstarter-backer-tools-activity
- path: "/uploads/kickstarter-backer-tools-history-checkbox.jpg"
  name: kickstarter-backer-tools-history-checkbox
- path: "/uploads/kickstarter-backer-tools-history-modal.jpg"
  name: kickstarter-backer-tools-history-modal
- path: "/uploads/kickstarter-backer-tools-history.jpg"
  name: kickstarter-backer-tools-history
---

When a project hits its funding goal on Kickstarter, it's only the first milestone in the larger process of making a project come to life. As the project progresses and becomes more fully developed, creators use updates and surveys to keep their backers informed of how the project is going. The two primary pages for keeping track of backed projects, the backer history and the activity feed, weren't friendly toward people with more than a couple of backed projects and our support team frequently got requests from backers for more robust tools. As people backed more projects, we wanted to come up with better ways for backers to keep up with project activity, quickly access reward details, and stay up-to-date with the fulfillment process.


## Backer history

The backer history needed a big overhaul. It serves as a transactional history, so it was full of specifics but was hard to wade through the details. It was the only place on the site where you could find out all of the details about your backed projects, but the information wasn't prioritized well. It worked in the early days of Kickstarter but needed to work for the growing number of repeat backers, too.

<div class="jh-text-cms__img jh-text-cms__img--scrollable">
  <div class="jh-text-cms__img--scrollable__container">
    <img src="/uploads/kickstarter-backer-tools-history.jpg">
  </div>
  <p class="jh-text-cms__img__caption">The updated backer history design.</p>
</div>

The first thing we did was chose the most important bits of information about a project: the name, the project image, the amount pledged. We split the projects into three tables based on pledge state; active pledges (live projects) were at the top, followed by successful projects, and then uncollected pledges (unsuccessful projects, cancelled pledges, and anything that was never going to collect). This meant that we could also tailor the table columns to information specific to the pledge state; which reward you selected was irrelevant for a cancelled project. These columns were also sortable, which was a godsend for anyone who had backed a couple of dozen projects.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/kickstarter-backer-tools-history-modal.jpg">
  <p class="jh-text-cms__img__caption">The modal showing all relevant information about your pledge.</p>
</div>

If you wanted to investigate a little deeper into a project (what address did I put in the survey? When is this supposed to ship?), we included all relevant reward information in a modal. We added the ability to include a personal note about a project to keep track of things like add-ons and also included your message threads if you wanted to reach out about a changed address. Many rewards can take months to fulfill, so we wanted it to be super easy for backers to find all of their history with a project.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/kickstarter-backer-tools-history-checkbox.jpg">
  <p class="jh-text-cms__img__caption">Backers now had the ability to track whether they received their reward.</p>
</div>

One of the most exciting parts about this project was adding in a checkbox so backers could say "got it!" when they received a reward. This was an oft-requested feature from frequent backers that made a long list of projects a little less daunting.


## Activity feed

The activity feed aggregates all of the project updates that a backer gets, any friend backings, and any project state changes all into one place, which means that this page houses a lot of different types of information. We wanted to create more hierarchy between the content from projects that you've backed and projects that your friends backed.

<div class="jh-text-cms__img jh-text-cms__img--scrollable">
  <div class="jh-text-cms__img--scrollable__container">
    <img src="/uploads/kickstarter-backer-tools-activity.jpg">
  </div>
  <p class="jh-text-cms__img__caption">The updated activity feed design.</p>
</div>

We decided that first and foremost this page was about project updates. We truncated the body of the update and prominently displayed any media to make it easy to decide if you wanted to expand to read the whole update. The updates have a lot of visual weight so a backer can easily skim through a lot of activity items to see when there's a new update.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/kickstarter-backer-tools-activity-social.jpg">
  <p class="jh-text-cms__img__caption">Examples of social activity in the feed.</p>
</div>

We grouped social notifications if multiple friends backed the same project to decrease the noise (a common occurrence for heavy social users). They also had less visual prominence to allow the project updates to pop a little more. Finally, we pumped up the volume of project success notifications to make them loud and celebratory.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/kickstarter-backer-tools-activity-success.jpg">
  <p class="jh-text-cms__img__caption">A notification for a successfully funded project, complete with final funding stats.</p>
</div>

---


## Project details

<div class="jh-text-cms__project-details">
  <div>
    <h3>Role</h3>
  </div>
  <div>
    <p>Design, development</p>
  </div>
  <div>
    <h3>Core team</h3>
  </div>
  <div>
    <p>1 product manager, 2 engineers</p>
  </div>
  <div>
    <h3>Released</h3>
  </div>
  <div>
    <p>January 2014</p>
  </div>
  <div>
    <h3>View live</h3>
  </div>
  <div>
    <p><a href="https://www.kickstarter.com/profile/backings">Backer history</a>, <a href="https://www.kickstarter.com/activity">Activity feed</a> (for Kickstarter users only)</p>
  </div>
</div>
