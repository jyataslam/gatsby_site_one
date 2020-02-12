const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-template-blog-template-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/templates/blog-template/blog-template.js"))),
  "component---src-templates-blog-list-blog-list-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/templates/blog-list/blog-list.js"))),
  "component---src-templates-project-template-project-template-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/templates/project-template/project-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/.cache/dev-404-page.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/blog.js"))),
  "component---src-pages-company-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/company.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/contact.js"))),
  "component---src-pages-index-banner-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/index-banner.js"))),
  "component---src-pages-index-particle-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/index-particle.js"))),
  "component---src-pages-index-slider-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/index-slider.js"))),
  "component---src-pages-index-video-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/index-video.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/index.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/jyataslam/Desktop/gatsby_website_one/src/pages/project.js")))
}

