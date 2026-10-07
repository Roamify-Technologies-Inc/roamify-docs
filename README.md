# Roamify Docs

**Roamify** is a travel eSIM for people who want mobile data abroad without swapping a physical SIM or paying carrier roaming fees.

Get connected in **150+ countries**. Buy a plan online, scan a QR code, and activate before you land. Keep your primary number for calls and texts while Roamify handles data.

**Website:** [https://www.getroamify.com/](https://www.getroamify.com/)  
**Live docs:** [https://docs.getroamify.com](https://docs.getroamify.com)  
**Partner portal:** [https://partner.getroamify.com](https://partner.getroamify.com)

> This repository is the open-source source for Roamify developer documentation (Next.js + Nextra). Use it to integrate the Roamify eSIM API into travel apps, OTAs, and partner platforms.

## Who we are

Roamify Technologies builds connectivity products for travelers and travel companies. Our consumer product is a travel eSIM at [getroamify.com](https://www.getroamify.com/). Our partner stack lets companies sell and manage eSIMs through APIs, vouchers, webhooks, and more.

We focus on:

- Instant digital delivery (QR / eSIM install flows)
- Coverage across popular travel destinations worldwide
- Clear plan options so travelers can compare data and duration
- APIs and docs so partners can embed Roamify into their own products

## Why Roamify eSIM

- **Skip roaming bills.** Use a local-style data plan instead of expensive carrier roaming.
- **No physical SIM swap.** Install digitally and keep your existing number.
- **Activate before you fly.** Set up on Wi-Fi at home or at the airport.
- **150+ countries.** One brand for multi-country trips and single-destination plans.
- **Built for partners.** REST APIs for eSIM lifecycle, orders, packages, balance, vouchers, insurance, and exchange rates.

## Product links

| Link | What it is |
| --- | --- |
| [https://www.getroamify.com/](https://www.getroamify.com/) | Buy a travel eSIM |
| [https://docs.getroamify.com](https://docs.getroamify.com) | Hosted API documentation |
| [https://partner.getroamify.com](https://partner.getroamify.com) | Partner sign-up and API keys |
| [GitHub source](https://github.com/Roamify-Technologies-Inc/roamify-docs) | Upstream docs repository |

## What this repo covers

Developer documentation for:

- Authentication and environments
- eSIM packages, orders, devices, top-ups, and vouchers
- Webhooks (usage, status, partner balance, affiliate orders)
- Travel insurance APIs
- Exchange rates and health checks
- Affiliate flows

## Features for travelers

- Travel eSIM data plans for 150+ countries
- Instant QR activation
- Keep your number while using Roamify for data
- Plans you can buy before departure
- Support oriented around real travel needs (airport, arrival, multi-stop trips)

## Features for partners and developers

- REST API for buying and managing eSIMs
- Partner portal for API keys and account access
- Webhooks for lifecycle and usage events
- Voucher and affiliate tooling
- Optional insurance and exchange-rate endpoints
- Postman and API Dog resources linked from the docs site

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Environments (API)

- Development: `https://api-dev.getroamify.com`
- Production: `https://api.getroamify.com`

Details live in the Authentication and Getting Started sections of the docs.

## Support

- Product site: [https://www.getroamify.com/](https://www.getroamify.com/)
- Partner support: [support@getroamify.com](mailto:support@getroamify.com)

## License

See [LICENSE](./LICENSE).

## Mirror note

Mirrored to Codeberg for open access alongside the GitHub original: [Roamify-Technologies-Inc/roamify-docs](https://github.com/Roamify-Technologies-Inc/roamify-docs).
