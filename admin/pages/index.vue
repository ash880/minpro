<template>
  <main>
    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">All products</h1>
          <div class="a-spacing-large"></div>
          <!-- Button -->
          <a href="#" class="a-button-buy-again">Add a new product</a>
          <a href="#" class="a-button-history margin-right-10">Add a new category</a>
          <a href="#" class="a-button-history margin-right-10">Add a new owner</a>
        </div>
      </div>
    </div>
     <!-- Listing page -->
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-xs-2 col-lg-2 col-md-3 col-sm-6 br bb">
          <div class="history-box">
          <div class="text-center">
            <!--Product image -->
            <a href="#" class="a-link-normal">
              <img src="#" class="img-fluid"/>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>

  <div class="container-fluid browsing-history">
    <div class="row">
      <div class="history-box">
        <!-- Product image-->
        <a href="#" class="a-link-normal">
          <img src="#" class="img-fluid">
        </a>
      </div>
        <!--product title-->
        <div class="a-spacing-top-base asin-title">
          <span class="a-text-nomral">
            <div class="p13-sc-truncated">Product title</div>
          </span>
        </div>
        <!--product range--> 
        <div class="a-row">
          <a href='#'>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>

          </a>
          <span class="a-letter-space"></span>
          <span class="a-cold-tertiary a-size-small asin-reviews">(1732)</span>
        </div>
        <div class="a-row">
          <span class="a-size-base a-color-price"></span>
            <span class="p13n-sc-price">$23</span>

       </div>
  </div>
</div>

  </main>
</template>

<script>
export default {
  // asyncData is fetching Data before nuxt page finished loading on the browser.
  // It is good for SEO because the data will be loaded firs
};
</script>

<style>
</style>
