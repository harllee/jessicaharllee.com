---
title: Building Erin Nolan's website
date: 2014-01-27 19:31:00 -05:00
tags:
- dev life
- design
- siteleaf
- how to
share_image: "/uploads/notes-siteleaf-share.jpg"
assets:
- path: "/uploads/Screen Shot 2014-01-28 at 10.55.52 AM.png"
- path: "/uploads/Screen Shot 2014-01-28 at 11.13.48 AM.png"
- path: "/uploads/notes-building-erin-nolans-site.png"
  name: notes-building-erin-nolans-site
  type: header
---

For the past three weeks, I've worked with my best friend and fellow designer [Erin Nolan](http://www.madebyeno.com) on rebuilding her website to be fresh, flexible, and easily updatable. Her last site ran on Wordpress, and while it made sense for her to use a CMS to manage her site, Wordpress wasn't cutting it. After [redoing my own site](http://jessicaharllee.com/notes/a-redesign-with-siteleaf/) with [Siteleaf](http://siteleaf.com) and having a really good experience, we decided to give it a go.


When I'm building for myself, I've noticed I periodically shy away from trying something complex because I don't know how to do it. It's not that I don't want to figure it out; rather, I find myself making design decisions based on what I feel comfortable building. I've gotten better about it over time and with experience (probably a topic for another post), but one of my personal critiques of my website is that I didn't really take many risks with it.

Building out someone else's vision is a totally different experience. Rarely am I exclusively in a developer role (I usually have *some* hand in the visuals), but this was Erin's site and I was happy to follow her lead. Erin's style is different from my own and it was a challenge and a blast working with her to figure out the best way to make her ideas a reality.

Here are some of the cooler things that we did when building her site.

<hr>

### Theming with classes using metadata

Jonnie Hallman wrote a great post about [using metadata in Siteleaf](http://destroytoday.com/blog/metadata-in-siteleaf/), something I hadn't tried with my own site but came in handy for Erin's. Each of the pages in Erin's site is themed with a color from her site's color palette or the client's brand color. Certain elements, from the header of the page down to the poop in the footer, appear in this color.

In the `_colors.sass` file, I defined a series of color variables, such as `$teal`, `$red`, and `$green`, easily updatable if and when Erin decides to tweak the palette. I also included some of the client colors, such as Twitter blue (`$twitter`) and Mizuno blue (`$mizuno`). These color variables ended up in a series of theme classes for font color, background color, and button color like so:

{% raw %}
~~~html
$green: #95d86d
~~~
{% endraw %}
{% raw %}
~~~html
.green
  color: $green
.bg_green
  background-color: $green
.button_green
  color: #fff
  background-color: $green
~~~
{% endraw %}

On any page or section of her site, Erin can add a field for a metadata key that we've called `color`.

![Screen Shot 2014-01-28 at 11.13.48 AM](/uploads/Screen Shot 2014-01-28 at 11.13.48 AM.png) 

This metadata gets used in a few places.

The background color for her site header:

{% raw %}
~~~html
<header class="bg_{{ meta.color | fallback: parent.meta.color | fallback: 'grey_light' }}">
~~~
{% endraw %}

The button color to view a site in her portfolio:

{% raw %}
~~~html
<a href="{{post.meta.url}}" class="button button_{{ meta.color | fallback: 'grey' }}">View site</a>
~~~
{% endraw %}

The text color of the poop in the footer:

{% raw %}
~~~html
<h6>Made with <span class="ss-poo {{ meta.color | fallback: parent.meta.color | fallback: 'red' }}"></span>in Brooklyn</h6>
~~~
{% endraw %}

Instead of potentially typing a hex code in multiple places throughout her site, she can add a `color` value of `green`, and it will use the classes based on the Sass variable of `$green`. So in the scenario in which Erin decides to refresh her color palette, she only needs to update the hex value in one place instead of many. They all also have at least one fallback color defined in case there is no meta color.

See it in action here: http://madebyeno.com/work/quirky/

<hr>

### Header images using metadata

Metadata came into handy again with images. I wanted the presence of a certain type of asset to dictate the page's layout  and to be able to choose which asset was used. Luckily, [Siteleaf recently added metadata for assets](http://www.siteleaf.com/blog/new-asset-meta-and-quick-post-edit/), which meant that we could give certain assets what we called a `type`. 

![Screen Shot 2014-01-28 at 10.55.52 AM](/uploads/Screen Shot 2014-01-28 at 10.55.52 AM.png) 

The site masthead has three varieties: the default (which only contains the site navigation), a `stretched` background image, and a `fixed` image below the navigation.

In the header of a portfolio page, we used logos that showed up at a fixed size:

{% raw %}
~~~html
<header>
  ...
  {% for asset in assets %}
    {% if asset.meta.type == 'fixed' %}
      <img src="{{asset.url}}">
    {% endif %}
  {% endfor %}
</header>
~~~
{% endraw %}

For a header with a background image, we check for a `type` of `stretched`, apply an inline style with the asset as a `background-image`, and then add a class that styles that image with things like `background-size`. Note that I used the full CSS property name instead of the shorthand `background`; I want to make sure that the inline style and the styles via the class don't  compete with one another.

{% raw %}
~~~html
<header{% for asset in assets %}{% if asset.meta.type == 'stretched' %} class="header_img_stretched" style="background-image: url('{{asset.url}}')"{% endif %}{% endfor %}>
~~~
{% endraw %}

The site masthead appears normally if the current page doesn't have any assets with these specific `type`s. We have the flexibility to manage the header images through Siteleaf assets instead of hardcoding them, and the order of the assets doesn't matter as long as the image is defined as having a `type`. (On my own site, pre-asset metadata, I set my header image as the first image so I could call a specific image; it's super awkward.)

On the blog, some posts are more text-heavy whereas sometimes Erin wants a glorious image header. To make it flexible, we look for an asset with the `type` of `hero` and display that image above the post excerpt. If there's no hero image, then the post text displays as normal.

{% raw %}
~~~html
{% for post in posts %}
  <li class="container">
    {% for asset in post.assets %}
      {% if asset.meta.type == 'hero' %}
        <div class="container_hero">
          <a href="{{post.url}}">
            <img src="{{asset.url}}">
          </a>
        </div>
      {% endif %}
    {% endfor %}
    <div class="container_body bg_white">
      ...
    </div>
  </li>
{% endfor %}
~~~
{% endraw %}

Something worth noting is that an asset only shows up in the body of a post if you specifically tell it to appear inline; assets belong to a post but never have to be used (unless you loop through them). So Erin can upload a special hero graphic for this post but not be forced to use it again in the body of the post.

See it in action here: http://www.madebyeno.com/work/

<hr>

Using templates doesn’t have to require sacrificing originality; Erin designed her site to be rich with colors and imagery and Siteleaf was flexible enough (and [their documentation helpful enough](http://www.siteleaf.com/blog/)) that we could make that a reality. As Erin continues to update her site and add more work and content, everything should fall into place with little to no development effort on her part (or mine).

Looking for a designer for your next project? [Erin’s accepting clients](http://madebyeno.com/contact) (and has a fancy website!).
