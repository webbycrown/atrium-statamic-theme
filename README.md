# Atrium - Statamic Starter Kit

Atrium is an event venue starter kit for halls, conference floors, and booking-led venue brands. It is built for Statamic 5 with a navy-and-terracotta layout, city search, and Control Panel content management.

The kit ships event packages, city catalogs, venue listings, a multi-step booking path, blog layouts, gallery, portfolio, team, and inquiry forms. Visitors can browse halls and send an **event inquiry** — payment pages are present as a booking flow, not a live card gateway.

Atrium is a new kit. It does not replace or overwrite Journea.

**Live demo:** https://atrium-statamic.webbydemo.in/  
Local: http://192.168.29.45:8018/  
Control Panel: `/cp` — `admin@example.com` / `password`

Marketplace banners and listing fields: `/atrium-banners.html`

## Pages of Atrium

The Atrium starter kit includes a comprehensive set of pages for an event venue site:

- **Home Pages**: 3 variants (`/`, `/home-v2`, `/home-v3`)
- **Events**:
  - Events listing
  - Events grid
  - Events list
  - Event detail (`/events/{slug}`)
- **Cities**:
  - Cities listing
  - Cities v2
  - City detail (`/cities/{slug}`)
- **Venues**:
  - Venues listing
  - Venue detail (`/venues/{slug}`)
- **Booking**:
  - Booking landing
  - Cart
  - Contact
  - Payment
  - Complete
  - Dashboard
  - History
  - Detail
- **Blog**:
  - Blog listing
  - Blog grid
  - Blog sidebar
  - Blog detail
- **Gallery**:
  - Gallery listing
  - Gallery masonry
- **Portfolio**
- **Team**
- **Testimonials**
- **FAQs**
- **About**
- **Contact**
- **Account**: login, register, forgot password, reset password

## Collections

Organize your content with built-in collections (handles in parentheses):

- **Pages**: Site structure and hierarchical content.
- **Events** (`tours`): Bookable packages with images, pricing, and run-of-show fields.
- **Cities** (`destinations`): Cities that group events and venues.
- **Venues** (`hotels`): Halls and properties tied to a city.
- **Bookings**: Booking records created from the front-end flow.
- **Blogs**: Planner notes and venue stories.
- **Gallery**: Photo sets for halls and events.
- **Portfolio**: Featured events and case work.
- **Teams**: Venue managers and coordinators.
- **Testimonials**: Planner reviews.
- **FAQs**: Booking and hire questions.

## Taxonomies

- **Event type** (`tour_type`): Conference, gala, banquet, and similar types.
- **Blog category**
- **FAQ category**
- **Portfolio category**

## Features of Atrium

- **Venue catalog**: Events, cities, and halls managed from the Control Panel.
- **Event search**: Homepage and listing filters that send visitors to `/events`.
- **Event inquiry**: Dedicated form for hire questions instead of a live payment gateway.
- **Booking path**: Multi-step cart, contact, payment, and confirmation pages for demo and customization.
- **Page builder**: Hero, cities, popular events, and related content sets.
- **New palette**: Midnight navy `#0E2A47`, terracotta `#E07A3D`, brass `#C9A36A`.
- **Global settings**: Header, footer, logo, and site-wide copy from the Control Panel.
- **Responsive layout**: Desktop, tablet, and mobile.
- **Statamic 5 ready**: Built for Statamic 5.x.

## Control Panel Forms

- Event inquiry
- Contact us
- Subscription

## Global Settings

- Setting (brand, header, venue copy)
- Footer

## Installation

Follow the [Starter Kit installation instructions](https://statamic.dev/starter-kits/installing-a-starter-kit) to get started with Atrium.
Make sure you're running **Statamic 5.x** for compatibility.

### Installing into an existing site

```bash
php please starter-kit:install webbycrown/atrium-statamic-theme
```

### Installing via the Statamic CLI Tool

If you have the [Statamic CLI Tool](https://github.com/statamic/cli) installed, create a new Statamic installation with Atrium in one command:

```bash
statamic new my-site webbycrown/atrium-statamic-theme
```

## Changelog

### v1.0.0

- Initial release
- Event packages, cities, venues, and booking pages
- Inquiry forms and planner blog layouts
- Distinct navy and terracotta storefront

---
<div align="center">
  <strong>Made with ❤️ by <a href="https://www.webbycrown.com/custom-statamic-development-services-company/">WebbyCrown Solutions</a></strong>
</div>
