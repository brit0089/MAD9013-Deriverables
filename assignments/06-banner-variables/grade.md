# Grade

Use of variables: 0/1
Modifier class: .5/1
General CSS Code Quality: .75/1
Design Matching: 1/1
File Organization & Commits: 1/1
Total: 3.25/5

## Comments
The goal of this assignment was to set the banner height (`min-height`), vertical alignment (`align-items`), and horizontal alignment (`justify-content` and `text-align`) with variables and then update those variables with the modifier classes.

Checkout the explainer video for more information:
https://youtu.be/gHbZ92-kOK4

A couple specific comments:
- The individual modifier classes should only change the property that is relevant to that modifier class. You should then combine them together to make different banner options.
  - For example: `.banner--bottom` should only change the vertical alignment to align to the bottom and not change the horizontal alignment or banner size. Same with `.banner--right`, it should change the horizontal alignment to the right, but not change the vertical alignment.
- For the variables, set a single variable for each property that will need to change. So in this case you only need 3 variables: `--vertical-align`, `--horizontal-align`, and `--height`. Then, on each modifier class, update the variable to be the appropriate value.
  - For `--vertical-align`, the default is `--vertical-align: center;` so the end result is `align-items: center;`. For other modifier classes you would then change the value to `--vertical-align: flex-start;` for top aligned, or `--vertical-align: flex-end;` for bottom aligned.
- The default margin is missing from the `.container` class
- The `.banner--large` shouldn't change the padding.