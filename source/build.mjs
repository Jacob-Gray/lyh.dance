import groups from './data/groups.mjs';
import container from './template/container.mjs';
import fs from 'fs';

fs.writeFileSync('./public/index.html', container(groups, 'NOW'));