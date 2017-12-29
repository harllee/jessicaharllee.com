---
title: Structured return policies
published: false
date: 2017-08-21 21:07:00 Z
company: Etsy
year: 2017
description: Increasing the number of Etsy sellers with clear return policies.
assets:
- path: "/uploads/etsy_sd_listing_form.jpg"
  name: etsy_sd_listing_form
---


In the summer of 2017, we did a series of small, iterative projects focused on improving the quality of listing information on Etsy. These projects started with us asking what information buyers relied on most when evaluating a listing on Etsy, then figuring out how to collect that information from our sellers. Since Etsy doesn't own the inventory on the platform, it's on us to educate our sellers on what information is going to help them make sales. An important consideration for buyers is knowing whether an item can be returned. However, most shops on Etsy did not have their return policies defined in a clear, structured way. We decided to work on a quick project focused on increasing the number of shops with a clearly defined return policy.


## Historical context

Etsy sellers can dictate their own return policies on the platform. For many years, though, our interface for doing so was very basic; sellers defined their return policies in free-form textareas. This was very flexible for sellers, but ultimately meant that we weren't collecting return policies in a structured way.

We knew that buyers wanted to see on a listing page whether or not an item could be returned when making purchasing decisions. With the open-ended return policies, there was no way we could parse what sellers had written into a simple yes or no. To solve for this, we introduced "templated policies" in 2015, which included a section where sellers would mark whether or not they accepted returns. By collecting return information in a structured way, it would finally allow us to clearly show a seller's policy on the listing page.

There were a number of issues with templated policies that led to low seller adoption; we didn't force sellers to adopt templated returns and instead allowed them to opt-in. For the past two years, we had two versions of seller return policies in the wild, and weren't in a place where we had enough seller adoption to show 


## Our approach

Getting sellers to fully adopt templated policies would require huge updates to the way they worked, which we weren't in a position to do. We only had time for an iteration of policies, not an overhaul.

Since we were in a time crunch, we decided to focus on collecting the best return information that we could from the sellers who were still using untemplated policies. We hoped that adding *some* structured information to the untemplated version of policies would be straightforward enough for sellers to answer.

Ultimately, we wanted to have high enough adoption of templated returns, be it through templated or untemplated, that we could add a returns module onto the listing page for buyers.


## What questions to ask

We took inventory of everything that we asked from sellers in templated return policies:
- do you accept returns? Yes or no
- do you accept exchanges? Yes or no
- do you accept cancellations? Yes or no
- After how many days can a buyer return/exchange/cancel?
- Are there any types of items that cannot be returned? (Such as food, intimate apparel, or custom items)

One idea that we had early on was to simplify the return policy questions we were adding to untemplated policies. The thought was that we could dramatically increase coverage if sellers only had one question to answer rather than five. The downside of that, though, would be that we would have very inconsistent information across all version of policies. If we did an overhaul of policies in the future, we wouldn't want to create more work for the sellers who had already given us return information. We decided that a huge tenet of our work was going to be future-proofing as much as possible.

While this would result in a third state of policies (untemplated, templated, and this new "hybrid", for those keeping track), it would mean that we'd have the exact same information about returns for sellers with templated and hybrid returns. This would keep things cleaner in the long-run, while being a little unfortunate for us in the short-term.


## UI updates

Since we were revisiting the return policy UI for the first time since 2015, we made some small UI updates to tighten things up and to use some of our more modern toolkit patterns, such as the switch. We also took the opportunity to unify the styling across platforms.

We also revisited the We still wanted to allow sellers to opt-in to using fully templated policies, but 


## "Unpublished" state

One of the biggest challenges with this work was putting something that was new and unpublished to buyers in an interface that showed information *already visible* to buyers. Policies are a touchy subject for sellers, and rightfully so; their policies dictate things like whether buyers can raise cases against them for any issues they have. We knew we needed to draw a lot of attention to this module to make sure that sellers didn't accidentally publish something that they didn't accept. To draw attention and make it hard to miss, we moved the returns section to the top of the policy page. We used a light orange panel around the entire structured returns section when a seller hadn't published their returns yet to communicate to sellers that it was both new and unconfirmed. Once published, the panel would go away and the form fields would appear as normal.

We also wanted this new information to be easy for sellers to fill out; after all, they were telling us information that they already knew the answer to. To help speed things along, since we knew most sellers did accept returns, we pre-filled the fields based on what we considered a standard return policy to be (and our own recommendations).

Finally, to make sure we didn't publish anything that the seller didn't agree with, we added a confirm dialog before publishing.



## Gaining confidence and launch

Before launch, we tested a sample marketing email with sellers to see if they understood what the update to policies entailed and to understand seller sentiment. Again, policies can be a touchy subject for sellers, and wanted to make sure that we were communicating as clearly as possible. It's a good thing we tested it, because we saw some confusion around what we were asking them to do. Some sellers thought we were forcing them to accept returns on Etsy, when really we just wanted them to share what their return policy was. We quickly adjusted our messaging. 

After ramping the new UI to sellers with untemplated policies, we sent out a (revised) targeted marketing email. In the email, we mentioned that this was information buyers wanted to see before making a purchase as a way to help them understand the importance. We immediately saw adoption of hybrid policies spike, and even saw a slight increase in adoption of templated policies (not our goal, but a nice side effect!). A few months after the release of hybrid policies, we've seen enough adoption to be able to start messaging return policy information on the listing page.



<div class="col-group text-small mt-sm-4 mb-sm-4">
	<div class="col col-sm-12 col-md-3">
		<p class="bold mb-sm-0 mb-md-1">Role</p>
	</div>
	<div class="col col-sm-12 col-md-9">
		<p class="mb-sm-1">Design, front-end development</p>
	</div>
	<div class="col col-sm-12 col-md-3">
		<p class="bold mb-sm-0 mb-md-1">Core team</p>
	</div>
	<div class="col col-sm-12 col-md-9">
		<p class="mb-sm-1">1 product manager, 1 engineering manager, 2 engineers, 1 product marketing manager</p>
	</div>
	<div class="col col-sm-12 col-md-3">
		<p class="bold mb-sm-0 mb-md-1">Released</p>
	</div>
	<div class="col col-sm-12 col-md-9">
		<p class="mb-sm-1">July 2017</p>
	</div>
	<div class="col col-sm-12 col-md-3">
		<p class="bold mb-sm-0 mb-md-1">View live</p>
	</div>
	<div class="col col-sm-12 col-md-9">
		<p class="mb-sm-1"><a href="http://etsy.com/your/shops/me/tools/listings">Listings Manager</a> (for Etsy sellers only)</p>
	</div>
</div>
