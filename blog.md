---
layout: default
title: Blog
---

<section class="recent-posts">
    <div class="section-title">
        <h2><span>Blog</span></h2>
    </div>
    <div class="row listrecent">
        {% for post in site.posts %}
               {% include postbox.html %}
        {% endfor %}
    </div>
</section>

<!-- Pagination
================================================== -->
<div class="bottompagination">
<div class="pointerup"><i class="fa fa-caret-up"></i></div>
<span class="navigation" role="navigation">
    {% include pagination.html %}
</span>
</div>