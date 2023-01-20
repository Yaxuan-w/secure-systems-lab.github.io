---
---

{% include filter_tags_preamble.js %}

// Populate a master hash with the mapping of tag_name=>project_name
{% for project in site.data.data.projects.project_cards %}
  {% if project.status.tag != "retired" %}
    {% continue %}
  {% endif %}
   {% for tag in project.tags %}
     mapTagToAnchor(    '{{ tag.anchor }}', '{{ project.anchor }}');
     mapTagToPrettyName('{{ tag.anchor }}', '{{ tag.name }}');
   {% endfor %}
{% endfor %}

{% include filter_tags.js pagename='project' %}

