import puppeteer from "puppeteer";
import { delay } from "./utils/delay";

(async () => {
  console.clear();
  console.log("🚀 Script started at:", new Date().toLocaleTimeString());

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  const page = await browser.newPage();

  console.log("Navigating to site...");
  await page.goto("https://demoqa.com/text-box", { waitUntil: "networkidle2" });

  await delay(1000);
  await page.type("#userName", "John Doe");
  await page.type("#userEmail", "john@example.com");
  await page.type("#currentAddress", "123 Street");
  await page.type("#permanentAddress", "456 City");
  await delay(1000);
  await page.click("#submit");

  console.log("✅ Form filled successfully");
  await browser.close();
})();
