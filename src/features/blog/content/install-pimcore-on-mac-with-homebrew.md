---
title: "Install Pimcore on Mac with Homebrew"
description: "Complete guide to installing Pimcore on Mac using Homebrew and Composer. Set up PHP, MySQL, Symfony CLI, and configure Pimcore locally."
pubDate: "Mar 22 2023"
coverImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DRkw9m6t18H0Dn-yL_bg8w.png"
category: "development"
ogImage: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DRkw9m6t18H0Dn-yL_bg8w.png"
keywords: "Pimcore, Homebrew, Composer, Mac installation, MySQL, PHP, Symfony CLI, CMS, local development, Pimcore setup"
---

This tutorial provides a step-by-step guide on how to install Pimcore, an open-source content management system, on a Mac using Homebrew and Composer. The tutorial covers the installation of Composer, MySQL, PHP, and Symfony CLI, and the downloading of Pimcore project files. It also includes instructions on how to create a new database, install Pimcore dependencies, and start the Symfony web server to access the Pimcore project in a web browser.

**Step 1: Install Composer**

Composer is a dependency manager for PHP. You can use Homebrew to install it on your machine. Open the terminal and enter the following command:brew install compose

```bash
brew install composer
```

Link for more information: [https://formulae.brew.sh/formula/composer](https://formulae.brew.sh/formula/composer)

**Step 2: Install MySQL**

MySQL is a widely used open-source relational database management system. You can use Homebrew to install it on your machine. Here’s how:

2.1 Open the Terminal app on your Mac.

2.2 Enter the following command to install MySQL:

```bash
brew install mysql
```

2.3 After MySQL is installed, start the MySQL service by running the following command:

```bash
brew services start mysql
```

2.4 Secure the MySQL installation by running the following command and following the prompts:

```bash
mysql_secure_installation
```

2.5 After the secure installation, login to MySQL by running the following command:

```bash
mysql -u root -p
```

2.6 If you encounter an error when trying to log in to MySQL, try running the following command to start the MySQL shell:

```bash
mysql.server start
```

And that’s it! You have successfully installed MySQL on your machine and secured the installation. You can now use MySQL for your projects.

Link for more information : [https://formulae.brew.sh/formula/mysql](https://formulae.brew.sh/formula/mysql)

**Step 3: Install PHP**

PHP is a server-side scripting language that is used to build web applications. You can use Homebrew to install it on your machine. Open the terminal and enter the following command:

```bash
brew install php
```

**Step 4: Install Symfony CLI**

Symfony CLI is a command-line interface for the Symfony framework. You can use Homebrew to install it on your machine. Here’s how:

Enter the following command to add the Symfony CLI tap:

```bash
brew tap symfony-cli/tap
```

Enter the following command to install the Symfony CLI:

```bash
brew install symfony-cli
```

After Symfony CLI is installed, you can use it to create and manage Symfony projects on your machine.

**Step 5: Download Pimcore Project Files**

5.1 Open the Terminal app on your Mac.

5.2 Enter the following command to create a new Pimcore project using Composer and download the necessary files:

```bash
COMPOSER_MEMORY_LIMIT=-1 composer create-project pimcore/demo my-project
```

This command creates a new Pimcore project named “my-project” in the current directory. The COMPOSER_MEMORY_LIMIT=-1 flag is used to ensure that Composer has enough memory to complete the installation.

5.3 Create a new database for your project by running the following command:

```bash
mysql -u root -p -e "CREATE DATABASE project_database charset=utf8mb4;"
```

This command creates a new database named “project_database” with the character set utf8mb4. You will need to replace “project_database” with the name you want to give to your database. The -u flag specifies the MySQL username, which is “root” by default. The -p flag prompts you to enter the MySQL password. If you have not set a password for MySQL, you can omit the -p flag.

5.4 Navigate to the project directory by running the following command:

```bash
cd ./my-project
```

This command navigates to the “my-project” directory, which was created in step 2.

5.5 Launch the Pimcore installer by running the following command:

```bash
./vendor/bin/pimcore-install
```

This command launches the Pimcore installer, which will guide you through the installation process. [https://pimcore.com/docs/pimcore/current/Development_Documentation/Getting_Started/Installation.html](https://pimcore.com/docs/pimcore/current/Development_Documentation/Getting_Started/Installation.html)

**Step 6: Install Pimcore Dependencies**

Navigate to the root directory of the downloaded Pimcore project files using the terminal and run the following command to install the project dependencies:

```bash
composer install
```

**Step 7: Start the server**

Start the Symfony web server by running the following command:

```bash
symfony serve:start
```

This will start the Symfony web server and allow you to access your Pimcore project in your web browser at http://localhost:8000.