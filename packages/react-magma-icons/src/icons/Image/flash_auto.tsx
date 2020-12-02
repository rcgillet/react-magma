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
    "flash_auto"
  ],
  "paths": [
    {
      "d": "M2.99999996,2.99999996 L2.99999996,13 C2.99999996,13.55 3.44999996,14 3.99999996,14 L5.99999996,14 L5.99999996,21.15 C5.99999996,21.66 6.66999998,21.84 6.92999998,21.4 L12.12,12.5 C12.51,11.83 12.03,11 11.26,11 L8.99999996,11 L12.38,3.40999996 C12.67,2.73999996 12.18,1.99999996 11.46,1.99999996 L3.99999996,1.99999996 C3.44999996,1.99999996 2.99999996,2.44999996 2.99999996,2.99999996 Z M18,1.99999996 C17.4,1.99999996 16.87,2.37999996 16.66,2.93999996 L14.22,9.79999999 C14.02,10.39 14.45,11 15.07,11 C15.45,11 15.79,10.76 15.91,10.4 L16.4,8.99999996 L19.6,8.99999996 L20.09,10.4 C20.22,10.76 20.55,11 20.93,11 C21.55,11 21.98,10.39 21.77,9.80999999 L19.33,2.94999996 C19.13,2.37999996 18.6,1.99999996 18,1.99999996 Z M16.85,7.64999998 L18,3.99999997 L19.15,7.64999998 L16.85,7.64999998 L16.85,7.64999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "flash_auto",
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

export const ImageFlashAutoIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    