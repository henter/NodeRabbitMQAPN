#node-rabbitmq-apn

Apple Push Notification service with Node.js and RabbitMQ.

仅仅是一个demo，还有很多需要完善的部分，如：
rabbitmq的ack机制
    现在仅仅是拿到消息调用推送函数后就返回ack了，实际上此时并不确定是否推送成功了（因为是异步）
    所以应该是在`transmitted`事件触发后再返回ack


## Run

准备工作：

    安装rabbitmq
    拿到推送证书 cert.pem和key.pem
    修改receive.js中的队列名称

运行：

    npm install
    node receive.js

## Resources

* [node-apn][nodeapn]
* [node-amqp][nodeamqp]

## Credits

Written and maintained by [Henter][henter].


## License

Released under the MIT License

Copyright (c) 2013 Henter <henter@henter.me>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[nodeapn]:https://github.com/argon/node-apn
[nodeamqp]:https://github.com/postwait/node-amqp
[henter]: http://henter.me
