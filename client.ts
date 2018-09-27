import { Requester } from 'cote';

const requester = new Requester({ name: 'Requester' });

requester
  .send({ type: 'hello', args: 'world' })
  .then(res => {
    console.log('result: ', res);
  })
  .catch(err => {
    console.error('error: ', err);
  });
