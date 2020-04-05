## Send email when External IP changes
This program is useful for providing information about external IP changes in dynamic IP usage.
___
**Take a look at this directive to use Gmail.**

https://nodemailer.com/usage/using-gmail/

___
**Settings are made from config.json the file.**

```javascript
{
  "host": "smtp.gmail.com",
  "port": 465,
  "ssl": true,
  "user_authentication": true,
  "user": "ipsender3311555@gmail.com",
  "pass": "********",
  "to": "aydinozturk41@gmail.com",
  "subject": "Testing!",
  "body": "IP Address of the machine is #IP#"
}
```

