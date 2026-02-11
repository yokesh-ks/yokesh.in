---
title: "Using React Hot Toast for Notifications"
description: "Quickly implement toast notifications in your React app with React Hot Toast for a smooth user experience."
pubDate: "Apr 6 2024"
ogImage: "https://www.yokesh.in/blog-1-og.png"
---

Integrate React Hot Toast for Notifications

```bash
yarn add react-hot-toast
```

Then, import and add the `Toaster` component at the top of your app:

```jsx
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <Toaster />
      {/* Other components */}
    </div>
  );
}
```

Now, you can use toast notifications throughout your application:

```jsx
// Show a loading toast for uploading
toast.loading('Uploading Resume...');

// Remove the loading toast and show a success notification after successful upload
toast.remove();
toast.success('Resume uploaded successfully');

// Remove loading toast and show an error notification if upload fails
toast.remove();
toast.error(data?.message ?? 'Error uploading resume');
```

This setup provides a user-friendly way to display notifications, enhancing the overall user experience in your React application.
