
# websocket

thin layer on top of websockets

## Example

```js
var websocket = require('websocket');

var ws = websocket();

ws.on('message', function(msg){
  console.log(msg.data);
});

ws.on('open', function(){
  ws.send('hello there');
});
```

## License

MIT
