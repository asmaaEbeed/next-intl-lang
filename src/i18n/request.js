import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  console.log("requested", requested);
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const namespaces = ["common", "auth", "dialog", "roles", "table", "validationErrors"];
  const messages = await Promise.all(
    namespaces.map(async (ns) => {
      const localModule = await import(`../locales/${locale}/${ns}.json`);
      return { [ns]: localModule.default };
    })
  );
  const mergedMessages = Object.assign({}, ...messages);
  return {
    locale,
    // messages: (await import(`../locales/${locale}.json`)).default,
    messages: mergedMessages,
  };
});
