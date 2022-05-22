import container from './template/container.mjs';
import fs from 'fs';

container()
.then(content => {
    fs.writeFileSync('./public/index.html', content);
    console.log('Finished building');
})
.catch(e => {
    console.log('Failed to build site.');
    throw e;
});
