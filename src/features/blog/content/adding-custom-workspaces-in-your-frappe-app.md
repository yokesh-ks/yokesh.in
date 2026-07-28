---
title: "Adding Custom Workspaces in Your Frappe App"
description: "Step-by-step guide to creating custom workspaces in Frappe. Learn to link modules, set permissions, and display workspaces in your app."
pubDate: "Nov 8 2024"
coverImage: "/a-complete-guide-to-adding-custom-workspaces-in-your-frappe-app-og.png"
category: "development"
ogImage: "https://www.yokesh.in/a-complete-guide-to-adding-custom-workspaces-in-your-frappe-app-og"
keywords: "Frappe framework, custom workspaces, DocType, ERP development, module definition, bench commands, workspace permissions, Frappe customization, role permissions, app configuration"
---

In Frappe, custom apps allow you to create tailored solutions that meet specific business requirements. One of the key features of Frappe is the ability to organize related DocTypes, actions, and functionality within custom workspaces. However, after developing a custom workspace within your app, it may not automatically appear in the app list on your Frappe site. This guide will walk you through the process of integrating a custom workspace within your custom app, linking it to your module, and ensuring it appears on the main app list for easy access by users.

Whether you're building a simple app or a more complex enterprise solution, this step-by-step guide will help you set up and display your custom workspace correctly.

## Step 1: Create Your Custom App in Frappe

Before you create a custom workspace, you need to have a custom app installed on your Frappe site. Here's how to create and install a custom app:

1. Create a Custom App:

```bash
bench new-app your_custom_app_name
```

2. Install the Custom App on Your Site:

- Once your app is created, you need to install it on your Frappe site

```bash
bench --site your_site_name install-app your_custom_app_name
```

3. Verify Installation:

- Go to the About section on your site to confirm that your custom app is listed under "Installed Apps."

## Step 2: Set Up the Custom Workspace

Now that your custom app is installed, you can set up a custom workspace to organize and display relevant DocTypes or actions. Follow these steps:

1. Create a New Workspace:

- In Frappe, go to the Workspace doctype and create a new workspace.
- Name your workspace (e.g., "Demo Workspace") and link it to the module of your custom app. This ensures the workspace is part of your custom app and can be displayed in the app list.

2. Link DocTypes to the Workspace:
- Add the DocTypes you want to showcase in the workspace. For example, if you have an "Alert Button" DocType or any other custom DocType, link it to the workspace. This allows users to access these DocTypes directly from the workspace.

3. Customize the Workspace Layout:
- Configure the workspace by adding sections or cards to display the relevant DocTypes or actions in an organized way.

## Step 3: Configure the Module Def for the Custom App

Each custom app in Frappe is associated with a module definition (Module Def) to ensure it is recognized by the system and appears in the app list.

1. Create or Edit the Module Definition:

- Go to the Module Def doctype and create a new module for your custom app if one doesn't already exist.
- Ensure that the module is linked to your custom workspace by setting the Module field to your custom app.

2. Set Workspace Visibility:

- Ensure that the workspace you created is configured to be visible in the app list. In the workspace settings, select the options to make it publicly available to the users within your custom app.

## Step 4: Create and Link a DocType

One critical step to ensure your custom workspace appears correctly for users is to have at least one DocType linked to the workspace. This is important because Frappe workspaces require DocTypes or other elements to be displayed within them. Without a DocType, the workspace might not appear or might not have content visible to the user.

1. Create a DocType:

- Create a custom DocType (e.g., "Alert Button") that will be displayed in the workspace.
- Once created, make sure this DocType is properly configured and linked to the workspace.

2. Set Permissions for the DocType:

- You must assign the necessary permissions for the user role that should be able to view the workspace. For example, if you want the "Employee" role to see the workspace, grant them permissions to view the DocType in the Role Permission Manager.
- Once permissions are correctly set, the employee user will be able to access the workspace and see the linked DocType.

## Step 5: Test Your Custom Workspace

Once you've created the workspace and set permissions, it's important to test the setup to ensure everything is working as expected.

1. Log in as a User with the Relevant Role:

- Log in as a user who has the role that has been granted permissions for the custom workspace (e.g., "Employee").
- Navigate to the /app/home page or the specific module to see if the custom workspace appears in the app list.

2. Verify Workspace and DocTypes:

- Ensure that the custom workspace is visible in the app list and that all DocTypes, actions, or other elements linked to the workspace are accessible and functional.

## Troubleshooting Tips
If your custom workspace is not appearing as expected, here are a few common troubleshooting steps:

1. Workspace Not Visible:

- Check that the workspace is correctly linked to your custom app module and that the visibility settings are enabled for it.
- Make sure the workspace has at least one DocType linked, as empty workspaces may not be displayed.

2. Permissions Issues:

- If users can't see the workspace or its linked DocTypes, revisit the permissions for each DocType. Ensure that roles assigned to users have the correct permissions to view and interact with the workspace.

3. Check the Module Def:

- Ensure that your custom app module is properly defined in the Module Def doctype and that it is linked to the workspace.

## Conclusion

By following the steps in this guide, you should now be able to create a custom workspace in your Frappe app and ensure it appears in the app list on your site. Custom workspaces allow you to organize and display relevant DocTypes and actions within your app, offering users a clean and efficient interface. Whether you're building a simple solution or a complex application, custom workspaces help enhance the usability and user experience of your Frappe app.

With the workspace correctly set up and permissions configured, you can now enjoy a fully functional, integrated workspace within your custom app, making your Frappe site more intuitive and user-friendly. Happy developing!