---
layout: default
title: Blog
---
<div class="align-center" markdown="block">
## git co -b idk-what-im-doing

__a friendly little tech blog for learners of all levels__

I love tackling fundamental web development topics in an accessible & engaging manner.
<br>
Have a suggestion for a topic you'd love to learn more about? [Tweet me!](https://twitter.com/mariechatfield)
</div>

{% for post in site.posts %}
  {% capture words %}{{ post.content | number_of_words }}{% endcapture %}

  <div class="content__section">
    <div class="content__section__media">
      <a href="{{ post.url }}">
        <img class="content__section__image" src="{{ post.image }}" alt="{{ post.image_alt }}">
        </a>
    </div>

    <div class="content__section__text" markdown="block">
## [{{ post.title }}]({{ post.url }})
#### {{ post.description }}
__{{ post.date | date: '%B %d, %Y'  }}__
_&#8226; {{ words }} words_

{{ post.excerpt }}
_[read more...]({{ post.url }})_
</div>
  </div>
{% endfor %}

<div class="spacer--xl"></div>

<div class="align-center" markdown="block">
## other platforms

#### [Medium](https://medium.com/@mariechatfield)

Technical articles, career advice, conference talk slides, and poems all have a home here.

#### [Some Kind of Dispatch](http://tinyletter.com/mariechatfield)

A TinyLetter newsletter. Short, sweet, and fleeting, these missives are meant to be enjoyed like ice cream cones on a sunny June afternoon: quickly and with joy.