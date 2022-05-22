import groups from './data/groups.mjs';
import container from './template/container.mjs';
import fs from 'fs';
import https from 'https';

https.get({
    hostname: 'api.github.com',
    path: '/repos/Jacob-Gray/lyh.dance/commits',
    headers: {
        'User-Agent': 'Jacob-Gray'
    }
}
    , res => {
        let output = '';

        res.on('data', data => {
            output += data;
        });

        res.on('end', () => {
            output = JSON.parse(output);

            const mostRecent = output[0];
            const updateDate = new Date(
                mostRecent.commit.author.date
            );

            fs.writeFileSync('./public/index.html', container(
                groups,
                updateDate.toLocaleDateString('en-US', { timeZone: 'America/New_York' })
            ));
        });
    });
