---
layout: layouts/single-location.html
pagination:
  data: locations.items
  size: 1
  alias: location
permalink: "{{ location.slug | slug }}/"
eleventyComputed:
  title: "{{ location.seo-title }}"
  heading: "<div class='flex-1 border-l-2 pl-4'><h1 class='lg:text-3xl font-bold leading-tight text-header-copy'>{{ location.title }}</h1><p>Oil Change Miami</p></div>"
  save_copy: "Save $20"
  promotion: "on any Oil Change at <br/> Valvoline {{ location.title }}"
  promotion_copy: "Just present the coupon when you arrive at {{ locations.store_prefix }} {{ location.title }} for your quick service oil change. Save the coupon image to your phone, open this web page, take a screenshot, or print it. Whatever is easiest for you!"
  location_directions: "{{ locations.store_prefix }} {{ location.title }} {{ locations.store_prefix }} is {{ location.located_copy }} at <a class='text-bright-blue underline' target='_blank' href='{{location.gmap}}'>{{ location.address }}</a>. Feel free to give us a call at {{ location.phone }}."
  # page.url: "/{{ location.slug | slug }}/"
  location_slug: "{{ location.slug | slug }}"
  nav_location: "<ul class='flex-none text-sm'>
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
