import { Field } from "payload/types";
import richText from "./richText";
import label from "./richText/label";
import largeBody from "./richText/largeBody";
import linkGroup from "./linkGroup";
export const hero: Field = {
  name: "hero",
  type: "group",

  label: false,
  fields: [
    {
      type: "select",
      name: "type",
      label: "Type",
      required: true,
      defaultValue: "lowImpact",
      options: [
        {
          label: "High Impact",
          value: "highImpact",
        },
        {
          label: "Medium Impact",
          value: "mediumImpact",
        },
        {
          label: "Low Impact",
          value: "lowImpact",
        },
      ],
    },
    richText({
      localized: true,
      admin: {
        elements: ["h1", largeBody, label, "link"],
        leaves: [],
      },
    }),

    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      maxDepth: 10,
      name: "media",
      type: "upload",
      relationTo: "media",
      required: false,
      admin: {
        // here to add heros with media field
        condition: (_, { type } = {}) =>
          ["highImpact", "mediumImpact"].includes(type),
      },
    },
  ],
};
