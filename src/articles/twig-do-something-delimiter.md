---
path: '/articles/twig-do-something-delimiter'
title: 'The Twig "Do Something" Delimiter'
date: '2018-01-26'
intro: The Twig "Do-Something" Delimiter is used to perform various actions. In Drupal you use this delimiter to perform tasks like conditionally displaying page regions if they are not empty.
---

 In Drupal you use this delimiter to perform actions like adding classes to a template depending on a template variable, applying conditional rules for rendering items (like if-else blocks), displaying page regions if they are not empty, etc.
 
 Example:
 Check if a theme region exists before displaying it.


```twig
 {% if page.sidebar_second %}
   <div>{{ page.sidebar.second }}</div>
 {% endif %}
```

Conditional region display:

```
{% if is_admin %}
  <div class = "admin-only-block">{{ admin_block }}</div>
  {% endif %}
```

### Removing Whitespace:

```{% spaceless %}{% endspaceless %}```

This removes all non-text whitespace between HTML tags excluding spaces inside blocks of text or space inside an HTML tag.

To trim leading or trailing whitespace on either side of Twig delimiters insert a hyphen within the delimiter: `{%- variable -%}`