import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { BOT_TOKEN } from "./constants";

export const bot = new Telegraf(BOT_TOKEN);

bot.start(async (context) => {
  await context.reply("Hi there. Please send me a link to proxy 🔒🔑");
});

bot.on(message("text"), async (context) => {
  await context.sendChatAction("typing");

  const link = context.message.text;
  const encodedLink = encodeURIComponent(link);
  const proxyLink = `https://web-proxy-redirect.vercel.app/?country=pl&url=${encodedLink}`;
  await context.reply(proxyLink);
});
