const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



//  Task 1: Create selectors to point your data into elements
//  Create selectors by using any of the DOM element's methods
//  Note that IDs have been used on all images. Use the IDs to update src path content

//  Task 2: Update the HTML with the JSON data
//  Remember, NO direct updating of the HTML source is allowed.
//  Using your selectors, update the content to match the example file.
//  Remember to update the src attributes on images

// Navigation update from JSON data to HTML
let navigation = document.querySelectorAll('a');



navigation[0].textContent = siteContent['nav']['nav-item-1'];
navigation[1].textContent = siteContent['nav']['nav-item-2'];
navigation[2].textContent = siteContent['nav']['nav-item-3'];
navigation[3].textContent = siteContent['nav']['nav-item-4'];
navigation[4].textContent = siteContent['nav']['nav-item-5'];
navigation[5].textContent = siteContent['nav']['nav-item-6'];


// Call To Action
let callToActionTitle = document.querySelector('h1');

callToActionTitle.textContent = siteContent['cta']['h1'];


//CTA button
let callToActionButton = document.querySelector("button");

callToActionButton.textContent = siteContent['cta']['button'];


//CTA Image and main content image
let callToActionImage = document.querySelector('#cta-img');
callToActionImage.setAttribute('src', siteContent['cta']['img-src'])

let mainContentImage = document.querySelector('#middle-img');
mainContentImage.setAttribute('src', siteContent['main-content']['middle-img-src'])


//Updating all h4
let mainContentFeatures = document.querySelectorAll('h4');

mainContentFeatures[0].textContent = siteContent['main-content']['features-h4'];
mainContentFeatures[1].textContent = siteContent['main-content']['about-h4'];
mainContentFeatures[2].textContent = siteContent['main-content']['services-h4'];
mainContentFeatures[3].textContent = siteContent['main-content']['product-h4'];
mainContentFeatures[4].textContent = siteContent['main-content']['vision-h4'];
mainContentFeatures[5].textContent = siteContent['contact']['contact-h4'];



//Update all paragraphs content
let allParagraphContent = document.querySelectorAll('p');

allParagraphContent[0].textContent = siteContent['main-content']['features-content'];
allParagraphContent[1].textContent = siteContent['main-content']['about-content'];
allParagraphContent[2].textContent = siteContent['main-content']['services-content'];
allParagraphContent[3].textContent = siteContent['main-content']['product-content'];
allParagraphContent[4].textContent = siteContent['main-content']['vision-content'];
allParagraphContent[5].textContent = siteContent['contact']['address'];
allParagraphContent[6].textContent = siteContent['contact']['phone'];
allParagraphContent[7].textContent = siteContent['contact']['email'];
allParagraphContent[8].textContent = siteContent['contact']['copyright'];


//  Task 3: Add new content
//  Change the color of the navigation text to be green.
//  Utilize .appendChild() and .prepend() to add two new items to the navigation system. You can call them whatever you want.
//  Check your work by looking at the original html in the browser