import * as Sentry from "@sentry/node";

Sentry.init({
  dsn: "https://e9f15b4ae5311971e11823af6327e7da@o4510851610443776.ingest.us.sentry.io/4510851735093248",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});
