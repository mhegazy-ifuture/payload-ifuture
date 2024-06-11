import { CollectionConfig } from "payload/types";
import { hero } from "../../fields/hero";
import { CallToAction } from "../../blocks/CallToAction";
import { Content } from "../../blocks/Content";
import { MediaBlock } from "../../blocks/MediaBlock";
import { Archive } from "../../blocks/ArchiveBlock";
import { slugField } from "../../fields/slug";
import { anyone } from "../../access/anyone";
import { admins } from "../../access/admins";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  access: {
    read: anyone,
    update: admins,
    create: admins,
    delete: admins,
  },
  versions: {
    drafts: true,
  },
  fields: [
    { name: "title", localized: true, type: "text", required: true },
    { name: "publishedAt", type: "date", admin: { position: "sidebar" } },
    {
      name: "media",
      maxDepth: 5,
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [hero],
        },
        {
          label: "Content",
          fields: [
            {
              name: "layout",
              type: "blocks",
              required: false,
              blocks: [CallToAction, Content, MediaBlock, Archive],
            },
          ],
        },
      ],
    },
    slugField(),
  ],
};
