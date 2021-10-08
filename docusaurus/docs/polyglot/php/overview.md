---
slug: /polyglot/php/
title: 'PHP Wechaty'
sidebar_label: PHP
---

[![PHP Wechaty](https://img.shields.io/badge/Wechaty-PHP-7de)](https://github.com/wechaty/php-wechaty)

PHP-Wechaty is a PHP programming client derived from the Wechaty ecosystem.PHP is a server scripting language and a powerful tool for making dynamic and interactive Web pages. You can find more information on PHP-Wechaty [here](https://github.com/wechaty/php-wechaty). The [General Architecture Diagram](https://wechaty.js.org/docs/polyglot/diy/) illustrates how the PHP-Wechaty can be implemented on the already existing TypeScript Wechaty ecosystem.
The World's shortest PHP chatbot is PHP-Wechaty, which can be very easily implemented and used as shown below:

```php
$wechaty = \IO\Github\Wechaty\Wechaty::getInstance($token, $endPoint);
$wechaty->onScan(function($qrcode, $status, $data) {
    $qr = \IO\Github\Wechaty\Util\QrcodeUtils::getQr($qrcode);
    echo "$qr\n\nOnline Image: https://wechaty.github.io/qrcode/$qrcode\n";
})->onLogin(function(\IO\Github\Wechaty\User\ContactSelf $user) {
})->onMessage(function(\IO\Github\Wechaty\User\Message $message) {
    $message->say("hello from PHP7.4");
})->start();
```

## Getting Started

Run the below commands for starting the PHP-Wechaty bot. For further information, also you can visit [Template repo](https://github.com/wechaty/php-wechaty-getting-started).

```sh
# Install php 7.4+
sudo yum install php-pecl-grpc
sudo yum install php-pecl-protobuf
sudo yum install php-xml
# curl -sS https://getcomposer.org/installer | php
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"
mv composer.phar /usr/local/bin/composer
make install
export WECHATY_PUPPET_HOSTIE_TOKEN=your_token_at_here
make bot # to run the bot
```

## Maintainers

* [@zhangchunsheng](https://github.com/zhangchunsheng)
