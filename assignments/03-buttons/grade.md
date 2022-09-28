# Grade

HTML Code Quality: .5/1
CSS Code Quality: 1/2
Design Matching: 1/1
File Organization & Commits: 1/1
Total: 3.5/5

## Comments
Overall solid. You are able to make the buttons looks correct, which is great. However your are spending a lot of time duplicating the same code over and over. The goal with this assignment is to set 90% of the styles for ALL of the buttons (both `<a>` and `<button>`) with a single `.btn` class and then create modifier classes that change only what styles are different. For example: the `.btn--secondary` class should only change the `background-color`, `border-color`, and `color` and the rest of the styles should be on the `.btn` class.

### HTML
- There can only be one `<h1>` per page.
- The first line of visual buttons under the "Links" heading should be `<a>` tags with the buttons styles applied.
- The `<span>` elements should be removed. They serve no purpose and should only be included when they are needed for extra styling.

### CSS
- Do not use `px` units. They are absolute units and cause accessibility issues.
- Use `em` for `padding` and `border-radius` unit size. This will allow the `padding` to grow/shrink based on the size of the text. If you do so, you don't need to change the `padding` on the small/large buttons;
- `cursor: pointer; cursor: hand;` you are setting the same property twice here. Use just `cursor: pointer;`
- Missing styles:
  - `border-radius`
  - `display: inline-block;`
  - You should include both a `:hover` and a `:focus`