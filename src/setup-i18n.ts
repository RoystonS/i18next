import i18next from "i18next";
import ICU from "i18next-icu";

import mainEn from "./nls/en/main.json" with { type: "json" };
import mainFr from "./nls/fr/main.json" with { type: "json" };
import mainEnGb from "./nls/en-GB/main.json" with { type: "json" };
import mainEnUs from "./nls/en-US/main.json" with { type: "json" };
import mainPl from './nls/pl/main.json' with { type: "json" };

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "main";
    compatibilityJSON: "v4";
    resources: {
      main: typeof mainEn;
    };
  }
}

export async function setupI18N() {
  const promise = i18next.use(ICU).init({
    debug: true,
    fallbackLng: "en",
    i18nFormat: {
      parseLngForICU(_language: string) {
        return i18next.language;
      },
    },
  });

  i18next.addResourceBundle("en", "main", mainEn);
  i18next.addResourceBundle("en-GB", "main", mainEnGb);
  i18next.addResourceBundle("en-US", "main", mainEnUs);
  i18next.addResourceBundle("fr", "main", mainFr);
  i18next.addResourceBundle("pl", "main", mainPl);

  await promise;
}
