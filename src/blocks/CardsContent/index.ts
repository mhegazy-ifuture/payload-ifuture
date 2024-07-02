import type { Block, Field } from "payload/types";

import link from "../../fields/link";
import richText from "../../fields/richText";
import { backgroundColor } from "../../fields/BackgroundColor";

const cardFields: Field[] = [
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
    ],
  },
  {
    name: "media",
    type: "upload",
    relationTo: "media",
    required: true,
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
  {
    name: "populateBy",
    type: "select",
    defaultValue: "selection",
    options: [
      {
        label: "Individual Selection",
        value: "selection",
      },
    ],
  },
  {
    type: "relationship",
    name: "selectedDocs",
    label: "Selection",
    relationTo: ["posts", "projects", "services"],
    hasMany: true,
    admin: {
      condition: (_, siblingData) => siblingData.populateBy === "selection",
    },
  },
  
];

export const cardsContent: Block = {
  slug: "cardsContent",
  fields: [backgroundColor,
    {
      name: "columns",
      type: "array",
      fields: cardFields,
    },
  ],
};
