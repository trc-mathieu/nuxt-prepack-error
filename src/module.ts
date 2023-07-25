import {
  defineNuxtModule,
  createResolver,
  addServerHandler,
  addImportsDir,
} from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {
  baseUrl?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-prepack-error",
  },
  // Default configuration options of the Nuxt module
  setup(_, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addImportsDir(resolve("./runtime/composables"));

    addServerHandler({
      middleware: false,
      handler: resolve("./runtime/server/applications-get"),
      route: "/api/applications",
      method: "get",
    });
    // console.log("transpiling ofetch");
    // nuxt.options.build.transpile.push("ofetch");
    console.log(nuxt.options.typescript.tsConfig);
    nuxt.options.typescript.tsConfig.include =
      nuxt.options.typescript.tsConfig.include || [];
    nuxt.options.typescript.tsConfig.include?.push(
      "D:/git/ofetch-repro.module/node_modules/.pnpm/registry.npmjs.org+@nuxt+telemetry@2.3.2_rollup@3.26.3/node_modules/ofetch/dist"
    );
  },
});
