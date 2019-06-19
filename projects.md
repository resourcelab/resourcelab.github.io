---
layout: pagewide
title: Projects
comments: false
---




<!-- portfolio section start -->
<section class="portfolio-section">
<!-- Uncommen to put categories
		<div class="container">
			<ul class="portfolio-filter controls">
				<li class="control" data-filter="all">All</li>
				<li class="control" data-filter=".web">Web design</li>
				<li class="control" data-filter=".digital">Digital design</li>
				<li class="control" data-filter=".rened">3D Renedering</li>
				<li class="control" data-filter=".brand">Brand Identity</li>
			</ul>
		</div> -->
		<div class="container-fluid p-md-0 ">
			<div class="row portfolios-area">
				{% for project in site.projects %}
				<div class="mix col-lg-4 col-md-6 web">
					<a href="{{ project.url }}" class="portfolio-item set-bg" data-setbg="{{ project.image }}">
						<div class="pi-inner">
							<h2>{{ project.name }}</h2>
						</div>						
					</a>
				</div>
				{% endfor %}


				<div class="mix col-lg-6 col-md-6 web">
					<a href="img/portfolio/1.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/1.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-6 col-md-6 digital">
					<a href="img/portfolio/2.jpg" class="portfolio-item set-bg " data-setbg="img/portfolio/2.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 web">
					<a href="img/portfolio/3.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/3.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 digital">
					<a href="img/portfolio/4.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/4.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-4 col-md-6 rened">
					<a href="img/portfolio/5.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/5.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-12 col-md-6 brand">
					<a href="img/portfolio/6.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/6.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-6 col-md-6 rened">
					<a href="img/portfolio/7.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/7.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
				<div class="mix col-lg-6 col-md-6 brand">
					<a href="img/portfolio/8.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/8.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
				</div>
			</div>
		</div>



</section>
<!-- portfolio section end -->


<div>
<ul>
  {% for project in site.projects %}
      <h2>{{ project.name }}</h2>
      <img src="{{ project.image }}" alt="{{ project.description }}">
      <p>{{ project.content | markdownify }}</p>	
  {% endfor %}
</ul>