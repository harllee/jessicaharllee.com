---
title: Gift wrap on Etsy
date: 2017-11-21 16:07:00 -05:00
published: false
company: Etsy
year: 2017
description: Let buyers pay sellers to gift wrap their orders.
assets:
- path: "/uploads/gift-wrap-before-listing.jpg"
  name: gift-wrap-before-listing
- path: "/uploads/gift-wrap-settings-round1.jpg"
  name: gift-wrap-settings-round1
- path: "/uploads/gift-wrap-settings-round2.jpg"
  name: gift-wrap-settings-round2
- path: "/uploads/gift-wrap-price-recommended.jpg"
  name: gift-wrap-price-recommended
- path: "/uploads/gift-wrap-listingpage.gif"
  name: gift-wrap-listingpage
- path: "/uploads/gift-wrap-cart.jpg"
  name: gift-wrap-cart
- path: "/uploads/gift-wrap-cart-interactions.gif"
  name: gift-wrap-cart-interactions
- path: "/uploads/gift-wrap-giftreceipt.jpg"
  name: gift-wrap-giftreceipt
---

Etsy is the perfect destination for finding a one-of-a-kind gift for someone special. From past qualitative research with buyers, we knew that a significant number of orders on Etsy are gifts, especially leading up to major holidays. However, the winter holiday shopping season tends to end early on Etsy because, generally speaking, handmade items require longer processing times, so buyers stop shopping well before Christmas. Last-minute gift shoppers on Etsy can be in a real time crunch if they have to ship a gift to themselves, wrap it and sign a card, and *then* ship it to the gift recipient.

In August of 2017, my team was tasked with building tools that allowed sellers to offer gift wrapping services to their buyers. The goal was to give our buyers some more shopping time before the holidays. We also believed this feature would give our sellers a longer window to leave their shops up and running, since they could capture the last-minute shopping traffic. All of this would extend the holiday shopping season on Etsy.

Our goal was to get an MVP of this feature out to buyers by Cyber Week 2017, which marked the beginning of the 2017 holiday shopping season. Working backwards from that, we also needed to launch to sellers with enough time for them to adopt the feature before Cyber Week and to give them time to adjust their fulfillment processes accordingly.


## Historical context

We knew Etsy was a great destination for purchasing unique gifts. We also thought gift wrap would be a natural fit for many of our sellers. Etsy sellers go the extra mile when it comes to packaging their items; many of them include a handwritten thank you note and add other special personal touches. We also knew that many sellers were already getting convos from buyers asking them to add a gift message or gift wrap to their orders; sellers would happily comply but were usually providing these extra services for free.

Some of our savvier sellers were "hacking" their listings to add gifting options for buyers. They would do things like add gifting options as a variation that buyers could select on the listing page when adding an item to their cart, or create separate listings that served as a gift wrap add-on. As clever as these hacks are, they don't always make for the best buying experience. Buyers expect gift wrap to appear as an option in the cart, not as a separate, often undiscoverable listing.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">
  <img src="/uploads/gift-wrap-before-listing.jpg">
  <p class="text-small italic text-center">Some sellers sold a listing which served as a gift wrap add-on for buyers as a workaround for Etsy not having gift wrap functionality.</p>
</div>

There were some small attempts at providing gifting features to buyers and sellers that existed when this project kicked off. In the order management tool, sellers had the ability to mark an order as a gift, which would remove all prices when they printed the packing slip. However, it was not something that buyers could mark on their own.

A few months before the project kicked off, there was a “mark as gift” checkbox added into the final step of the checkout flow. Its primary purpose was to begin to collect data on the prevalence of orders that were gifts. However, it was unclear to buyers and sellers what the checkbox actually did, since the copy was opaque and there was no mention of standard gifting features like gift messages or gift wrap.

So, we had the beginnings of gifting features for buyers and sellers, but with a lot of room to grow. This project would give us the opportunity to think about gifting on Etsy in a more holistic way.



## Our approach

Our team was going to own the entire end-to-end flow for buyers and for sellers, which was a really exciting opportunity to think about the complete experience for both parts of our marketplace. At the time, it was rare for one team to develop a feature across the buyer and seller experiences.

The first thing that the PM and I did was get in a room to talk through each flow from the buyers and sellers' perspectives to understand how many different parts of the experience we'd be affecting (spoiler: it was a lot). It also helped us start to understand what the scope might look like and what open questions we had that needed to be answered.

At a high level, the flow needed to look something like this:

1. The seller turns a setting on in their shop to opt-in to gift wrapping. This is also where they set parameters such as price and a description.

2. If a shop offers gift wrap, we'd have to advertise it on the listing page somehow so buyers knew it was an option.

3. Buyers would add gift wrap to their order as they were checking out. We'd reflect the cost of gift wrap here, as well as in the order receipt.

4. Sellers would see whatever gift options the buyer selected in the order management tool so they knew how to fulfill the order properly. It'd also have to be reflected in the packing slip.

Owning the entire experience meant that our work was going to touch a LOT of teams within Etsy (Shipping and Orders, Checkout, Listing Page, Payments), so we'd need to socialize the work early on. One of the first things I did was meet with each of the designers that owned those respective areas to get their advice on how I should approach the work. We whiteboarded, they walked me through the gotchas and use cases, and it helped me understand the scope of work better. Doing this also helped them understand the impact that my work was going to have on their part of the product.

From the beginning, we knew this was going to have to be a cross-platform experience for buyers, since we wanted them to be able to purchase gift wrap whenever they can purchase items. And we needed to update the Orders UI for sellers on all platforms so that there was no possibility of them missing important gifting details when they went to fulfill orders.



## Seller gift wrap settings

First and foremost, we didn't want to force all sellers into offering gift wrap, since it doesn't make sense for every type of item and not every seller would have the bandwidth to add this extra step into their workflow. We decided that gift wrap was going to be a shop-level setting that sellers could opt in to. This meant our main seller KPI was seller adoption of gift wrap.

One question at the start was how much of the experience Etsy should dictate. Should we standardize the gifting experience for buyers on Etsy, such as sending sellers gift wrap to use, or having a flat rate for gift wrap across the site? What would it be like for buyers to encounter different gift options for each shop? We wanted to streamline the experience of purchasing gift wrap on Etsy, but still give sellers the space to express their brands, be creative, and control their businesses. We decided to put some guardrails up, such as setting a specific range the cost of gift wrap had to be, but let sellers choose their own pricing from within that range. And we didn't want to set any parameters for how an item should be gift wrapped, but we would have to let each seller explain to potential buyers what their gift wrap would look like, since it would be different for every seller.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">
  <img src="/uploads/gift-wrap-settings-round1.jpg" class="b-1 b-gray-light">
  <p class="text-small italic text-center">Our first pass at the settings UI, largely based on other existing seller settings.</p>
</div>

In shop settings, we started by adding a shop-level setting to turn on gift wrap. Once the setting was turned on, sellers could select a price per order from a dropdown. We also built an optional description field for sellers to describe to buyers how they would gift wrap their items. We were hoping to also add a way for sellers to upload photos of their gift wrap, but needed more information to understand if it was an MVP feature or a nice-to-have; not every competitor that we researched provided a photo of their gift wrap.

Since the timeline was so tight, and the goal was to create an MVP, we were hoping to cut as much scope as possible, yet we needed to provide a quality experience. To help us understand what features were must-haves, we ran a survey with buyers and did usability testing of the settings with sellers.

Two important insights came out of the buyer survey: photos of the seller's gift wrap were a must, and the optimal price point for gift wrap was $4. To help sellers make a more informed decision about pricing their gift wrap, we added a "Recommended" note next to the $4 option in the gift wrap settings.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4 text-center">
  <img src="/uploads/gift-wrap-price-recommended.jpg">
  <p class="text-small italic">Our survey of buyers told us that $4 was the optimal price point for gift wrapping services.</p>
</div>

When we did usability testing with sellers, we learned a ton. First, they loved the price recommendation from Etsy and thought it was helpful guidance, even if they didn't end up charging $4. Sellers also agreed with buyers; they were hoping to be able to upload a photo of their gift wrap in addition to describing it. The description was going to be helpful for explaining situations like multi-item orders or any gift wrap options they provided (such as Christmas- or birthday-themed paper). And they saw the photo as the best way to communicate with buyers about what they were getting, and as an additional opportunity to show buyers how much care they put into wrapping gifts. Lastly, they looked at an early version of our marketing materials for the feature and gave us valuable feedback: we didn't need to sell them on why they should do gift wrap, but they did want to learn about any limitations of the feature. This was especially helpful feedback since we were building an MVP; if this wasn't going to be as fully-featured as they were hoping, we needed to tell them about the restrictions. Coming out of this research session, we revisited our marketing materials and prioritized building a photo uploader.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4">
  <img src="/uploads/gift-wrap-settings-round2.jpg">
  <p class="text-small italic text-center">We learned sellers wanted to know what they could and couldn't do with the gift wrap feature, so we included it near the settings switch.</p>
</div>


## Buyer purchasing flow (listing page, cart, and checkout)

While we were designing and building the seller tools for gift wrap, we were simultaneously defining the buyer experience. The main KPI was GMS from gift wrap.

Normally, our launch strategy for shipping a feature to buyers would be running a series of experiments to determine the optimal interface, then launching the winner to 100%. However, we had a hard (and rapidly approaching) deadline of Cyber Week and a lot of moving parts, so we decided to make the most informed design decisions we could and do follow-up experiments once we were at 100% to further optimize the UI.

We gained confidence in our decisions a few ways. We had our buyer survey to help understand how buyers expected gifting to work on Etsy. Then, we read dozens of pages of Baymard reports on gifting experiences in ecommerce. This gave us a sense of which best practices to follow and which common mistakes to avoid. One example of a mistake we were already making: the existing "this is a gift" checkbox was on the final step of our checkout flow, and Baymard strongly recommends that all gifting options are selected in the cart. We did competitive research to figure out who was doing gifting well (and who wasn't); we even ordered gifts from competitors and sent them to each other to understand the full experience. And lastly, we did usability testing with buyers to get qualitative feedback on our interface.

The core buyer flow began to take shape:

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4 text-center">
  <img src="/uploads/gift-wrap-listingpage.gif" class="b-1 b-gray-light">
  <p class="text-small italic">In the shipping section of the listing page, we told buyers the seller could gift wrap their purchase.</p>
</div>

First, we'd need to alert buyers that gift wrap was available on the listing page, since that could inform their decision to purchase an item. Per Baymard's recommendation, we put a line item in the "Shipping" section with a popover to reveal the seller's description and photo of the gift wrap.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4 text-center">
  <img src="/uploads/gift-wrap-cart.jpg" class="b-1 b-gray-light">
  <p class="text-small italic">In the cart, buyers could mark an order as a gift.</p>
</div>

Next, the buyer would land on the cart, which was where the actual selection was going to happen. Since Etsy is comprised of shops, and each shop would have the option to offer gift wrap, a buyer would need to choose this option from each individual seller. So if a buyer had items from multiple sellers in her cart, she'd have to add gift wrap from each shop.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4 text-center">
  <img src="/uploads/gift-wrap-cart-interactions.gif" class="b-1 b-gray-light">
  <p class="text-small italic">Marking an item as a gift in the cart revealed all of the gifting options.</p>
</div>

To save vertical space, we hid the gift wrap selection behind the “this is a gift” checkbox. We knew that most purchases wouldn't be gifts, so we didn't want to show options that weren't relevant to most people. When the gift wrap checkbox is revealed, we reused the same popover to show the gift wrap photo from the seller.

While developing the features in the checkout flow, we had two major realizations. First of all, if our goal was to allow buyers to ship gifts directly to gift recipients, they'd need more than just gift wrap. We also had to build a way for buyers to enter a gift message to the recipient to avoid the awful experience of receiving a gift from an anonymous gifter with zero context. 

Second, there was the question of how flexible the gifting options should be. Should gift messages be required when purchasing gift wrap? Should you be able to add a gift message without purchasing gift wrap? Even though we were building features to satisfy one gifting use case (shipping a gift directly to the recipient), there were many other use cases that these features were going to benefit, and we saw no reason to build in restrictions. So, we allowed buyers to mark their gifting options in the cart in any combination.


## Seller Orders and packing slips

Now that we had defined all of the different gifting states a buyer could get into, we needed to update the seller Orders tool to reflect the buyer's selections. For each gifting option that was selected, we added a signal to the order details so sellers would understand whether there were any special requests. We worked with our seller brand team to draw new icons for each of the different options.

[desktop - seller icons in orders]

Finally, we needed to update the packing slip. Some sellers print out packing slips to include in the box when they ship orders; it contains details such as key item info, the shipping address, and ways to get in touch with the shop. Currently, when an order is marked as a gift, it removes all pricing information so that the packing slip can be seen by the gift recipient. We needed to update it to include the gift message for those sellers who printed out packing slips.

[existing packing slip for gift]

While we were adding in the gift message, we realized that the audience of the gift packing slip was totally different than that of the regular packing slip. The regular packing slips went to buyers and served mostly as a receipt. The gift packing slip was going to be sent directly to the gift recipient, and this would be the first time they had seen the item, heard from this seller, or maybe even heard of Etsy. We needed to make it more celebratory and exciting for them, like a card. We dedicated half of the packing slip real estate just to the gift message and an illustration by our seller brand team. The rest of the space included the more straightforward information about the item, the seller, and a way to get in touch with the seller if they wanted to exchange the gift or buy more items.

<div class="mt-sm-4 mb-sm-4 ml-md-n4 mr-md-n4 text-center">
  <img src="/uploads/gift-wrap-giftreceipt.jpg">
  <p class="text-small italic">An updated gift receipt template for sellers printing their orders, with the gift message on the left.</p>
</div>

Lastly, we heard from research that our sellers were concerned with wasting paper and that this sometimes prevented them from using the packing slips. We made sure most gift receipts would fit on a half sheet of paper and devised a way for them to print two to a page.


## Launch and reception

A few weeks before our launch, in October 2017, we pre-announced the feature to sellers. At the time, we rarely announced features before a launch, but this had a real-world component and would affect a seller’s workflow so we wanted to give them time to prepare. Sellers could turn the feature on in their shops the day we made this announcement, but buyers wouldn’t be able to start purchasing gift wrap until a few weeks later.

[photo from launch]

The pre-announcement was generally well-received, but we also quickly got a lot of feedback. Many sellers weren’t thrilled that they couldn’t select specific items in their shops that could be gift wrapped; it was all-or-nothing. This was a dealbreaker to sellers who sold items of varying sizes, and many commented in our post that they decided not to turn on the feature. 

This was reflected in our numbers, too. We didn’t see very many sellers turn on the gift wrap feature after the announcement. We had intentionally cut individual item selection from our launch because of the amount of work it would take to build, but maybe it was affecting the success of the product.

Sometimes comments aren’t always representative of our seller base, so we decided to send a survey to sellers to understand the scale of the issue. Ultimately, we wanted to see what was preventing sellers from adopting so that we might be able to add another feature in before the end of the holidays. Our research team helped us draft a survey that included a variety of reasons why a seller might not have adopted that ranged from missing features (such as, “I want to be able to choose which items can be gift wrapped”) to personal preference (such as, “I’m not good at wrapping gifts”). Meanwhile, we launched the buyer-facing gift wrap features.

The survey results were illuminating. By and large, sellers just weren’t interested in offering gift wrap to buyers. It wasn’t a feature that resonated with them. While not the answer that we were hoping for, it did help explain why seller adoption was so low.

By the end of the holiday season, we continued to see low seller adoption of gift wrap. Because there weren’t many listings that could be gift wrapped on Etsy in the first place, we also didn’t see many buyers purchasing gift wrap from sellers, either. We didn’t hit our goals.



## Why even share this?

You might be wondering why I have this project in my portfolio, or why I even admitted the reality of how this project went. For many months after this feature was released, I had really mixed feelings about the whole thing. I was proud of the amount of work that was done in a short period of time and I felt good about a lot of the calls that we had to make. Our execution of the work was as good as it could have possibly been. But we very clearly didn’t hit our goals, and maybe shouldn’t have pursued this project in the first place.

Something wonderful started happening inside the company around the same time that I was reflecting on this project. Our product org was also doing a lot of reflecting. Through a ton of internal research, they realized that, generally speaking, teams were bypassing the discovery process, which is the phase in which you figure out which problems to solve and how to solve them. Product teams were hyper-focused on executing and delivery, but not spending nearly enough time evaluating the strength of their ideas. 

I realized that I had a great story to tell. This project was an example of a time in which the quality of the work didn’t make a difference, since the solution was fundamentally flawed. I turned my story of this project into a 20 minute talk that I gave all across the company to design, product, and marketing teams. I even gave this talk to our Executive and Operating teams, which are made up of the 70 highest-ranked people at the company.

At a high level, the talk told the story of this project, including all of the things we thought we were getting right, the launch, and the low adoption rate. It then segues into an overview of the discovery process and how it works, and how discovery could have made a huge difference in our project. Internally, it became known as “the gift wrap story” and helped people at all levels and in all disciplines understand why it was so important to change the way that we worked.

For me, this project marked a sharp shift in how I approach my work. Before the gift wrap project, I placed a ton of value on the way that work is executed, and focused a lot of my energy on getting that right. Having experienced the huge lessons learned from this project, I understand the value in asking and answering the fundamental (and sometimes difficult) questions as early as possible: What’s the problem that we’re trying to solve? How do we know this is the right solution? Do customers want this? How do we know? Where does our confidence come from? What other solutions are there?

In 2019, all teams at Etsy were trained on the discovery process. The internal culture around building products looks nothing like it used to look. And I like to think that this project had a hand in creating this cultural shift.



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
		<p class="mb-sm-1">1 product manager, 1 engineering manager, 8 engineers, 1 product marketing manager, 1 data analyst</p>
	</div>
	<div class="col col-sm-12 col-md-3">
		<p class="bold mb-sm-0 mb-md-1">Released</p>
	</div>
	<div class="col col-sm-12 col-md-9">
		<p class="mb-sm-1">November 2017</p>
	</div>
	<div class="col col-sm-12 col-md-3">
		<p class="bold mb-sm-0 mb-md-1">View live</p>
	</div>
	<div class="col col-sm-12 col-md-9">
		<p class="mb-sm-1">search filter, settings</p>
	</div>
</div>
