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
    "remove_shopping_cart"
  ],
  "paths": [
    {
      "d": "M0.709999953,1.82999996 C0.319999951,2.21999996 0.319999951,2.84999996 0.709999953,3.23999996 L4.38999997,6.91999998 L6.59999998,11.58 L5.24999997,14.03 C5.05999997,14.36 4.96999997,14.76 5.00999997,15.18 C5.10999997,16.24 6.06999998,17 7.12999998,17 L14.46,17 L15.84,18.38 C15.34,18.74 15.01,19.33 15.01,20 C15.01,21.1 15.9,22 17,22 C17.67,22 18.26,21.67 18.62,21.16 L20.75,23.29 C21.14,23.68 21.77,23.68 22.16,23.29 C22.55,22.9 22.55,22.27 22.16,21.88 L2.11999996,1.82999996 C1.72999996,1.43999996 1.09999995,1.43999996 0.709999953,1.82999996 Z M6.99999998,15 L8.09999998,13 L10.46,13 L12.46,15 L6.99999998,15 Z M16.05,12.94 C16.59,12.8 17.04,12.45 17.3,11.97 L20.88,5.47999997 C21.25,4.81999997 20.76,3.99999997 20,3.99999997 L7.11999998,3.99999997 L16.05,12.94 Z M6.99999998,18 C5.89999997,18 5.00999997,18.9 5.00999997,20 C5.00999997,21.1 5.89999997,22 6.99999998,22 C8.09999998,22 8.99999999,21.1 8.99999999,20 C8.99999999,18.9 8.09999998,18 6.99999998,18 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "remove_shopping_cart",
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

export const ActionsRemoveShoppingCartIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    