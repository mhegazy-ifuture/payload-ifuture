import { backgroundColor } from './../../fields/BackgroundColor/index';
import { Block, Field } from "payload/types";
import richText from "../../fields/richText";
import link from "../../fields/link";

const contentFields: Field[] = [
  {
    name: "size",
    type: "select",
    defaultValue: "oneThird",
    options: [
      {
        value: "oneThird",
        label: "One Third",
      },

      {
        value: "twoThirds",
        label: "Two Thirds",
      },
      {
        value: "full",
        label: "Full",
      },
    ],
  },
  richText(),
  {
    name: "enableLink",
    type: "checkbox",
  },
  link({
    overrides: {
      admin: {
        condition: (_, { enableLink }) => Boolean(enableLink),
      },
    },
  }),
];

export const MediaContent: Block = {
  slug: "mediaContent",
  fields: [
    backgroundColor, {
      name: "apperance",
      type: "radio",
      defaultValue:'vertical',
      options: [
        {
          label: "Horizontal",
          value: "horizontal",
        },
        {
          label: "Vertical",
          value: "vertical",
        },
      ],
    },

    {
      name: "content",
      type: "array",
      fields: contentFields,
    },
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};
