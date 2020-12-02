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
    "label_off"
  ],
  "paths": [
    {
      "d": "M21.59,12.58 C21.84,12.23 21.84,11.77 21.59,11.42 L17.63,5.83999997 C17.27,5.32999997 16.67,4.99999997 16,4.99999997 L8.65999999,4.99999997 L19.36,15.73 L21.59,12.58 Z M2.71999996,4.71999997 L3.58999996,5.58999997 C3.22999996,5.94999997 2.99999996,6.44999998 2.99999996,6.99999998 L2.99999996,17 C2.99999996,18.1 3.89999997,19 4.99999997,19 L17,19 L18.29,20.29 C18.68,20.68 19.31,20.68 19.7,20.29 C20.09,19.9 20.09,19.27 19.7,18.88 L4.13999997,3.30999996 C3.75999997,2.92999996 3.12999996,2.91999996 2.73999996,3.29999996 C2.32999996,3.67999997 2.32999996,4.32999997 2.71999996,4.71999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "label_off",
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

export const ActionsLabelOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    