---
title: Improving listing photos
date: 2017-07-21 17:07:00 -04:00
published: false
color: F9936A
company: Etsy
year: 2017
description: Increase the number and quality of Etsy listing photos.
role: Design, front-end development
share_image: "/uploads/work-listing-photos-share.jpg"
assets:
- path: "/uploads/listing-page-5-photos.gif"
  name: listing-page-5-photos
- path: "/uploads/listing-form-old-photos-ui.png"
  name: listing-form-old-photos-ui
- path: "/uploads/listing-form-new-photos-ui.gif"
  name: listing-form-new-photos-ui
- path: "/uploads/listing-photos-brand-sketches.png"
  name: listing-photos-brand-sketches
- path: "/uploads/listing-page-photoshopped-photo.png"
  name: listing-page-photoshopped-photo
- path: "/uploads/listing-form-soe.jpg"
  name: listing-form-soe
- path: "/uploads/listing-form-empty-before.jpg"
  name: listing-form-empty-before
- path: "/uploads/listing-form-empty-after.png"
  name: listing-form-empty-after
- path: "/uploads/empty-state-illos.jpg"
  name: empty-state-illos
---

In the summer of 2017, we did a series of small, iterative projects focused on improving the quality of listing information on Etsy. These projects started with us asking what information buyers relied on most when evaluating a listing on Etsy, then figuring out how to collect that information from our sellers. Since Etsy doesn't own the inventory on the platform, it's on us to educate our sellers on what information is going to help them make sales. Unsurprisingly, the more high-quality listing photos the seller uploads, the more confidence buyers have purchasing an item. We decided to double the number of photos a seller can upload from 5 to 10 photos.

## Historical context

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-page-5-photos.gif" class="">
  <p class="jh-text-cms__img__caption">Before: This seller has maxed out how many listing photos they can upload</p>
</div>

For years, the number of listing photos a seller can upload per item has been five. Five photos allow a seller to show a few angles of their item, but it's quite limiting. In addition to showing different angles, Etsy's help content has suggested that sellers take lifestyle photos, photos that show scale, and photos of the item in use. A seller can quickly run out of space to share their item in all of these contexts. It can be really tough for buyers to make a purchasing decision without being able to touch, try on, or hold the item; photos help serve as a replacement for real-life interaction with an item.

We also knew that there were types of items that would greatly benefit from more photos. Vintage sellers need to share an item's imperfections or proof of authenticity with their buyers in addition to all of the item's angles. Items that come in variations, such as different colors or different gemstones, were severely limited in what they could share.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-page-photoshopped-photo.png" class="">
  <p class="jh-text-cms__img__caption">Some sellers had to Photoshop multiple photos together to make up for the limited number of photos</p>
</div>

We saw a lot of sellers Photoshopping photo composites to get the most they could out of the limited number of photos we gave them. This was a clever workaround, but we knew we could give them better tools without forcing them to composite photos.


## Our approach

We thought that a quick win for both buyers and sellers would be increasing the number of photos sellers can upload from 5 to 10.

Since photos are a core aspect of listings, we decided to make the changes across all of Etsy's channels (including Etsy Studio, Wholesale, and Pattern) and on all platforms for buyers and sellers.

Rather than simply increase the number from 5 to 10, we also thought we'd make a few small improvements to the seller experience while we were in there.

## Photo UI updates

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-form-old-photos-ui.png">
  <p class="jh-text-cms__img__caption">Before: The old seller listing photos UI in the listing form, which had been confusing to sellers</p>
</div>

First, we revisited the seller photo upload interface. Since [updating the listing form in 2014], we had heard some confusion from sellers around the photos interface, namely that they didn't realize we were showing them a crop of their images. Listing photos could be any size and any aspect ratio, so to make this easy to display we used thumbnail crops of their original photos (with the option to click to view the full size). Sellers had been so confused about this that we had added help copy next to their photos explaining that they were just seeing a crop. We could make this much clearer to them.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-form-new-photos-ui.gif">
  <p class="jh-text-cms__img__caption">After: Sellers now have 10 listing photos, plus clearer thumbnails and editing actions.</p>
</div>

Instead of showing sellers a thumbnail crop of each photo, we scaled each photo to fit inside a square placeholder, with letterboxing for the negative space. We also hid all of the photo actions (delete and crop) on hover on desktop to save space, and revisited the iconography for the first time since 2014 to make it clearer (including drawing a new crop icon).

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-form-soe.jpg" class="">
  <p class="jh-text-cms__img__caption">The Sell on Etsy listing photo UI, before (left) and after (right)</p>
</div>

These updates also gave us an opportunity to work toward unifying the styling across platforms. The Sell on Etsy app's photos UI was woefully out of date from web, so we updated it with many of the same changes.

## Empty state illustrations

Adding more photos was only part of increasing the quality of listings. We also had to make sure that sellers were adding *the right* photos to their listings. To help educate sellers on the different types of photos they could add to their listings, we decided to use the empty state as a moment to inspire sellers and add some of the Etsy brand.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-form-empty-before.jpg" class="">
  <p class="jh-text-cms__img__caption">Before: The old photos UI empty state</p>
</div>

Working with product marketing and product education, we brainstormed all of the different types of images we might ask our sellers to take, such as lifestyle photos or a detail shot. One limitation was that we didn't know the seller's category at the moment they were uploading photos, so we had to keep the recommendations generic. We narrowed down all of our ideas into our top recommendations that applied to most types of items.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-photos-brand-sketches.png">
  <p class="jh-text-cms__img__caption">The output of a sketching session between our product and brand teams</p>
</div>

Next we took these ideas to our seller brand team and had a collaborative sketching session, where we brainstormed all of the different ways to depict our shot list through illustration. Since we needed to keep the illustrations generic enough to apply to the many different types of items on Etsy, our brand designers had the brilliant idea of using abstract shapes as a way of communicating the different types of photos, rather than depicting a specific item as an example.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/empty-state-illos.jpg" class="">
  <p class="jh-text-cms__img__caption">The final empty state illustrations, drawn by our seller brand design team</p>
</div>

Anything that we couldn't communicate through the illustrations, our copywriter noted in brief labels underneath each illustration. We also refreshed the help content in the photos section to reference the types of photos buyers were interested in, not just the image specs they needed.

<div class="jh-text-cms__img jh-text-cms__img--full-width">
  <img src="/uploads/listing-form-empty-after.png" class="">
  <p class="jh-text-cms__img__caption">The new illustrations and labels for the empty photos state</p>
</div>

## Gaining confidence and launch

Once we had updated the buyer listing page to accommodate the increase in photos, we began to gradually ramp sellers into the new photos experience. 

Once the experience was out to 100% of sellers, we ran a series of experiments showing sellers the placeholder illustrations with and without text against an experience with no illustrations to understand the impact of the illustrations. We also ran an analysis on listings with more than 5 photos to understand the conversion impact.

As we were launching, we monitored the Etsy forums and our support channels for feedback on the new experience and the illustrations. The feedback was overwhelmingly positive, especially among vintage sellers. It ended up being one of our most well-received launches of the year.


> *"This is fantastic for vintage sellers! We need to show items from all angles including the back, details, label shots or close-up of any flaws. As a result, I often need to edit multiple shots into a composite 5th image, which is time consuming. This will be a great time saver and let me edit pics faster! THANKS, Etsy!"*

> *"What a great opportunity for different angles and showing my bags on a model and closeups ... buyers can see everything and know everything before they purchase."*

---

## Project details

<div class="jh-text-cms__project-details">
	<div>
		<h3>Role</h3>
	</div>
	<div>
		<p>Design, front-end development</p>
	</div>
	<div>
		<h3>Core team</h3>
	</div>
	<div>
		<p>1 product manager, 1 engineering manager, 2 engineers, 1 product marketing manager, 1 product education specialist, 1 art director (<a href="https://www.linkedin.com/in/samuelsherman">Sam Sherman</a>)</p>
	</div>
	<div>
		<h3>Released</h3>
	</div>
	<div>
		<p>July 2017</p>
	</div>
	<div>
		<h3>View live</h3>
	</div>
	<div>
		<p><a href="http://etsy.com/your/shops/me/tools/listings">Listings Manager</a> (for Etsy sellers only)</p>
	</div>
</div>
