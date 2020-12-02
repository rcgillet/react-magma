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
    "brightness_3"
  ],
  "paths": [
    {
      "d": "M18.87,10.37 C18.12,5.60999997 13.87,2.01999996 9.04999999,1.99999996 C8.55999999,1.99999996 8.07999998,2.02999996 7.60999998,2.09999996 C7.10999998,2.16999996 7.00999998,2.82999996 7.46999998,3.05999996 C10.75,4.68999997 13,8.07999998 13,12 C13,15.92 10.75,19.31 7.46999998,20.95 C7.01999998,21.18 7.10999998,21.84 7.60999998,21.91 C8.07999998,21.97 8.55999999,22 9.04999999,22 C13.87,21.98 18.12,18.39 18.87,13.63 C18.96,13.08 18.98,12.54 18.98,12 C18.98,11.46 18.96,10.92 18.87,10.37 L18.87,10.37 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "brightness_3",
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

export const ImageBrightness3Icon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    