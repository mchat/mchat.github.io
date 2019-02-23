---
layout: default
title: Blog
---
<h1><code>git co -b idk-what-im-doing</code><br>
    <small><small>a blog for learners of all levels</small></small>
</h1>

{% for post in site.posts %}
<!-- Adapted from: https://sacha.me/articles/jekyll-word-counts -->
{% capture words %}
   {{ post.content | number_of_words }}
{% endcapture %}

{% capture minutes %}
  {{ words | divided_by: 200 }}
{% endcapture %}

<div class="content__section">
    <div class="content__section__media">
        <a href="{{ post.url }}"><img class="content__section__image" src="{{ post.image }}" alt="{{ post.image_alt }}"></a>
    </div>

  <div class="content__section__text" markdown="block">
## [{{ post.title }}]({{ post.url }})
### {{ post.description }}
__{{ post.date | date: '%B %d, %Y'  }}__
_&nbsp;{{ words }} words &#8226; {{ minutes }} minute read_
      
{{ post.excerpt }}

_[read more...]({{ post.url }})_
    
</div>
</div>
{% endfor %}
