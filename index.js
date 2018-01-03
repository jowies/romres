import Puppeteer from 'puppeteer';

const username = 'xxxxxx';

const password = 'xxxxxx';

const book = async () => {
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('http://www.ntnu.no/romres');

  await page.select('select#org', 'ntnu.no'); // single selection
  await page.keyboard.type(username);

  await page.click('#submit');

  await page.waitForNavigation();

  await page.click('#username');
  await page.keyboard.type(username);
  await page.click('#password');
  await page.keyboard.type(password);
  await page.click('input.submit');
  await page.screenshot({ path: 'example.png' });

  await page.waitForNavigation();
  await page.waitForSelector('select#start');

  await page.select('select#start', '12:00');
  await page.select('select#duration', '15:00');
  await page.evaluate(() => {
    document.querySelector('#preset_date').value = '2018-01-09';
  });
  await page.select('select#area', '30000');
  await page.select('select#building', '360');
  await page.select('select#roomtype', 'GRUPPE');

  // size
  await page.click('#size');
  await page.keyboard.press('Backspace');
  await page.keyboard.type('10');

  await page.select('select#new_equipment', 'PROJEKTOR');


  await page.click('input[value="360AU2-101"]');
  // await page.click('rb-bestill"]');
  await browser.close();
  console.log('finito');
};

book();
