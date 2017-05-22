---
title: Kickstarter backer tools
company: Kickstarter
position: 1
color: blue
bg-color: yellow
description: An overhaul of two features backers use to keep up with their backed
  projects.
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


<h3 class="mt-sm-4">Backer history</h3>

The backer history needed a big overhaul. It serves as a transactional history, so it was full of specifics but was hard to wade through the details. It was the only place on the site where you could find out all of the details about your backed projects, but the information wasn't prioritized well. It worked in the early days of Kickstarter but needed to work for the growing number of repeat backers, too.

<div class="browser mt-sm-4 mb-sm-4">
      <div class="browser-img">
          <img src="/uploads/kickstarter-backer-tools-history.jpg" class="display-block m-sm-0">
      </div>
</div>

The first thing we did was chose the most important bits of information about a project: the name, the project image, the amount pledged. We split the projects into three tables based on pledge state; active pledges (live projects) were at the top, followed by successful projects, and then uncollected pledges (unsuccessful projects, cancelled pledges, and anything that was never going to collect). This meant that we could also tailor the table columns to information specific to the pledge state; which reward you selected was irrelevant for a cancelled project. These columns were also sortable, which was a godsend for anyone who had backed a couple of dozen projects.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">
<img src="/uploads/kickstarter-backer-tools-history-modal.jpg">
</div>

If you wanted to investigate a little deeper into a project (what address did I put in the survey? When is this supposed to ship?), we included all relevant reward information in a modal. We added the ability to include a personal note about a project to keep track of things like add-ons and also included your message threads if you wanted to reach out about a changed address. Many rewards can take months to fulfill, so we wanted it to be super easy for backers to find all of their history with a project.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">
<img src="/uploads/kickstarter-backer-tools-history-checkbox.jpg">
</div>

One of the most exciting parts about this project was adding in a checkbox so backers could say "got it!" when they received a reward. This was an oft-requested feature from frequent backers that made a long list of projects a little less daunting.


<h3 class="mt-sm-4">Activity feed</h3>

The activity feed aggregates all of the project updates that a backer gets, any friend backings, and any project state changes all into one place, which means that this page houses a lot of different types of information. We wanted to create more hierarchy between the content from projects that you've backed and projects that your friends backed.

<div class="browser mt-sm-4 mb-sm-4">
      <div class="browser-img">
           <img src="/uploads/kickstarter-backer-tools-activity.jpg" class="display-block m-sm-0">
      </div>
</div>

We decided that first and foremost this page was about project updates. We truncated the body of the update and prominently displayed any media to make it easy to decide if you wanted to expand to read the whole update. The updates have a lot of visual weight so a backer can easily skim through a lot of activity items to see when there's a new update.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">

<img src="/uploads/kickstarter-backer-tools-activity-social.jpg">

</div>

We grouped social notifications if multiple friends backed the same project to decrease the noise (a common occurrence for heavy social users). They also had less visual prominence to allow the project updates to pop a little more. Finally, we pumped up the volume of project success notifications to make them loud and celebratory.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">
<img src="/uploads/kickstarter-backer-tools-activity-success.jpg">
</div>


<div class="col-group text-small mt-sm-4 mb-sm-4">
<div class="col col-sm-12 col-md-3">
<p class="bold mb-sm-0 mb-md-1">Role</p>
</div>
<div class="col col-sm-12 col-md-9">
<p class="mb-sm-1">Design, development</p>
</div>
<div class="col col-sm-12 col-md-3">
<p class="bold mb-sm-0 mb-md-1">Team</p>
</div>
<div class="col col-sm-12 col-md-9">
<p class="mb-sm-1">Ellen Chisa (product manager), Christopher Wright (engineer), Samuel Cole (engineer)</p>
</div>
<div class="col col-sm-12 col-md-3">
<p class="bold mb-sm-0 mb-md-1">Released</p>
</div>
<div class="col col-sm-12 col-md-9">
<p class="mb-sm-1">January 2014</p>
</div>
<div class="col col-sm-12 col-md-3">
<p class="bold mb-sm-0 mb-md-1">View live</p>
</div>
<div class="col col-sm-12 col-md-9">
<p class="mb-sm-1"><a href="#">Backer history</a>, <a href="#">Activity feed</a> (for Kickstarter users only)</p>
</div>
</div>
