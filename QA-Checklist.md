QA Testing Checklist - Portfolio Website

Project: Kaila Wong Portfolio  
URL: https://phowongraphy.ca  
GitHub Repo: https://kierchi.github.io/portfolio-wip/  
Date: March 27, 2026  
Tester: Kaila Wong  
Issue Tracker: GitHub Issues  

Testing Environment
Devices Tested:
-Desktop: Windows 11 PC
-Mobile: iPhone 17 Pro (iOS 26.3.1)
-Tablet: iPad Pro 11" M5 (iOS 26.3.1)

Browsers Tested:
-Google Chrome (Windows, iOS)
-Safari (iOS)
-Microsoft Edge (Windows)


Performance Baseline:
Lighthouse Scores (index.html):

Performance (Desktop): 92/100
Performance (Mobile): 87/100 ⚠️ Needs improvement
Accessibility: 95/100
SEO: 99/100
Best Practices: 96/100


Test Categories
✅ SEO & Metadata

 All pages have unique meta descriptions (Issue #6)
 Favicon is present in browser tab (Issue #1)
 Open Graph tags for social sharing
 Page titles are optimized
 sitemap.xml exists
 robots.txt configured

✅ Accessibility (WCAG 2.1)

 Overall accessibility score 95/100
 All images have descriptive alt text (Issue #4)
 Color contrast meets WCAG AA standards
 Keyboard navigation fully functional
 Skip-to-content link present
 Form labels properly associated
 ARIA labels on interactive elements

✅ Mobile Responsiveness

 Hero section fits mobile viewport without cutting off
 Navigation menu works on all pages (Issue #3)
 "Next Project" button visible on mobile (Issue #11)
 All text readable without zooming
 No horizontal scrolling
 Touch targets meet 44px minimum

✅ Browser Compatibility

 Chrome on Windows 11
 Chrome on iOS 26.3.1
 Safari on iOS 26.3.1
 Edge on Windows 11
 All pages render consistently across browsers
 No JavaScript errors in console

✅ Navigation & Functionality

 All navigation links work correctly
 Mobile navigation present on ALL pages (Issue #3)
 Mobile menu closes after clicking links
 "Next Project" / "Previous Project" buttons visible on mobile (Issue #11)
 All internal links navigate properly
 All images load successfully (no broken images)
 Custom 404 page displays for broken links

✅ Performance Optimization

 Images are optimized (consider WebP format) (Issue #8)
 Images use lazy loading (loading="lazy") (Issue #9)
 Images have width and height attributes (Issue #13)
 CSS files consolidated where possible (Issue #5)
 No duplicate JavaScript listeners (Issue #12)
 Font files load efficiently

✅ Content Quality

 All alt text is descriptive (no "...") (Issue #4)
 Real project screenshots/images present
 Resume PDF accessible and downloads properly
 Contact form has validation
 All content accurate and complete

✅ Code Quality

 No duplicate JavaScript code across files (Issue #12)
 HTML validates (no major errors)
 CSS validates
 No console errors on any page
 Proper semantic HTML usage


Issues Found
Total Issues: 10
Priority Breakdown:

High Priority: 1 (Issue #3)
Medium Priority: 4 (Issues #4, #6, #9, #13)
Low Priority: 5 (Issues #1, #5, #8, #11, #12)

View detailed bug reports: GitHub Issues

Detailed Bug List
High Priority Issues:
#3 - Motion Graphics Page Missing Mobile Navigation

Type: bug, mobile, high-priority
Impact: Mobile users cannot navigate from this page
Status: Open


Medium Priority Issues:
#4 - Images Missing Alt Text

Type: bug, accessibility, SEO, medium-priority
Impact: Screen readers cannot describe images, SEO penalty
Status: Open

#6 - Missing Meta Descriptions on All Pages

Type: bug, accessibility, SEO, medium-priority
Impact: Poor search engine results, no social media preview text
Status: Open

#9 - No Lazy Loading on Images

Type: bug, performance, medium-priority
Impact: Slower page load, poor mobile performance (70/100)
Status: Open

#13 - Missing width and height Attributes on Content Images

Type: performance, medium-priority
Impact: Cumulative Layout Shift (CLS), poor user experience
Status: Open


Low Priority Issues:
#1 - Favicon Missing

Type: bug, accessibility, low-priority
Impact: No brand icon in browser tabs
Status: Open

#5 - Multiple CSS Files Loaded (Performance)

Type: bug, performance, low-priority
Impact: Extra HTTP requests, slightly slower load times
Status: Open

#8 - No WebP Format Images

Type: performance, low-priority
Impact: Larger file sizes, slower mobile performance
Status: Open

#11 - "Next Project" Navigation Hidden on Mobile

Type: bug, accessibility, mobile, low-priority
Impact: Mobile users can only navigate backwards through projects
Status: Open

#12 - Duplicate Smooth Scroll Event Listeners on motion-graphics.html

Type: bug, performance, low-priority
Impact: Code inefficiency, potential scroll conflicts
Status: Open


Pages Tested

 index.html (Homepage)
 about.html (About page)
 contact.html (Contact page)
 teeny-me.html (Project page)
 neon-veil.html (Project page)
 motion-graphics.html (Project page)
 logofolio.html (Project page)
 misc.html (Misc page)
 404.html (Error page)


Testing Notes

Mobile performance (70/100) primarily due to:

Unoptimized images (no WebP format)
Missing lazy loading on images
Missing width/height attributes causing layout shift
Multiple CSS file requests


Accessibility score strong (95/100) but improvable:

Some images missing alt text
Mobile navigation missing on motion-graphics.html


SEO score good (91/100) but needs:

Meta descriptions on all pages
Favicon implementation


Mobile navigation critical issues:

Missing entirely on motion-graphics.html
"Next Project" button hidden on mobile across all project pages


Performance optimization opportunities:

Convert images to WebP format
Add lazy loading attributes
Add width/height to prevent layout shift
Consolidate CSS files
Remove duplicate JavaScript




Bug Categories Summary
Critical/High Priority (Must Fix):

Issue #3: Motion Graphics Page Missing Mobile Navigation

Medium Priority (Should Fix):

Issue #4: Images Missing Alt Text
Issue #6: Missing Meta Descriptions on All Pages
Issue #9: No Lazy Loading on Images
Issue #13: Missing width and height Attributes on Content Images

Low Priority (Nice to Have):

Issue #1: Favicon Missing
Issue #5: Multiple CSS Files Loaded
Issue #8: No WebP Format Images
Issue #11: "Next Project" Navigation Hidden on Mobile
Issue #12: Duplicate Smooth Scroll Event Listeners


Next Steps

✅ Fix High Priority bug (mobile navigation)
✅ Address Medium Priority issues (alt text, meta descriptions, lazy loading, image dimensions)
✅ Optimize performance (WebP conversion, CSS consolidation)
✅ Add missing assets (favicon)
✅ Clean up code (remove duplicate JavaScript)
✅ Retest all fixes on multiple devices/browsers
✅ Run final Lighthouse audits to verify improvements

Performance Improvement Plan
Current Mobile Score: 70/100

Expected After Fixes:
-Add lazy loading → +5-10 points
-Add width/height attributes → +3-5 points (reduces CLS)
-Convert to WebP → +5-8 points
-Consolidate CSS → +2-3 points

Target Mobile Score: 85-90/100