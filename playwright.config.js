// @ts-check
import { defineConfig, devices, firefox } from '@playwright/test';
import { report } from 'node:process';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  timeout: 40*1000,
  expect:{
    timeout:40*1000,
  },
  reporter : 'html',
  use: {
   
    browserName:'firefox',
    headless : false
  },

});
module.exports = config
