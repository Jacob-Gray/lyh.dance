import https from 'https';

export default () => new Promise(resolve => https.get(
    {
        hostname: 'api.github.com',
        path: '/repos/Jacob-Gray/lyh.dance/commits',
        headers: {
            'User-Agent': 'Jacob-Gray'
        }
    },
    res => {
        let output = '';

        res.on('data', data => {
            output += data;
        });

        res.on('end', () => {
            const updateDate = new Date(
                JSON.parse(output)[0].commit.author.date
            );
            const timestamp = updateDate.toLocaleDateString('en-US', { timeZone: 'America/New_York' });

            resolve(/* html */ `
                    <footer>
                        <div class="pageWidth block">
                            <a class="button" href="https://github.com/Jacob-Gray/lyh.dance/issues/new"><svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path fill="currentColor" d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg> Request a change</a>
                        
                            <p class="updateWrapper"><a class="update" href="https://github.com/Jacob-Gray/lyh.dance/commits">Last updated on ${timestamp}</a> 💖</p>
                        </div>
                    </footer>
                    `);
        });
    })
);