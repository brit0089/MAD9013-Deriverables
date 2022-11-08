# Grade

HTML Code Quality: .5/1
CSS Code Quality: 1/2
Design Matching: .5/1
File Organization & Commits: 1/1
Total: 3/5

## Comments

- There should be a `<section>` around all of the content as this is a section of related content.
- The first immediate child of the `section` should be a `.container` to align and size our content.

```html
<section class="card-grid">
  <div class="container">
    <!-- title and all card content goes here -->
  </div>
</section>
```

- The `.container` class is a specific class that should only be used for its main function of creating a maximum width for content and aligning it consistently. Do not use it in other contexts as it is confusing and will create conflicts with conflicting styles.
  - A more appropriate class name would be `.card__image` or `.image-wrap` depending on the naming convention you are going with.
- There should be an `<a href="#">` in your card as these cards link to another page. Either the entire card should be `<a href="#" class="card">` or the `span` should be changed to an `a`.
  - You have added `cursor: pointer;` to the `.card` to mimic clickable functionality. You should never add this to an element that can't be clicked. If you are doing so, that is a clue that you have used the wrong element.
- You should be using `min-width` media queries only. We are working Mobile First. Meaning our default styles are set for the mobile size, and then we add `min-width` media queries to update styles as our screens get larger.
- When creating web patterns, you should be creating it to be a self contained pattern than can easily be copied and reused in multiple places on a website.
  - You have applied the `grid` and other styles to the `body` which would affect your entire website whenever this is reused. In general, you should avoid setting styles on the `body` unless absolutely necessary.
  - You have set styles on `img` which will affect EVERY image on your site. Use more specific selectors like `.card img` to only target the images in your cards.
- On the `img`, use the `aspect-ratio` in the assignment notes. By using a `height`, you are creating an inconsistent size for the image.