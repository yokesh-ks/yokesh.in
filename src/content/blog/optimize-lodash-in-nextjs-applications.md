---
title: "Optimize Lodash in Next.js Applications"
description: "Reduce bundle size in Next.js by optimizing Lodash. Learn webpack, babel-plugin-lodash, and tree-shaking strategies for better performance."
pubDate: "Mar 22 2023"
coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6NDJ_JZYZjiJRl1MK0C66A.png"
category: "development"
ogImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*6NDJ_JZYZjiJRl1MK0C66A.png"
keywords: "Lodash optimization, Next.js, webpack, babel-plugin-lodash, bundle size, tree-shaking, lodash-webpack-plugin, performance optimization, JavaScript optimization, Next.js performance"
---

Lodash is a popular JavaScript library that provides a rich set of utility functions for common programming tasks, such as manipulating arrays and objects, working with dates and times, and performing mathematical operations. In a Next.js project, it’s important to optimize the way Lodash is included to reduce the size of the bundle and improve performance.

Here are some strategies you can try:

1.  Use a tool like webpack or rollup to bundle your code and dependencies. These tools can help to reduce the size of the bundle by eliminating unused code and optimizing the code that is included.
2.  Use a tool like `lodash-webpack-plugin` or `lodash-rollup-plugin` to optimize the way Lodash is included in the bundle. These plugins allow you to include only the specific functions that you need, rather than the entire Lodash library, which can help to reduce the size of the bundle.
3.  Consider using a tool like `babel-plugin-lodash` to further optimize the way Lodash is included in the bundle. This plugin allows you to replace certain Lodash functions with equivalent, smaller, native JavaScript functions.
4.  Make sure to use the `next/babel` preset in your `.babelrc` file. This preset includes a number of plugins that can help to reduce the size of the bundle, including the `babel-plugin-lodash` plugin mentioned above.

Lodash-webpack-plugin
---------------------

You can use lodash-webpack-plugin to optimize the way Lodash is included in a bundle created with webpack. lodash-webpack-plugin allows you to specify which functions from the Lodash library should be included in the bundle, which can help to reduce the size of the bundle by eliminating unnecessary functions.

To use lodash-webpack-plugin in a Next.js project, you will need to install it first. You can install it using npm or yarn:

```
# using npm
npm install --save-dev lodash-webpack-plugin
# using yarn
yarn add --dev lodash-webpack-plugin
```

Next, you will need to create a next.config.js file in the root of your project if you don’t already have one. In this file, you can configure the lodash-webpack-plugin by requiring it and adding it to the list of webpack plugins.

Here’s an example of how you might do this in a Next.js project:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*uy_FnpWuFeYmJpGTWuV3Ww.png)

By default, lodash-webpack-plugin will include all of the functions in the Lodash library in the bundle. If you only want to include a subset of the functions, you can pass an options object to the plugin with a shorthands property set to false and a cloning property set to false. This will exclude the shorthand and cloning functions from the bundle:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ToV8MCjkyKKIDVLee4jQ2w.png)

You can also use the modularize property to specify which functions should be included in the bundle. For example, to include only the map and filter functions, you could do the following:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*SRL1F7hWnKb7U55c9CngsQ.png)

babel-plugin-lodash
-------------------

A simple transform to cherry-pick Lodash modules so you don’t have to.

Combine with lodash-webpack-plugin for even smaller cherry-picked builds!

To use babel-plugin-lodash in a Next.js project, you will need to install it first. You can install it using npm or yarn:

```
# using npm
npm install --save-dev babel-plugin-lodash
# using yarn
yarn add --dev babel-plugin-lodash
```

Next, you will need to configure Babel to use the babel-plugin-lodash plugin. In a Next.js project, you can do this by creating a .babelrc file in the root of your project and adding the plugin to the list of plugins.

Here’s an example of how you might configure babel-plugin-lodash in a Next.js project:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*joRGHaax0uo4-MpQIuMenQ.png)

By default, babel-plugin-lodash will replace all of the Lodash functions in your code with equivalent, native JavaScript functions. If you only want to replace certain functions, you can pass an options object to the plugin with a lodash property set to an array of the functions you want to replace.

For example, to replace only the map and filter functions, you could do the following:

![captionless image](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*HDYL3QjWWaXNKkv1n66QqA.png)

In conclusion, Lodash is a popular JavaScript library that provides utility functions for common programming tasks. When using Lodash in a Next.js project, it’s important to consider strategies for optimizing its inclusion in the bundle, including using tools like webpack, rollup, lodash-webpack-plugin, babel-plugin-lodash, and npm/yarn. Lodash-webpack-plugin can help optimize the way Lodash is included in the bundle, while babel-plugin-lodash can replace certain Lodash functions with equivalent, smaller, native JavaScript functions. By implementing these strategies, developers can improve the performance and reduce the size of their Next.js applications.