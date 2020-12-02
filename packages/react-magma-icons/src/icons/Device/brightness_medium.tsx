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
    "brightness_medium"
  ],
  "paths": [
    {
      "d": "M20,15.31 L21.9,13.41 C22.68,12.63 22.68,11.36 21.9,10.58 L20,8.68999999 L20,5.99999997 C20,4.89999997 19.1,3.99999997 18,3.99999997 L15.31,3.99999997 L13.41,2.09999996 C12.63,1.31999996 11.36,1.31999996 10.58,2.09999996 L8.68999999,3.99999997 L5.99999998,3.99999997 C4.89999997,3.99999997 3.99999997,4.89999997 3.99999997,5.99999997 L3.99999997,8.68999999 L2.09999996,10.59 C1.31999996,11.37 1.31999996,12.64 2.09999996,13.42 L3.99999997,15.32 L3.99999997,18 C3.99999997,19.1 4.89999997,20 5.99999998,20 L8.68999999,20 L10.59,21.9 C11.37,22.68 12.64,22.68 13.42,21.9 L15.32,20 L18,20 C19.1,20 20,19.1 20,18 L20,15.31 Z M12,16.9 L12,7.09999998 C12,6.48999998 12.55,5.98999997 13.15,6.10999998 C15.91,6.64999998 18,9.07999999 18,12 C18,14.92 15.91,17.35 13.15,17.89 C12.55,18.01 12,17.51 12,16.9 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "brightness_medium",
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

export const DeviceBrightnessMediumIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    