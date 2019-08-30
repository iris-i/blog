---
path: '/articles/clone-drupal-8-site-acquia-devdesktop'
title: 'Clone a Drupal 8 Site into Acquia DevDesktop'
date: '2017-11-12'
tags: ["Drupal", "Acquia DevDesktop"]
background: 'bg/autumn.svg'
intro: Here's an easy method to clone an existing Drupal 8 site into your local environment using Acquia Dev Desktop. All you need is the site codebase and a database dump.
----

1. Compress and save the site files. (Everything from the folder where the docroot resides.)
2. Export your database and unzip.
3. Untar/unzip the files into your desired directory.
4. In devDesktop, click the bottom + sign and select "Import Local Site".
5. In Local codebase folder, choose your directory.
6. In the database field, select Start with a MySQL database dump file.
7. Select your unzipped database dump. If you used phpMyAdmin for the db export, you may encounter an error that says:  
```
You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '`value` longblob NOT NULL COMMENT 'The value.', PRIMARY KEY (`collection`,`nam' at line 3
```

This has a documented fix in this comment: https://www.drupal.org/node/2496331#comment-10029863 
8. Save options and click the link to visit your newly cloned site.
