---
title: Gift wrap on Etsy
published: false
date: 2017-11-21 21:07:00 Z
company: Etsy
year: 2017
description: Let buyers pay sellers to gift wrap their orders.
assets:
- path: "/uploads/etsy_sd_listing_form.jpg"
  name: etsy_sd_listing_form
---
Etsy is the perfect destination for finding a one-of-a-kind gift for someone special. From past qualitative research with buyers, we knew that a significant number of orders on Etsy are gifts, especially those orders leading up to major holidays.

The winter holiday shopping season tends to end early on Etsy because, generally speaking, handmade items require longer processing times, so buyers stop shopping well before Christmas. Last-minute gift shoppers can be in a real time crunch if they have to ship a gift to themselves, wrap it and sign a card, and *then* ship it to the gift recipient. In 2017, we saw an opportunity to extend the holiday shopping season on Etsy by letting our sellers offer gift wrapping services, buying shoppers some time. It would also give our sellers a longer window to leave their shops up and running, since they could capture the last-minute shopping traffic.

Our goal was to get an MVP of this feature out to buyers by Cyber Week 2017, which marked the beginning of the 2017 holiday shopping season. Working backwards from that, we also needed to launch to sellers with enough time for them to adopt the feature before Cyber Week and to give them time to adjust their fulfillment processes accordingly.

## Historical context

We knew from past research with buyers that Etsy was a great destination for purchasing gifts. We also thought gift wrap would be a natural fit for many of our sellers. Etsy sellers go the extra mile when it comes to packaging their items; many of them include a handwritten thank you note, tie ribbons around their packaging, include small freebies, and add other special personal touches. We also knew that many sellers were getting convos from buyers asking them to add a gift message or gift wrap to their orders; sellers would happily comply but were also providing these extra services for free.

Some of our savvier sellers were "hacking" their listings to add gifting options for buyers. They would do things like add gifting options as a variation that buyers could select on the listing page when adding an item to their cart, or they would create separate listings that served as a gift wrap add-on. As clever as these hacks are, they don't always make for the best buying experience. Buyers expect gift wrap to appear as an option in the cart, not as a separate, often undiscoverable listing.

We had some light early attempts at providing gifting features to buyers and sellers that already existed when this project kicked off. In Orders, sellers had the ability to mark an order as a gift, which removed all prices when they printed the packing slip. For the few years that this option existed, it was not something that buyers could mark on their own; they had to convo the seller to tell them they didn't want prices on the packing slip. Then in the summer of 2017, one of our teams added a checkbox into the final step of the checkout flow for a buyer to mark an order as a gift. Its primary purpose was for Etsy to begin to collect data on the prevalence of orders that were gifts. However, it was unclear to buyers and sellers what the checkbox actually did, since the copy was very opaque and there was no mention of gift messages or gift wrap.

So, we had the beginnings of gifting features for buyers and sellers, but with a lot of room to grow. This project would give us the opportunity to think about gifting on Etsy in a more formal, end-to-end way.


## Our approach

Our team was going to own the entire end-to-end flow for buyers and for sellers, which was a really exciting opportunity to think about the complete experience for both parts of our marketplace.

[whiteboard pic]

The first thing that the PM and I did was get in a room to talk through each flow from the buyers and sellers' perspectives to understand how many different parts of the experience we'd be affecting (spoiler: it was a lot). It also helped us start to understand what the scope might look like and what open questions we had that needed to be answered.

At a high level, the flow needed to look something like this:

1. The seller turns a setting on in their shop to opt-in to gift wrapping. This is also where they set parameters such as price and a description.
2. If a shop offers gift wrap, we'd have to advertise it on the listing page somehow so buyers knew it was an option.
3. Buyers would add gift wrap to their order as they were checking out. We'd reflect the cost of gift wrap here, as well as in receipts.
4. Sellers would see whatever gift options the buyer selected in the Orders tool so they knew how to fulfill the order properly. It'd also have to be reflected in the packing slip.

Owning the entire experience meant that our work was going to touch a LOT of teams within Etsy (Shipping and Orders, Checkout, Listing Page, Payments), so we'd need to socialize the work early on. One of the first things I did was meet with each of the designers that owned those respective areas to get their advice on how I should approach the work. We white boarded, they walked me through the gotchas and use cases, and it helped me understand the scope of work better. Doing this also helped them understand the impact that my work was going to have on their part of the product.

From the beginning, we knew this was going to have to be a cross-platform experience for buyers, since we wanted them to be able to purchase gift wrap whenever they can purchase items. And we needed to update the Orders UI for sellers on all platforms so that there was no possibility of them missing important gifting details when they went to fulfill orders.


## Seller gift wrap settings

First and foremost, we didn't want to force all sellers into offering gift wrap, since it doesn't make sense for every type of item and not every seller would have the bandwidth to add this extra step into their workflow. We decided that gift wrap was going to be a shop-level setting that sellers could opt in to. This meant our main seller KPI was seller adoption of gift wrap.

One question at the start was how much of the experience Etsy should dictate. Should we standardize the gifting experience for buyers on Etsy, such as sending sellers gift wrap to use, or having a flat rate for gift wrap across the site? What would it be like for buyers to encounter different gift options for each shop? We wanted to streamline the experience of purchasing gift wrap on Etsy, but still give sellers the space to express their brands, be creative, and control their businesses. We decided to put some guardrails up, such as setting a specific range the cost of gift wrap had to be, but let sellers choose their pricing. And we didn't want to set any parameters for how an item should be gift wrapped, but we would have to let each seller explain to potential buyers what their gift wrap would look like, since it would be different for every seller.

[settings screenshot]

In shop settings, we started by adding a shop-level setting to turn on gift wrap. Once the setting was turned on, sellers could select a price per order from a dropdown (to keep their selections within our price range). We also built an optional description field for sellers to describe to buyers how they would gift wrap their items. We were hoping to also add a way for sellers to upload photos of their gift wrap, but needed more information to understand if it was an MVP feature or a nice-to-have.

Since the timeline was so tight, we were hoping to cut as much scope as possible, but also wanted to provide a quality experience. To help us understand what features were must-haves, we ran a survey with buyers and did usability testing of the settings with sellers.

Two important insights came out of the buyer survey: photos of the seller's gift wrap were a must, and the optimal price point for gift wrap was $4. To help sellers make a more informed decision about pricing their gift wrap, we added a "Recommended" note next to the $4 option in the gift wrap settings.

When we did usability testing with sellers, we learned a ton. First, they loved the price recommendation from Etsy and thought it was helpful guidance, even if they didn't end up charging $4. Sellers also agreed with buyers; they were hoping to be able to upload a photo of their gift wrap in addition to describing it. The description was going to be helpful for explaining situations like multi-item orders or any gift wrap options they provided (such as Christmas- or birthday-themed paper). And they saw the photo as the best way to communicate with buyers about what they were getting, and as an additional opportunity to show buyers how much care they put into wrapping gifts. Lastly, they looked at an early version of our marketing materials for the feature and gave us valuable feedback: we didn't need to sell them on why they should do gift wrap, but they did want to learn about any limitations of the feature. This was especially helpful feedback since we were building an MVP; if this wasn't going to be as fully-featured as they were hoping, we needed to tell them about the restrictions. Coming out of this research session, we revisited our marketing materials and prioritized building a photo uploader.

## Buyer purchasing flow (Listing page, Cart, and Checkout)

While we were designing and building the seller tools for gift wrap, we were simultaneously defining the buyer experience. As with most buyer-facing projects, the main KPI was going to be GMS from gift wrap, since it signals how many buyers are interested in paying sellers for the service.

Normally, our launch strategy for shipping a feature to buyers would be running a series of experiments to determine the optimal interface, then launching the winner to 100%. However, we had a hard (and rapidly approaching) deadline of Cyber Week and a lot of moving parts, so we decided to make the most informed design decisions we could and do follow-up experiments once we were at 100% to further optimize the UI.

We gained confidence in our decisions a few ways. We had our buyer survey to help understand how buyers expected gifting to work on Etsy. Then, we read dozens of pages of Baymard reports on gifting experiences in ecommerce. This gave us a sense of which best practices to follow and which common mistakes to avoid. One example of a mistake we were already making: the existing "this is a gift" checkbox was on the final step of our checkout flow, and Baymard strongly recommends that all gifting options are selected in the cart. We did competitive research to figure out who was doing gifting well (and who wasn't); we even ordered gifts from competitors and sent them to each other to understand the full experience. And lastly, we did usability testing with buyers to get qualitative feedback on our interface.

- listing page popover
- cart popover
- decrease height since it had to show up for every single shop so did single checkbox.

While developing the features in the checkout flow, we had two major realizations. First of all, if our goal was to allow buyers to ship gifts directly to gift recipients, they'd need more than just gift wrap. We also had to build a way for buyers to enter a gift message to the recipient to avoid the awful experience of receiving a gift from an anonymous gifter with zero context. 

There was also the question of how flexible the gifting options should be. Should gift messages be required when purchasing gift wrap? Should you be able to add a gift message without purchasing gift wrap? Even though we were building features to satisfy one gifting use case (shipping a gift directly to the recipient), there were many other use cases that these features were going to benefit, and we saw no reason to build in restrictions. So, we allowed buyers to mark their gifting options in the cart in any combination.

While we were building these features, there was another team working on highlighting fast shipping times to buyers on the listing page. We realized that our goals were similar (extending the holiday shopping season) and our messaging was similar (these items would make great last-minute gifts). So we collaborated on adding a time-based "nudge" on listings that shipped quickly and offered gift wrap. We could even reuse this nudge before any major gift-giving holiday, like Mother's Day or Valentine's Day.

## Seller Orders and packing slips

Now that we had defined all of the different gifting states a buyer could get into, we needed to update the Orders tool to reflect the buyer's selections. For each gifting option that was selected, we added a signal to the order detail so sellers would understand how their fulfillment of the order was affected. We worked with our seller brand team to draw new icons for each of the different options.

The last thing we wanted to update was the packing slip. Some sellers print out packing slips to include in the box when they ship orders; it contains details such as key item info, the shipping address, and ways to get in touch with the shop. Currently, when an order is marked as a gift, it removes all pricing information so that the packing slip can be seen by the gift recipient. We needed to update it to include the gift message for those sellers who printed out packing slips.

While we were adding in the gift message, we realized that the audience of the gift packing slip was totally different than that of the regular packing slip. The regular packing slips went to buyers and served mostly as a receipt. The gift packing slip was going to be sent directly to the gift recipient, and this would be the first time they had seen the item, heard from this seller, or maybe even heard of Etsy. We needed to make it more celebratory and exciting for them, like a card. We dedicated 50% of the packing slip real estate just to the gift message and an illustration by our seller brand team. The rest of the space included the more straightforward information about the item, the seller, and a way to get in touch with the seller if they wanted to exchange the gift or buy more items.

Lastly, we heard from research that our sellers were concerned with wasting paper and that this sometimes prevented them from using the packing slips. We made sure most gift receipts would fit on a half sheet of paper and devised a way for them to print two to a page.

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
