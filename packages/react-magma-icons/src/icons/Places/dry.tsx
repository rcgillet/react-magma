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
    "dry"
  ],
  "paths": [
    {
      "d": "M1.93999996,11.79 C1.33999996,12.36 0.999999954,13.14 0.999999954,13.97 L0.999999954,20 C0.999999954,21.66 2.33999996,23 3.99999995,23 L17.68,23 C18.33,23 18.93,22.53 19,21.88 C19.08,21.13 18.49,20.5 17.76,20.5 L12.5,20.5 C12.22,20.5 12,20.28 12,20 L12,20 C12,19.72 12.22,19.5 12.5,19.5 L19.68,19.5 C20.33,19.5 20.93,19.03 21,18.38 C21.08,17.63 20.49,17 19.76,17 L12.5,17 C12.22,17 12,16.78 12,16.5 L12,16.5 C12,16.22 12.22,16 12.5,16 L20.68,16 C21.33,16 21.93,15.53 22,14.88 C22.08,14.13 21.49,13.5 20.76,13.5 L12.5,13.5 C12.22,13.5 12,13.28 12,13 L12,13 C12,12.72 12.22,12.5 12.5,12.5 L18.68,12.5 C19.33,12.5 19.93,12.03 20,11.38 C20.08,10.63 19.49,9.99999999 18.76,9.99999999 L8.85999999,9.99999999 L10.35,7.38999998 C10.44,7.22999998 10.49,7.05999998 10.49,6.85999998 C10.49,6.59999998 10.4,6.35999998 10.23,6.15999998 L9.80999999,5.70999997 C9.42999999,5.31999997 8.79999999,5.29999997 8.39999998,5.67999997 L1.93999996,11.79 Z M16.99,8.06999998 C16.99,8.58999999 16.57,8.99999996 16.06,8.99999996 C15.54,8.99999996 15.13,8.57999999 15.13,8.06999998 L15.13,8.06999998 C15.16,7.39999998 14.91,6.73999998 14.42,6.20999998 L14.35,6.14999998 C13.45,5.25999997 12.97,4.11999997 13.01,2.92999996 L13.01,2.92999996 C13,2.41999996 13.42,1.99999996 13.93,1.99999996 C14.44,1.99999996 14.86,2.41999996 14.86,2.92999996 L14.86,2.92999996 C14.83,3.59999997 15.08,4.25999997 15.57,4.78999997 L15.64,4.85999997 C16.55,5.73999997 17.03,6.87999998 16.99,8.06999998 L16.99,8.06999998 Z M21,8.06999998 C21,8.57999999 20.58,8.99999996 20.06,8.99999996 C19.54,8.99999996 19.13,8.57999999 19.13,8.06999998 L19.13,8.06999998 C19.16,7.39999998 18.91,6.73999998 18.42,6.20999998 L18.35,6.14999998 C17.45,5.25999997 16.97,4.11999997 17.01,2.92999996 L17.01,2.92999996 C17.01,2.41999996 17.43,1.99999996 17.94,1.99999996 C18.45,1.99999996 18.87,2.41999996 18.87,2.92999996 L18.87,2.92999996 C18.84,3.59999997 19.09,4.25999997 19.58,4.78999997 L19.65,4.85999997 C20.55,5.73999997 21.03,6.87999998 21,8.06999998 L21,8.06999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "dry",
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

export const PlacesDryIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    