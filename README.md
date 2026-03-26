Created a complete static coupon web app UI with a form for store, discount type/value, expiration date, and optional code prefix, plus a result section with generated coupon output and copy button.

Added client-side coupon logic to generate readable codes, format discount text, render a coupon summary, and copy the generated code to clipboard with user feedback.

Added responsive, card-based styling for layout, inputs, buttons, and coupon display to make the app visually polished and easy to use.

Committed the changes on the current branch with commit 3c4b47f and created the PR payload via the make_pr tool.

Testing

node --check script.js

git commit -m "Create initial coupon web app"
