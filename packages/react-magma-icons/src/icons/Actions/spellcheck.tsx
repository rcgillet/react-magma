import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  "width": "24px",
  "height": "24px",
  "viewBox": "0 0 24 24",
  "version": "1.1",
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "title": [
    "spellcheck"
  ],
  "paths": [
    {
      "d": "M13.12,16 C13.81,16 14.27,15.31 14.02,14.68 L9.76999999,3.86999997 C9.55999999,3.33999996 9.05999999,2.99999996 8.49999999,2.99999996 C7.93999998,2.99999996 7.43999998,3.33999996 7.22999998,3.86999997 L2.97999996,14.68 C2.72999996,15.31 3.19999996,16 3.87999997,16 C4.27999997,16 4.63999997,15.75 4.78999997,15.37 L5.66999997,13 L11.31,13 L12.21,15.38 C12.36,15.75 12.72,16 13.12,16 Z M6.42999998,11 L8.49999999,5.47999997 L10.57,11 L6.42999998,11 Z M20.89,12.29 L13.5,19.68 L10.53,16.71 C10.14,16.32 9.50999999,16.32 9.11999999,16.71 C8.72999999,17.1 8.72999999,17.73 9.11999999,18.12 L12.8,21.8 C13.19,22.19 13.82,22.19 14.21,21.8 L22.29,13.71 C22.68,13.32 22.68,12.69 22.29,12.3 C21.91,11.91 21.27,11.91 20.89,12.29 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "spellcheck",
      "stroke": "none",
      "stroke-width": "1",
      "fill": "none",
      "fill-rule": "evenodd",
      "masks": [
        {
          "id": "mask-2",
          "fill": "white",
          "uses": [
            {
              "xlink:href": "#path-1"
            }
          ]
        }
      ],
      "uses": [
        {
          "id": "Combined-Shape",
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const ActionsSpellcheckIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    