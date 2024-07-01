import type { CollectionConfig } from "payload/types";
import { Archive } from "../../blocks/ArchiveBlock";
import { CallToAction } from "../../blocks/CallToAction";
import { Content } from "../../blocks/Content";
import { MediaBlock } from "../../blocks/MediaBlock";
import { hero } from "../../fields/hero";
import { slugField } from "../../fields/slug";
import { admins } from "../../access/admins";
import { anyone } from "../../access/anyone";
import { cardsContent } from "../../blocks/CardsContent";
import { FormBlock } from "../../blocks/Form";
import { MediaContent } from "../../blocks/MediaContent";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  // endpoints:[{
  //   path:'/posts',method:'get',handler : async(req,res,next)=>{
  //     const allPosts = await payload.find({'collection':'posts' ,locale:'ar'})
  //     return res.json({allPosts})
  //   }
  // }],
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
    {
      name: "title",
      localized: true,
      type: "text",
      required: true,
    },
    {
      name: "media",
      maxDepth: 5,
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: {
          pickerAppearance: "dayAndTime",
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === "published" && !value) {
              return new Date();
            }
            return value;
          },
        ],
      },
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: "populatedAuthors",
      type: "array",
      admin: {
        readOnly: true,
        disabled: true,
      },
      access: {
        update: () => false,
      },
      fields: [
        {
          name: "id",
          type: "text",
        },
        {
          name: "name",
          type: "text",
        },
      ],
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
              blocks: [
                cardsContent,
                FormBlock,
                Content,
                MediaBlock,
                Archive,
                CallToAction,
                MediaContent,
              ],
            },
          ],
        },
      ],
    },
    {
      name: "relatedPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      filterOptions: ({ id }) => {
        return {
          id: {
            not_in: [id],
          },
        };
      },
    },
    slugField(),
  ],
};
