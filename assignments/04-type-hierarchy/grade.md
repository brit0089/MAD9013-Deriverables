# Grade

HTML Code Quality: .75/1
CSS Code Quality: 1/2
Design Matching: .5/1
File Organization & Commits: 1/1
Total: 3.25/5

## Comments
Overall solid! A couple things:
- You have not included a link to the font in your `html` nor included the font files with an `@font-face`. Because of this, the Roboto font is not loading and the back up font is being shown.
- `<title>ADD TITLE</title>` you didn't add a descriptive title
- Do not use `px` units. They are absolute units and cause accessibility issues. That goes both for in rulesets and when using media queries.
  - This is the second assignment in a row you have used pixels when you should not be. Each time you use them the penalty will get harsher!
- For this assignment, you should use the `type-scale.com` tool to get your type scale. Your font sizes are MUCH too large and need to be fixed ahead of future assignments. Here are the scales I used:
  - Default/Small: 1.125 (Major Second)
  - Medium: 1.2 (Minor Third)
  - Large: 1.25 (Major Third)
- Please review the lesson on creating type hierarchy. You have not followed the style that I have demonstrated.