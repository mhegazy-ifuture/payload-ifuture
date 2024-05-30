import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import { Projects } from "./collections/Projects";
import { Pages } from "./collections/Pages";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Services } from "./collections/_Services";
import { Header } from "./globals/Header";
import { Footer } from "./globals/Footer";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  globals:[Header ,Footer] ,
  collections: [Users, Projects, Media,Pages ,Posts ,Services],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  localization: {
    locales: [
      {
        label: "English",
        code: "en",
      },
      {
        label: "Arabic",
        code: "ar",
      },
    ],
    defaultLocale:'en' ,
    fallback:true
  },

  
});
