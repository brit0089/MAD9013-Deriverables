# Grade

HTML Code Quality: .5/1
CSS Code Quality: 1.25/2
Design Matching: .75/1
File Organization & Commits: 1/1
Total: 3.5/5

## Comments
- Make sure you are using appropriate class names! You have used `sign-up` in a number of classes, which is not relevant to this Contact Us form.
  - You should definitely reference other deliverables when completing assignments, however you need to appropriately rename classes and update styles.
  - Also, make sure to remove extra elements from old assignments you do not need like the `<div class="sign-up__image"></div>`
- You have made a sub grid with the `<div class="sign-up__op">`. This is unnecessary. You could easily put all of the `<div class="form-unit">` in the same grid to make things more efficient and reduce unnecessary html tags.
- Never write in all caps in HTML as it is an accessibility issue. Use the css `text-transform` to make the text all caps.
- `<span><a>Terms and Services.</a></span>` the span serves no purpose and should be removed. The `a` must have an `href` even if it is just a `#` placeholder.
- Each `input`, `select`, `textarea`, etc. must have a `label` that is connect via the `id` of the input/select/textarea and the `for` of the `label`
  - Your radio buttons do not have labels
  - Your `select` id does not match the `label`
- The `textarea` and `select` should have the same base styles as the basic `input`
  - you have styled them individually and different.
- `:valid` green highlight is missing.