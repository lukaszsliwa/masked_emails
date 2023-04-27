![](/home/lukasz/Sources/masked_emails/image.png "Masked E-mails Chrome Extension")

# Masked Emails Offline Chrome Extension

Privacy first Masked Emails Chrome Extension that works offline. Just set-up your own domain and start generating e-mails.

More about how to set-up own masked e-mails system you can read on
https://medium.com/@lukaszsliwa/how-to-build-own-hidden-e-mails-masked-e-mails-system-in-your-own-domain-afcecf963d9a

## Set-up own masked e-mails (hidden e-mails) in Protonmail

1. Login to your Protonmail account.
2. Go to Settings and click Domain names.
3. Click Add domain button and use wizard.
4. When you correctly set-up your domain. Visit domain names again and click the menu then “Set catch-all”

Setting up own domain for masked e-mails in Protonmail has some disadvantages. You will be not able to block the specific e-mail. This problem doesn’t happen in Cloudflare and Fastmail set-up.

## Set-up own masked e-mails (hidden e-mails) in Fastmail
The Fastmail set-up is the easiest one because Fastmail has the feature built-in. Just visit Fastmail, click Settings and go to the Domains. Add or buy domain. Once you added your domain, go to Settings and click Masked Email in the sidebar. You can start using your own domain and mask e-mails.

## Set-up own masked e-mails (hidden e-mails) in Cloudflare

The Cloudflare set-up seems to be the hardest. However, Cloudflare gives you more control and features. You can block the specific e-mail or custom the rules. On Cloudflare you have a nice and clear dashboard with useful information. This is the most developer oriented solution. You can transfer your domain to Cloudflare or just update nameservers in your registrar.

1. Login to Cloudflare.
2. Buy or transfer a domain (optional).
3. Add a website and update nameservers in your registrar.
4. Select the website. Then click Email from the sidebar menu. Choose Email Routing.
5. On the Email Routing page click Routes tab.
6. Click “Add destination address” and provide your e-mail address. The e-mail will be delivered to this e-mail address.
7. Activate Catch-all address and edit the action. Select “Send to an e-mail” and select destination e-mail. Cloudflare will send you confirmation e-mail to confirm the destination e-mail address.

## Bash script

See how easy you can generate masked e-mails in bash:

```bash
#!/bin/bash

# generate.sh

DOMAIN="yourcooldomain.tld"
MAILBOX=$(cat /dev/urandom | tr -dc 'a-z0-9' | fold -w 20 | head -n 1)
echo "${MAILBOX}@$DOMAIN"
```

```shell
chmod +x generate.sh
./generate.sh
```
