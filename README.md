# Web page to PDF-تحويل صفحة ويب الى PDF

Web to PDF is a Manifest V3 browser extension that saves web pages as PDF files. This workspace contains the unpacked version 3.4.8 package in [`3.4.8_0/`](3.4.8_0/), alongside the original archive, `3.4.8_0.rar`.

## Features

- Convert the current web page to a PDF and download it.
- Choose a page format and a paginated or single-page layout.
- Preserve page styling and clickable links where supported by the page and browser.
- Includes a PDF viewer and Google Drive integration.

## Install in Chrome

1. Extract the package if you are starting from `3.4.8_0.rar`.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode**.
4. Select **Load unpacked** and choose the `3.4.8_0/` directory containing `manifest.json`.
5. Open a web page, select the Web to PDF toolbar icon, choose the conversion options, and download the PDF.

To use the extension in another Chromium-based browser, follow that browser's instructions for loading an unpacked extension; API support can vary.

## Permissions and privacy

The manifest requests access to all URLs, as well as `activeTab`, `tabs`, `scripting`, `debugger`, `storage`, and `identity` permissions. It also declares Google OAuth access to Google Drive files. Review these permissions and the extension's behavior before installing it. PDFs can be downloaded locally; Google Drive integration may require signing in and authorizing access.

## Package contents

`3.4.8_0/` is a prebuilt extension package with its manifest, page assets, scripts, locales, and PDF.js files. The workspace does not include the original application source or build configuration, so there are no source-build steps documented here.
