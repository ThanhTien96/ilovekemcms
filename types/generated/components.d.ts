import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactForm extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_forms';
  info: {
    description: '';
    displayName: 'Contact Form';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'>;
    field: Schema.Attribute.Component<'input-field.input', true>;
    submitButton: Schema.Attribute.Component<'support.buttn', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContactContactLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_links';
  info: {
    description: '';
    displayName: 'Contact Link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    ref: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    description: '';
    displayName: 'footer';
  };
  attributes: {
    addressTitle: Schema.Attribute.String;
    contactDescription: Schema.Attribute.Text;
    contactLink: Schema.Attribute.Component<'contact.contact-link', true>;
    contactTitle: Schema.Attribute.Text & Schema.Attribute.Required;
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    social: Schema.Attribute.Component<'contact.contact-link', true>;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    description: '';
    displayName: 'header';
    icon: 'bulletList';
  };
  attributes: {
    footer: Schema.Attribute.Component<'footer.footer', false>;
    logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    navbar: Schema.Attribute.Component<'header.navlink', true>;
    searchBox: Schema.Attribute.Component<'input-field.search-box', false>;
    title: Schema.Attribute.String;
    topHeader: Schema.Attribute.Component<'header.top-header', false>;
  };
}

export interface HeaderNavlink extends Struct.ComponentSchema {
  collectionName: 'components_header_navlinks';
  info: {
    description: '';
    displayName: 'Nav link';
    icon: 'link';
  };
  attributes: {
    icon: Schema.Attribute.String;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderTopHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_top_headers';
  info: {
    description: '';
    displayName: 'Top Header';
  };
  attributes: {
    contact: Schema.Attribute.Component<'contact.contact-link', true>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomePageContactSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_contact_sections';
  info: {
    displayName: 'Contact Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    form: Schema.Attribute.Component<'contact.contact-form', false>;
    googleMapLink: Schema.Attribute.Text;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_page_hero_banners';
  info: {
    description: '';
    displayName: 'Hero Banner';
  };
  attributes: {
    button: Schema.Attribute.Component<'support.buttn', true>;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Text;
  };
}

export interface HomePageStepSection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_step_sections';
  info: {
    description: '';
    displayName: 'Step Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    mainMedia: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    progress: Schema.Attribute.Component<'support.progress-box', true>;
    step: Schema.Attribute.Component<'support.step-shoping', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomePageStorySection extends Struct.ComponentSchema {
  collectionName: 'components_home_page_story_sections';
  info: {
    description: '';
    displayName: 'Story Section';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    media: Schema.Attribute.Media<'images' | 'files', true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface InputFieldInput extends Struct.ComponentSchema {
  collectionName: 'components_input_field_inputs';
  info: {
    description: '';
    displayName: 'input';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      [
        'text',
        'password',
        'email',
        'url',
        'tel',
        'search',
        'number',
        'hidden',
        'date',
        'datetime-local',
        'month',
        'week',
        'time',
        'radio',
        'checkbox',
        'select',
        'file',
        'image',
        'color',
        'range',
        'textarea',
      ]
    >;
  };
}

export interface InputFieldSearchBox extends Struct.ComponentSchema {
  collectionName: 'components_input_field_search_boxes';
  info: {
    description: '';
    displayName: 'Search Box';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface MetaDataMetaData extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_meta_data';
  info: {
    description: '';
    displayName: 'Meta Data';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images' | 'files'>;
    metaTag: Schema.Attribute.Component<'meta-data.meta-tag', true>;
    title: Schema.Attribute.String;
  };
}

export interface MetaDataMetaTag extends Struct.ComponentSchema {
  collectionName: 'components_meta_data_meta_tags';
  info: {
    displayName: 'Meta Tag';
  };
  attributes: {
    content: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportButtn extends Struct.ComponentSchema {
  collectionName: 'components_support_buttns';
  info: {
    description: '';
    displayName: 'button';
  };
  attributes: {
    btnLink: Schema.Attribute.String;
    btnText: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'warning', 'dark']
    >;
  };
}

export interface SupportProgressBox extends Struct.ComponentSchema {
  collectionName: 'components_support_progress_boxes';
  info: {
    displayName: 'Progress box';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'files' | 'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SupportStepShoping extends Struct.ComponentSchema {
  collectionName: 'components_support_step_shopings';
  info: {
    description: '';
    displayName: 'Step Shoping';
  };
  attributes: {
    description: Schema.Attribute.Text;
    step: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface UtilProductSection extends Struct.ComponentSchema {
  collectionName: 'components_util_product_sections';
  info: {
    description: '';
    displayName: 'Product section';
  };
  attributes: {
    product_types: Schema.Attribute.Relation<'oneToMany', 'api::type.type'>;
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
  };
}

export interface UtilSecction extends Struct.ComponentSchema {
  collectionName: 'components_util_secctions';
  info: {
    displayName: 'Secction';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-form': ContactContactForm;
      'contact.contact-link': ContactContactLink;
      'footer.footer': FooterFooter;
      'header.header': HeaderHeader;
      'header.navlink': HeaderNavlink;
      'header.top-header': HeaderTopHeader;
      'home-page.contact-section': HomePageContactSection;
      'home-page.hero-banner': HomePageHeroBanner;
      'home-page.step-section': HomePageStepSection;
      'home-page.story-section': HomePageStorySection;
      'input-field.input': InputFieldInput;
      'input-field.search-box': InputFieldSearchBox;
      'meta-data.meta-data': MetaDataMetaData;
      'meta-data.meta-tag': MetaDataMetaTag;
      'support.buttn': SupportButtn;
      'support.progress-box': SupportProgressBox;
      'support.step-shoping': SupportStepShoping;
      'util.product-section': UtilProductSection;
      'util.secction': UtilSecction;
    }
  }
}
