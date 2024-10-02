import { Telegraf, Markup, Composer } from "telegraf";
import { message } from "telegraf/filters";
import { BOT_TOKEN } from "./env";

export const bot = new Telegraf(BOT_TOKEN);

bot.use(Composer.drop((context) => context.chat?.type !== "private"));

bot.start(async (context) => {
  await context.reply("Hi there. Please send me a link to proxy 🔒🔑");
});

bot.on(message("text"), async (context) => {
  // await context.sendChatAction("typing");

  const link = context.message.text;
  const encodedLink = encodeURIComponent(link);
  const proxyLink = `https://ewp.deno.dev/${link}`;
  const googleWebCacheLink = `https://webcache.googleusercontent.com/search?q=cache:${link}`;
  const archiveOrgLink = `https://web.archive.org/web/*/${link}`;
  const archiveIsLink = `https://archive.is/submit/?url=${encodedLink}`;

  await context.reply(
    `This is your web proxy link:\n${proxyLink}\n\nYou can also try opening link using archive proxies:`,
    {
      ...Markup.inlineKeyboard([
        [Markup.button.url("Archive.is", archiveIsLink)],
        [Markup.button.url("Archive.org", archiveOrgLink)],
        [Markup.button.url("Google Web Cache", googleWebCacheLink)],
      ]),
      disable_notification: true,
    }
  );
});

bot.use(async (context) => {
  await context.reply("Hi there. Please send me a link to proxy 🔒🔑", {
    disable_notification: true,
  });
});
