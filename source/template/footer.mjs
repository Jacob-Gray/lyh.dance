import https from 'https';

export default () => {
    return new Promise(resolve => https.get(
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
                        <div class="pageWidth">
                            <p>Info incorrect? Want your group listed here? <a
                                    href="https://github.com/Jacob-Gray/lyh.dance/issues">Submit an issue!</a></p>
                        
                            <p class="updateWrapper"><a class="update" href="https://github.com/Jacob-Gray/lyh.dance/commits">Last updated on ${timestamp}</a> 💖</p>
                        </div>
                    </footer>
                    `);
            });
        })
    )

};