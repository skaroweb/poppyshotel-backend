import type { Schema, Struct } from '@strapi/strapi';

export interface DynamicZoneBanner extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface DynamicZoneBanquet extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_banquets';
  info: {
    displayName: 'banquet_hall';
  };
  attributes: {
    banquet_desc: Schema.Attribute.Blocks;
    banquet_name: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
  };
}

export interface DynamicZoneBanquetVenue extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_banquet_venues';
  info: {
    displayName: 'banquet_venue';
  };
  attributes: {
    arrangement: Schema.Attribute.String;
    capacity: Schema.Attribute.String;
    hallname: Schema.Attribute.String;
    size: Schema.Attribute.String;
  };
}

export interface DynamicZoneContactDetails extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_contact_details';
  info: {
    displayName: 'contact_details';
  };
  attributes: {
    address_desc: Schema.Attribute.Blocks;
    address_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    mail_button: Schema.Attribute.Component<'shared.button', false>;
    mail_text: Schema.Attribute.String;
    phone_link: Schema.Attribute.Component<'shared.link', true>;
    phone_text: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneDining extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_dinings';
  info: {
    displayName: 'Dining';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    dining_single: Schema.Attribute.Component<
      'dynamic-zone.dining-single',
      true
    >;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneDiningSingle extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_dining_singles';
  info: {
    displayName: 'Dining_single';
  };
  attributes: {
    category: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    dining_logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    swiggy: Schema.Attribute.Component<'shared.link', true>;
    timing: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    zomato: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface DynamicZoneExperiences extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_experiences';
  info: {
    displayName: 'Experiences';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    experiences: Schema.Attribute.Relation<
      'oneToMany',
      'api::experience.experience'
    >;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFacilities extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_facilities';
  info: {
    displayName: 'Facilities';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    facilities_list: Schema.Attribute.Component<
      'dynamic-zone.facilities-list',
      true
    >;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneFacilitiesList extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_facilities_lists';
  info: {
    displayName: 'facilities_list';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneGallery extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneHighlightFacilities extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_highlight_facilities';
  info: {
    displayName: 'highlight_facilities';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DynamicZoneLocation extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_locations';
  info: {
    displayName: 'Location';
  };
  attributes: {
    source_url: Schema.Attribute.Text;
  };
}

export interface DynamicZoneOffers extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_offers';
  info: {
    displayName: 'Offers';
  };
  attributes: {
    heading: Schema.Attribute.String;
    offer: Schema.Attribute.Relation<'oneToOne', 'api::offer.offer'>;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneOverview extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneOverviewHotel extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_overview_hotels';
  info: {
    displayName: 'Overview_hotel';
  };
  attributes: {
    heading: Schema.Attribute.String;
    hotels: Schema.Attribute.Relation<'oneToMany', 'api::hotel.hotel'>;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneOverviewHotelDetails
  extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_overview_hotel_details';
  info: {
    displayName: 'Overview_hotel_details';
  };
  attributes: {
    booknow_button: Schema.Attribute.Component<'shared.button', false>;
    explore_button: Schema.Attribute.Component<'shared.button', false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface DynamicZoneOverviewRoom extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_overview_rooms';
  info: {
    displayName: 'Overview_room';
  };
  attributes: {
    bedsize: Schema.Attribute.String;
    booknow_button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Blocks;
    persons: Schema.Attribute.String;
    squarefeet: Schema.Attribute.String;
  };
}

export interface DynamicZoneOverviewRoomDetails extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_overview_room_details';
  info: {
    displayName: 'Overview_room_details';
  };
  attributes: {
    bedsize: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image_alt: Schema.Attribute.String;
    persons: Schema.Attribute.String;
    short_desc: Schema.Attribute.String;
    squarefeet: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
    title: Schema.Attribute.String;
    viewroom: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface DynamicZoneRoomRules extends Struct.ComponentSchema {
  collectionName: 'components_dynamic_zone_room_rules';
  info: {
    displayName: 'room_rules';
  };
  attributes: {
    cancellation_policy: Schema.Attribute.String;
    cancellation_policy_desc: Schema.Attribute.Blocks;
    check_in_out: Schema.Attribute.String;
    check_in_out_desc: Schema.Attribute.Blocks;
    child_policy: Schema.Attribute.String;
    child_policy_desc: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    pet_policy: Schema.Attribute.String;
    pet_policy_desc: Schema.Attribute.Blocks;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    brand_logos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    contact_links: Schema.Attribute.Component<'shared.link', true>;
    copyrights: Schema.Attribute.String;
    internal_links: Schema.Attribute.Component<'shared.link', true>;
    policy_links: Schema.Attribute.Component<'shared.link', true>;
    social_media: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalHeader extends Struct.ComponentSchema {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.button', false>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    navbar_items: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedBrandLogos extends Struct.ComponentSchema {
  collectionName: 'components_shared_brand_logos';
  info: {
    displayName: 'brand_logos';
  };
  attributes: {};
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
  };
  attributes: {
    target: Schema.Attribute.Enumeration<
      ['_blank', '_self', '_parent', '_top']
    >;
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_shared_newsletters';
  info: {
    displayName: 'newsletter';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    metaTitle: Schema.Attribute.String;
  };
}

export interface SharedSocialMediaLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_media_links';
  info: {
    displayName: 'social_media_links';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dynamic-zone.banner': DynamicZoneBanner;
      'dynamic-zone.banquet': DynamicZoneBanquet;
      'dynamic-zone.banquet-venue': DynamicZoneBanquetVenue;
      'dynamic-zone.contact-details': DynamicZoneContactDetails;
      'dynamic-zone.dining': DynamicZoneDining;
      'dynamic-zone.dining-single': DynamicZoneDiningSingle;
      'dynamic-zone.experiences': DynamicZoneExperiences;
      'dynamic-zone.facilities': DynamicZoneFacilities;
      'dynamic-zone.facilities-list': DynamicZoneFacilitiesList;
      'dynamic-zone.gallery': DynamicZoneGallery;
      'dynamic-zone.highlight-facilities': DynamicZoneHighlightFacilities;
      'dynamic-zone.location': DynamicZoneLocation;
      'dynamic-zone.offers': DynamicZoneOffers;
      'dynamic-zone.overview': DynamicZoneOverview;
      'dynamic-zone.overview-hotel': DynamicZoneOverviewHotel;
      'dynamic-zone.overview-hotel-details': DynamicZoneOverviewHotelDetails;
      'dynamic-zone.overview-room': DynamicZoneOverviewRoom;
      'dynamic-zone.overview-room-details': DynamicZoneOverviewRoomDetails;
      'dynamic-zone.room-rules': DynamicZoneRoomRules;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'shared.brand-logos': SharedBrandLogos;
      'shared.button': SharedButton;
      'shared.link': SharedLink;
      'shared.newsletter': SharedNewsletter;
      'shared.seo': SharedSeo;
      'shared.social-media-links': SharedSocialMediaLinks;
    }
  }
}
