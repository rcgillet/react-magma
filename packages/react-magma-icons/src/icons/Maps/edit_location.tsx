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
    "edit_location"
  ],
  "paths": [
    {
      "d": "M18.11,1.76999996 L19.07,0.809999953 C19.2568446,0.622771864 19.5104906,0.51755592 19.775,0.51755592 C20.0395095,0.51755592 20.2931554,0.622771864 20.48,0.809999953 L21.19,1.51999996 C21.58,1.90999996 21.58,2.53999996 21.19,2.92999996 L20.23,3.88999997 L18.11,1.76999996 Z M17.11,2.76999996 L19.23,4.88999997 L13.26,10.86 C13.1670751,10.9533125 13.0416573,11.007063 12.91,11.01 L11.5,11.01 C11.22,11.01 11,10.79 11,10.51 L11,9.09999999 C11,8.96999999 11.05,8.83999999 11.15,8.74999999 L17.11,2.76999996 Z M15.13,2.63999996 L9.78999999,7.97999998 C9.60999999,8.16999998 9.49999997,8.41999999 9.49999997,8.68999999 L9.49999997,11.52 C9.49999997,12.07 9.94999999,12.52 10.5,12.52 L13.33,12.52 C13.6,12.52 13.85,12.41 14.04,12.23 L19.37,6.89999998 C19.77,7.87999998 20,8.98999999 20,10.21 C20,13.39 17.55,17.13 12.66,21.44 C12.28,21.77 11.71,21.77 11.33,21.44 C6.44999998,17.13 3.99999997,13.39 3.99999997,10.21 C3.99999997,5.22999997 7.79999998,2.00999996 12,2.00999996 C13.09,2.00999996 14.16,2.22999996 15.13,2.63999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "edit_location",
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

export const MapsEditLocationIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    