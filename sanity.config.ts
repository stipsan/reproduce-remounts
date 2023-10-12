import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  projectId,
  dataset,
  plugins: [deskTool()],
  schema,
});
