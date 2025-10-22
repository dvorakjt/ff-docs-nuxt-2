import { defineNuxtModule } from "nuxt/kit";
import fs from 'node:fs';
import path from 'node:path';

export default defineNuxtModule((options, nuxt) => {
   nuxt.hook('pages:extend', (pages) => {
       let enumDefinition = `export enum Routes {\n`;

       for(const page of pages) {
           if(!page.name) continue;

           const pathNames = kebabToPascal(page.name);
           const enumMember = ' '.repeat(2) + `${pathNames} = '${page.path}',\n`;
           enumDefinition += enumMember;
       }

       enumDefinition += '}';

       const directory = path.join(import.meta.dirname, '../app/generated');

       if(!fs.existsSync(directory)) {
           fs.mkdirSync(directory, { recursive: true });
       }

       const filepath = path.join(directory, 'routes.ts');

       fs.writeFileSync(filepath, enumDefinition, 'utf-8');
   });
});

function kebabToPascal(str: string) {
    let words = str.split('-');
    words = words.map(word => word.slice(0, 1).toUpperCase() + word.slice(1));
    return words.join('');
}
