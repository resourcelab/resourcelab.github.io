---
layout: page
title: Workshops
comments: false
---



<!-- portfolio section start -->
<section class="portfolio-section pt100">
		<div class="container">
		</div>                       
		<div class="container-fluid p-0">
			<div class="row portfolios-area">
<!-- 				<div class="col-lg-6">
					<div class="portfolio-intro">
						<h2 class="section-title mb-5">I’m a freelance <span>digital designer</span>, with +10 years of experience</h2>
						<ul class="portfolio-filter controls">
							<li class="control" data-filter="all">All</li>
							<li class="control" data-filter=".web">Web design</li>
							<li class="control" data-filter=".digital">Digital design</li>
							<li class="control" data-filter=".rened">3D Renedering</li>
							<li class="control" data-filter=".brand">Brand Identity</li>
						</ul>
					</div>
				</div> -->
				<!-- <div class="first-item col-md-6 col-lg-12 mix digital p-lg-0">
					<a href="img/portfolio/1.jpg" class="portfolio-item set-bg " data-setbg="img/portfolio/1.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>			
					</a>
					<div class="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="second-item mix col-md-6 web">
					<a href="img/portfolio/2.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/2.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Identity for Company</h2>
						<p>Graphic design</p>
					</div>
				</div> -->

{% for workshop in site.workshops %}
				<div class="mix col-md-6 col-lg-3 rened">
					<a href="{{ workshop.url }}" class="portfolio-item pi-style2 set-bg" data-setbg="{{ workshop.image }}">
						<div class="pi-inner">
<!-- 							<h2>+ See Project</h2> -->
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>{{ workshop.title }}</h2>
						<p>{{ workshop.description}}</p>
					</div>
				</div>
  {% endfor %}
				<div class="mix col-md-6 col-lg-3 rened">
					<a href="img/portfolio/3.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/3.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 digital">
					<a href="img/portfolio/4.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/4.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 rened">
					<a href="img/portfolio/5.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/5.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>A cup of tea please</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 brand">
					<a href="img/portfolio/6.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/6.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 brand">
					<a href="img/portfolio/9.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/9.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Identity for Company</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 rened">
					<a href="img/portfolio/10.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/10.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 digital">
					<a href="img/portfolio/7.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/7.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>A cup of tea please</h2>
						<p>Graphic design</p>
					</div>
				</div>
				<div class="mix col-md-6 col-lg-3 brand">
					<a href="img/portfolio/8.jpg" class="portfolio-item pi-style2 set-bg" data-setbg="img/portfolio/8.jpg">
						<div class="pi-inner">
							<h2>+ See Project</h2>
						</div>						
					</a>
					<div class="portfolio-meta">
						<h2>Brand Campaign</h2>
						<p>Graphic design</p>
					</div>
				</div>
			</div>
		</div>
	</section>
<!-- portfolio section end -->


Here we will list all of our workshops

<h1>Workshops</h1>

<ul>
  {% for workshop in site.workshops %}
    <li>
      <h2>{{ workshop.title }}</h2>
      <h3>{{ workshop.date }}</h3>
      <p>{{ workshop.content | markdownify }}</p>
    </li>
  {% endfor %}
</ul>