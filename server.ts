import { Responder } from 'cote';

const responder = new Responder({
  name: 'responder'
});

responder.on('hello', (event, done) => {
  done('hello');
});

responder.on('helloNewSignature', (event, done: any) => {
  done(null, 'helloNewSignature');
});
