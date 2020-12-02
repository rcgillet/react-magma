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
    "escalator"
  ],
  "paths": [
    {
      "d": "M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M17,8.99999998 L15.3,8.99999998 L10.59,17.49 C10.41,17.8 10.07,18 9.70999999,18 L6.99999997,18 C6.16999998,18 5.49999997,17.33 5.49999997,16.5 C5.49999997,15.67 6.16999998,15 6.99999997,15 L8.69999999,15 L13.41,6.50999998 C13.59,6.19999998 13.93,5.99999998 14.29,5.99999998 L17,5.99999998 C17.83,5.99999998 18.5,6.66999998 18.5,7.49999998 C18.5,8.32999998 17.83,8.99999998 17,8.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "escalator",
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

export const PlacesEscalatorIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    