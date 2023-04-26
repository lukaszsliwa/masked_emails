## Masked E-mails Offline Chrome Extension

This Chrome Extension works offline. Just set-up your own domain and start generating e-mails.

More about how to set-up own masked e-mails system you can read on
https://medium.com/@lukaszsliwa/how-to-build-own-hidden-e-mails-masked-e-mails-system-in-your-own-domain-afcecf963d9a

### Bash script

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
