/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    projects: Project;
    media: Media;
    pages: Page;
    posts: Post;
    services: Service;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    header: Header;
    footer: Footer;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: string;
  title: string;
  publishedAt?: string | null;
  hero: {
    type: 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?:
              | ({
                  relationTo: 'pages';
                  value: string | Page;
                } | null)
              | ({
                  relationTo: 'media';
                  value: string | Media;
                } | null);
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: 'pages';
                      value: string | Page;
                    } | null)
                  | ({
                      relationTo: 'media';
                      value: string | Media;
                    } | null);
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: 'pages';
                      value: string | Page;
                    } | null)
                  | ({
                      relationTo: 'media';
                      value: string | Media;
                    } | null);
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects' | 'services') | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
              | {
                  relationTo: 'services';
                  value: string | Service;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
              | {
                  relationTo: 'services';
                  value: string | Service;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
  )[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  publishedAt?: string | null;
  hero: {
    type: 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?:
              | ({
                  relationTo: 'pages';
                  value: string | Page;
                } | null)
              | ({
                  relationTo: 'media';
                  value: string | Media;
                } | null);
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout: (
    | {
        richText: {
          [k: string]: unknown;
        }[];
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: 'pages';
                      value: string | Page;
                    } | null)
                  | ({
                      relationTo: 'media';
                      value: string | Media;
                    } | null);
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        columns?:
          | {
              size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: 'pages';
                      value: string | Page;
                    } | null)
                  | ({
                      relationTo: 'media';
                      value: string | Media;
                    } | null);
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }
    | {
        position?: ('default' | 'fullscreen') | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaBlock';
      }
    | {
        introContent: {
          [k: string]: unknown;
        }[];
        populateBy?: ('collection' | 'selection') | null;
        relationTo?: ('posts' | 'projects' | 'services') | null;
        limit?: number | null;
        selectedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
              | {
                  relationTo: 'services';
                  value: string | Service;
                }
            )[]
          | null;
        populatedDocs?:
          | (
              | {
                  relationTo: 'posts';
                  value: string | Post;
                }
              | {
                  relationTo: 'projects';
                  value: string | Project;
                }
              | {
                  relationTo: 'services';
                  value: string | Service;
                }
            )[]
          | null;
        populatedDocsTotal?: number | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'archive';
      }
    | {
        content?:
          | {
              size?: ('oneThird' | 'twoThirds' | 'full') | null;
              richText: {
                [k: string]: unknown;
              }[];
              enableLink?: boolean | null;
              link?: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?:
                  | ({
                      relationTo: 'pages';
                      value: string | Page;
                    } | null)
                  | ({
                      relationTo: 'media';
                      value: string | Media;
                    } | null);
                url?: string | null;
                label: string;
                icon?: string | Media | null;
                appearance?: ('default' | 'primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        media: string | Media;
        id?: string | null;
        blockName?: string | null;
        blockType: 'mediaContent';
      }
  )[];
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "posts".
 */
export interface Post {
  id: string;
  title: string;
  publishedAt?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  hero: {
    type: 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?:
              | ({
                  relationTo: 'pages';
                  value: string | Page;
                } | null)
              | ({
                  relationTo: 'media';
                  value: string | Media;
                } | null);
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout?:
    | (
        | {
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null)
                      | ({
                          relationTo: 'media';
                          value: string | Media;
                        } | null);
                    url?: string | null;
                    label: string;
                    icon?: string | Media | null;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null)
                      | ({
                          relationTo: 'media';
                          value: string | Media;
                        } | null);
                    url?: string | null;
                    label: string;
                    icon?: string | Media | null;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent: {
              [k: string]: unknown;
            }[];
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects' | 'services') | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: string | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: string | Project;
                    }
                  | {
                      relationTo: 'services';
                      value: string | Service;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: string | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: string | Project;
                    }
                  | {
                      relationTo: 'services';
                      value: string | Service;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  relatedPosts?: (string | Post)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: string;
  title: string;
  projects?: (string | Project)[] | null;
  publishedAt?: string | null;
  authors?: (string | User)[] | null;
  populatedAuthors?:
    | {
        id?: string | null;
        name?: string | null;
      }[]
    | null;
  hero: {
    type: 'highImpact' | 'mediumImpact' | 'lowImpact';
    richText: {
      [k: string]: unknown;
    }[];
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?:
              | ({
                  relationTo: 'pages';
                  value: string | Page;
                } | null)
              | ({
                  relationTo: 'media';
                  value: string | Media;
                } | null);
            url?: string | null;
            label: string;
            icon?: string | Media | null;
            appearance?: ('default' | 'primary' | 'secondary') | null;
          };
          id?: string | null;
        }[]
      | null;
    media?: string | Media | null;
  };
  layout?:
    | (
        | {
            richText: {
              [k: string]: unknown;
            }[];
            links?:
              | {
                  link: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null)
                      | ({
                          relationTo: 'media';
                          value: string | Media;
                        } | null);
                    url?: string | null;
                    label: string;
                    icon?: string | Media | null;
                    appearance?: ('primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cta';
          }
        | {
            columns?:
              | {
                  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
                  richText: {
                    [k: string]: unknown;
                  }[];
                  enableLink?: boolean | null;
                  link?: {
                    type?: ('reference' | 'custom') | null;
                    newTab?: boolean | null;
                    reference?:
                      | ({
                          relationTo: 'pages';
                          value: string | Page;
                        } | null)
                      | ({
                          relationTo: 'media';
                          value: string | Media;
                        } | null);
                    url?: string | null;
                    label: string;
                    icon?: string | Media | null;
                    appearance?: ('default' | 'primary' | 'secondary') | null;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            position?: ('default' | 'fullscreen') | null;
            media: string | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'mediaBlock';
          }
        | {
            introContent: {
              [k: string]: unknown;
            }[];
            populateBy?: ('collection' | 'selection') | null;
            relationTo?: ('posts' | 'projects' | 'services') | null;
            limit?: number | null;
            selectedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: string | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: string | Project;
                    }
                  | {
                      relationTo: 'services';
                      value: string | Service;
                    }
                )[]
              | null;
            populatedDocs?:
              | (
                  | {
                      relationTo: 'posts';
                      value: string | Post;
                    }
                  | {
                      relationTo: 'projects';
                      value: string | Project;
                    }
                  | {
                      relationTo: 'services';
                      value: string | Service;
                    }
                )[]
              | null;
            populatedDocsTotal?: number | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'archive';
          }
      )[]
    | null;
  relatedServices?: (string | Service)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: 'pages';
                value: string | Page;
              } | null)
            | ({
                relationTo: 'media';
                value: string | Media;
              } | null);
          url?: string | null;
          label: string;
          icon?: string | Media | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  slogan: string;
  copyright: string;
  navItems?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?:
            | ({
                relationTo: 'pages';
                value: string | Page;
              } | null)
            | ({
                relationTo: 'media';
                value: string | Media;
              } | null);
          url?: string | null;
          label: string;
          icon?: string | Media | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}