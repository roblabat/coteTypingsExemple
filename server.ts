import { Responder } from 'cote';

const responder = new Responder({
  name: 'responder'
});

responder.on('hello', (event, done: any) => {
  done(null, event.args); // here args is not a property of Event type but is passed by the package and here hold the string 'world' (try casting event as any to make it work)
});
