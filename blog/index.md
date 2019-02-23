---
layout: default
title: Blog
---
<div class="content__section__text--centered" markdown="block">
## git co -b idk-what-im-doing

__a friendly little tech blog for learners of all levels__
</div>

{% for post in site.posts %}
  {% capture words %}
    {{ post.content | number_of_words }}
  {% endcapture %}

  {% capture minutes %}
    {{ words | divided_by: 200 }}
  {% endcapture %}

  <div class="content__section">
    <div class="content__section__media">
      <a href="{{ post.url }}">
        <img class="content__section__image" src="{{ post.image }}" alt="{{ post.image_alt }}">
        </a>
    </div>

    <div class="content__section__text" markdown="block">
## [{{ post.title }}]({{ post.url }})
### {{ post.description }}
__{{ post.date | date: '%B %d, %Y'  }}__
_&#8226; {{ words }} words &#8226; {{ minutes }} minute read_
        
{{ post.excerpt }}

_[read more...]({{ post.url }})_      
</div>
  </div>
{% endfor %}

<div class="spacer--xl"></div>

<div class="content__section__text--centered" markdown="block">
## other platforms

#### [Medium](https://medium.com/@mariechatfield)

Technical articles, career advice, conference talk slides, and poems all have a home here.

#### [Some Kind of Dispatch](http://tinyletter.com/mariechatfield)

A TinyLetter newsletter. Short, sweet, and fleeting, these missives are meant to be enjoyed like ice cream cones on a sunny June afternoon: quickly and with joy.