import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactLink extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_links';
  info: {
    displayName: 'contactLink';
  };
  attributes: {
    icon: Schema.Attribute.String;
    ref: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
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
    displayName: 'navlink';
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
    displayName: 'topHeader';
  };
  attributes: {
    contact: Schema.Attribute.Component<'contact.contact-link', true>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface InputFieldSearchBox extends Struct.ComponentSchema {
  collectionName: 'components_input_field_search_boxes';
  info: {
    displayName: 'search-box';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-link': ContactContactLink;
      'header.header': HeaderHeader;
      'header.navlink': HeaderNavlink;
      'header.top-header': HeaderTopHeader;
      'input-field.search-box': InputFieldSearchBox;
    }
  }
}
