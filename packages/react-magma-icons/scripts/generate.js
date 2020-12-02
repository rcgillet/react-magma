const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const tsxTemplate = ({svg, icon}) => {
    const iconType = {
      ...svg['$'],
      title: svg.title,
      paths: svg.defs
        .reduce((acc, def) => [...acc, def.path && def.path[0]['$']], [])
        .filter(a => a)
        .flat(),
      polygons: svg.defs
        .reduce((acc, def) => [...acc, def.polygon && def.polygon[0]['$']], [])
        .filter(a => a)
        .flat(),
      groups: svg.g.reduce(
        (acc, { mask, use, ...props }) => [
          ...acc,
          {
            ...props['$'],
            masks: mask.reduce(
              (acc, mask) => [
                ...acc,
                {
                  ...mask['$'],
                  uses: mask.use.reduce(
                    (acc, use) => [
                      ...acc,
                      {
                        ...use['$'],
                      },
                    ],
                    []
                  ),
                },
              ],
              []
            ),
            uses: use.reduce(
              (acc, use) => [
                ...acc,
                {
                  ...use['$'],
                },
              ],
              []
            ),
          },
        ],
        []
      ),
    };

  return `import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = ${JSON.stringify(iconType, null, 2)};

export const ${icon.name}: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    `;
};

const camelize = str => {
  return str
    .replace(/(?:^\w|[A-Z]|[\b_-]\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[\s_-]+/g, '');
};

const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const buildName = (category, icon) => {
  return `${capitalize(camelize(category))}${capitalize(camelize(icon))}Icon`;
};

const parseSvg = icon => {
  const xml = fs.readFileSync(icon.path);
//   xml2js.parseString(xml, { mergeAttrs: true }, (err, props) => {
  xml2js.parseString(xml, { mergeAttrs: false }, (err, props) => {
    //   console.log(JSON.stringify(props, null, 2));
    writeTsx({tsx:tsxTemplate({ ...props, icon }), icon});
  });
};

const writeTsx = ({tsx, icon}) => {
    // "path": "./src/svgs/Actions/remove_shopping_cart.svg",
    // "category": "Actions",
    // "name": "ActionsRemoveShoppingCartIcon"
    // console.log(JSON.stringify(icon, null, 2));
    fs.writeFileSync(`./src/icons/${icon.category}/${path.basename(icon.path, '.svg')}.tsx`, tsx)
}

fs.readdir('./src/svgs', (err, categories) => {
  let obj = [];
  if (err) {
    console.error('Could not list the categories.', err);
    process.exit(1);
  }

  categories = categories.map(name => {
    return { name, path: `./src/svgs/${name}` };
  });
  categories.forEach(category => {
    mkdirp.sync(`./src/icons/${category.name}`)
    fs.readdir(category.path, (err, icons) => {
      if (err) {
        console.error(`Could not list the icons in ${category}.`, err);
        process.exit(1);
      }
      icons = icons.map(name => {
        return {
          path: `${category.path}/${name}`,
          category: category.name,
          name: `${buildName(category.name, path.basename(name, '.svg'))}`,
        };
      });
      icons.forEach(icon => {
        console.log(
          `export { ${icon.name} } from '${`./src/icons/${
            icon.category
          }/${path.basename(icon.path, '.svg')}`}';`
        );
        parseSvg(icon);
      });
    });
  });
});
