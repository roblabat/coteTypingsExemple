import { Requester } from 'cote';

const requester = new Requester({ name: 'Requester' });

requester
  .send({ type: 'hello' })
  .then(res => {
    console.log('result: ', res);
  })
  .catch(err => {
    console.error('error: ', err);
  });

requester
  .send({ type: 'helloNewSignature' })
  .then(res => {
    console.log('result: ', res);
  })
  .catch(err => {
    console.error('error: ', err);
  });
