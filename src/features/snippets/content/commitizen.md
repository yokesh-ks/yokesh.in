---
title: "Configure Commitizen with Conventional Changelog"
description: "Set up Commitizen with Conventional Changelog to enforce standardized commit messages and automate changelog generation in your projects."
pubDate: "Apr 7 2024"
ogImage: "https://www.yokesh.in/blog-1-og.png"
---

To set up Commitizen in your project, first install the necessary packages:

```json
"dependencies": {
  "commitizen": "^4.3.0",
  "cz-conventional-changelog": "^3.3.0"
}
```

Next, add the configuration to your `package.json`:

```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```

Finally, add a script to facilitate committing:

```json
"scripts": {
  "commit": "git-cz"
}
```

Now, you can run `npm run commit` to initiate the Commitizen prompt, ensuring your commit messages follow the conventional format.