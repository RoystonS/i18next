import i18next from "i18next";
import { setupI18N } from "./setup-i18n.ts";

await setupI18N();

const { t } = i18next;

await run("en-GB");
await run("en-US");
await run("fr");
await run("fr-CA");
await run("de-DE");
await run("pl");

async function run(language: string) {
  await i18next.changeLanguage(language);
  const { t } = i18next;

  const languageChain = i18next.languages.join(">");
  const actualLanguage = t("main:lang");

  console.log(
    `Using language: ${language}, checking ${languageChain}, satisfied by ${actualLanguage}`
  );

  console.log(` ${t("main:selectColor")}`);

  console.log(' ' + t('main:file', { count: 0 }));
  console.log(' ' + t('main:file', { count: 1 }));
  console.log(' ' + t('main:file', { count: 3 }));
  console.log(' ' + t('main:file', { count: 5 }));
  console.log(' ' + t('main:file', { count: 42 }));
}
