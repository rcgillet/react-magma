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
    "verified"
  ],
  "paths": [
    {
      "d": "M23,12 L20.56,9.20999999 L20.9,5.51999997 L17.29,4.69999997 L15.4,1.49999996 L12,2.95999996 L8.59999999,1.49999996 L6.70999998,4.68999997 L3.09999996,5.49999996 L3.43999996,9.19999999 L0.999999954,12 L3.43999996,14.79 L3.09999996,18.49 L6.70999998,19.31 L8.59999999,22.5 L12,21.03 L15.4,22.49 L17.29,19.3 L20.9,18.48 L20.56,14.79 L23,12 Z M9.37999999,16.01 L6.99999998,13.61 C6.60999998,13.22 6.60999998,12.59 6.99999998,12.2 L7.06999998,12.13 C7.45999998,11.74 8.09999998,11.74 8.48999999,12.13 L10.1,13.75 L15.25,8.58999999 C15.64,8.19999998 16.28,8.19999998 16.67,8.58999999 L16.74,8.65999999 C17.13,9.04999999 17.13,9.67999999 16.74,10.07 L10.82,16.01 C10.41,16.4 9.77999999,16.4 9.37999999,16.01 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "verified",
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

export const ActionsVerifiedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    