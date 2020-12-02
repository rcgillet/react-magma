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
    "extension"
  ],
  "paths": [
    {
      "d": "M20.5,11 L19,11 L19,6.99999995 C19,5.89999997 18.1,4.99999995 17,4.99999995 L13,4.99999995 L13,3.49999995 C13,2.11999996 11.88,0.999999954 10.5,0.999999954 C9.11999999,0.999999954 7.99999996,2.11999996 7.99999996,3.49999995 L7.99999996,4.99999995 L3.99999996,4.99999995 C2.89999996,4.99999995 2.00999996,5.89999997 2.00999996,6.99999995 L2.00999996,10.8 L3.49999996,10.8 C4.98999997,10.8 6.19999998,12.01 6.19999998,13.5 C6.19999998,14.99 4.98999997,16.2 3.49999996,16.2 L1.99999996,16.2 L1.99999996,20 C1.99999996,21.1 2.89999996,22 3.99999996,22 L7.79999998,22 L7.79999998,20.5 C7.79999998,19.01 9.00999999,17.8 10.5,17.8 C11.99,17.8 13.2,19.01 13.2,20.5 L13.2,22 L17,22 C18.1,22 19,21.1 19,20 L19,16 L20.5,16 C21.88,16 23,14.88 23,13.5 C23,12.12 21.88,11 20.5,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "extension",
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

export const ActionsExtensionIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    