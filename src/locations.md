---
layout: layouts/single-location.html
pagination:
  data: locations.items
  size: 1
  alias: location
permalink: "{{ location.slug | slug }}/"
eleventyComputed:
  title: "{{ location.seo-title }}"
  heading: "<div class='navbar-page_title'><h1>{{ location.title }}</h1><p>Oil Change Miami</p></div>"
  save_copy: "Save $20"
  promotion: "on any Oil Change at <br/> Valvoline {{ location.title }}"
  promotion_copy: "Show this coupon when you arrive at {{ locations.store_prefix }} {{ location.title }} for your quick service oil change. Save the coupon image to your phone, open this web page, take a screenshot, or print it. Whatever is easiest for you!"
  location_directions: "{{ locations.store_prefix }} {{ location.title }} is {{ location.located_copy }} at <a class='text-bright-blue hover:text-bright-blue-saturated hover:underline' target='_blank' href='{{location.gmap}}'>{{ location.address }}</a>. Feel free to give us a call at {{ location.phone }}."
  # page.url: "/{{ location.slug | slug }}/"
  location_slug: "{{ location.slug | slug }}"
  nav_location: "<ul class='navbar-location-links flex-initial text-sm'>
    <li>
    <i class='font-icomoon im-phone'></i>
    {{ location.phone }}
    </li>
    <li>
    <i class='font-icomoon im-map-marker'></i>
      <a class='underline' target='_blank' href='{{ location.gmap }}'>
      {{ location.street_address }}
      </a>
    </li>
  </ul>"

---
