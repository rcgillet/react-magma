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
    "blur_on"
  ],
  "paths": [
    {
      "d": "M5.99999997,13 C5.44999997,13 4.99999997,13.45 4.99999997,14 C4.99999997,14.55 5.44999997,15 5.99999997,15 C6.54999998,15 6.99999997,14.55 6.99999997,14 C6.99999997,13.45 6.54999998,13 5.99999997,13 Z M5.99999997,17 C5.44999997,17 4.99999997,17.45 4.99999997,18 C4.99999997,18.55 5.44999997,19 5.99999997,19 C6.54999998,19 6.99999997,18.55 6.99999997,18 C6.99999997,17.45 6.54999998,17 5.99999997,17 Z M5.99999997,8.99999999 C5.44999997,8.99999999 4.99999997,9.44999999 4.99999997,9.99999999 C4.99999997,10.55 5.44999997,11 5.99999997,11 C6.54999998,11 6.99999997,10.55 6.99999997,9.99999999 C6.99999997,9.44999999 6.54999998,8.99999999 5.99999997,8.99999999 Z M2.99999996,9.49999999 C2.71999996,9.49999999 2.49999996,9.71999999 2.49999996,9.99999999 C2.49999996,10.28 2.71999996,10.5 2.99999996,10.5 C3.27999996,10.5 3.49999996,10.28 3.49999996,9.99999999 C3.49999996,9.71999999 3.27999996,9.49999999 2.99999996,9.49999999 Z M5.99999997,4.99999997 C5.44999997,4.99999997 4.99999997,5.44999997 4.99999997,5.99999997 C4.99999997,6.54999998 5.44999997,6.99999997 5.99999997,6.99999997 C6.54999998,6.99999997 6.99999997,6.54999998 6.99999997,5.99999997 C6.99999997,5.44999997 6.54999998,4.99999997 5.99999997,4.99999997 Z M21,10.5 C21.28,10.5 21.5,10.28 21.5,9.99999999 C21.5,9.71999999 21.28,9.49999999 21,9.49999999 C20.72,9.49999999 20.5,9.71999999 20.5,9.99999999 C20.5,10.28 20.72,10.5 21,10.5 Z M14,6.99999997 C14.55,6.99999997 15,6.54999998 15,5.99999997 C15,5.44999997 14.55,4.99999997 14,4.99999997 C13.45,4.99999997 13,5.44999997 13,5.99999997 C13,6.54999998 13.45,6.99999997 14,6.99999997 Z M14,3.49999996 C14.28,3.49999996 14.5,3.27999996 14.5,2.99999996 C14.5,2.71999996 14.28,2.49999996 14,2.49999996 C13.72,2.49999996 13.5,2.71999996 13.5,2.99999996 C13.5,3.27999996 13.72,3.49999996 14,3.49999996 Z M2.99999996,13.5 C2.71999996,13.5 2.49999996,13.72 2.49999996,14 C2.49999996,14.28 2.71999996,14.5 2.99999996,14.5 C3.27999996,14.5 3.49999996,14.28 3.49999996,14 C3.49999996,13.72 3.27999996,13.5 2.99999996,13.5 Z M9.99999999,20.5 C9.71999999,20.5 9.49999999,20.72 9.49999999,21 C9.49999999,21.28 9.71999999,21.5 9.99999999,21.5 C10.28,21.5 10.5,21.28 10.5,21 C10.5,20.72 10.28,20.5 9.99999999,20.5 Z M9.99999999,3.49999996 C10.28,3.49999996 10.5,3.27999996 10.5,2.99999996 C10.5,2.71999996 10.28,2.49999996 9.99999999,2.49999996 C9.71999999,2.49999996 9.49999999,2.71999996 9.49999999,2.99999996 C9.49999999,3.27999996 9.71999999,3.49999996 9.99999999,3.49999996 Z M9.99999999,6.99999997 C10.55,6.99999997 11,6.54999998 11,5.99999997 C11,5.44999997 10.55,4.99999997 9.99999999,4.99999997 C9.44999999,4.99999997 8.99999999,5.44999997 8.99999999,5.99999997 C8.99999999,6.54999998 9.44999999,6.99999997 9.99999999,6.99999997 Z M9.99999999,12.5 C9.16999999,12.5 8.49999999,13.17 8.49999999,14 C8.49999999,14.83 9.16999999,15.5 9.99999999,15.5 C10.83,15.5 11.5,14.83 11.5,14 C11.5,13.17 10.83,12.5 9.99999999,12.5 Z M18,13 C17.45,13 17,13.45 17,14 C17,14.55 17.45,15 18,15 C18.55,15 19,14.55 19,14 C19,13.45 18.55,13 18,13 Z M18,17 C17.45,17 17,17.45 17,18 C17,18.55 17.45,19 18,19 C18.55,19 19,18.55 19,18 C19,17.45 18.55,17 18,17 Z M18,8.99999999 C17.45,8.99999999 17,9.44999999 17,9.99999999 C17,10.55 17.45,11 18,11 C18.55,11 19,10.55 19,9.99999999 C19,9.44999999 18.55,8.99999999 18,8.99999999 Z M18,4.99999997 C17.45,4.99999997 17,5.44999997 17,5.99999997 C17,6.54999998 17.45,6.99999997 18,6.99999997 C18.55,6.99999997 19,6.54999998 19,5.99999997 C19,5.44999997 18.55,4.99999997 18,4.99999997 Z M21,13.5 C20.72,13.5 20.5,13.72 20.5,14 C20.5,14.28 20.72,14.5 21,14.5 C21.28,14.5 21.5,14.28 21.5,14 C21.5,13.72 21.28,13.5 21,13.5 Z M14,17 C13.45,17 13,17.45 13,18 C13,18.55 13.45,19 14,19 C14.55,19 15,18.55 15,18 C15,17.45 14.55,17 14,17 Z M14,20.5 C13.72,20.5 13.5,20.72 13.5,21 C13.5,21.28 13.72,21.5 14,21.5 C14.28,21.5 14.5,21.28 14.5,21 C14.5,20.72 14.28,20.5 14,20.5 Z M9.99999999,8.49999999 C9.16999999,8.49999999 8.49999999,9.16999999 8.49999999,9.99999999 C8.49999999,10.83 9.16999999,11.5 9.99999999,11.5 C10.83,11.5 11.5,10.83 11.5,9.99999999 C11.5,9.16999999 10.83,8.49999999 9.99999999,8.49999999 Z M9.99999999,17 C9.44999999,17 8.99999999,17.45 8.99999999,18 C8.99999999,18.55 9.44999999,19 9.99999999,19 C10.55,19 11,18.55 11,18 C11,17.45 10.55,17 9.99999999,17 Z M14,12.5 C13.17,12.5 12.5,13.17 12.5,14 C12.5,14.83 13.17,15.5 14,15.5 C14.83,15.5 15.5,14.83 15.5,14 C15.5,13.17 14.83,12.5 14,12.5 Z M14,8.49999999 C13.17,8.49999999 12.5,9.16999999 12.5,9.99999999 C12.5,10.83 13.17,11.5 14,11.5 C14.83,11.5 15.5,10.83 15.5,9.99999999 C15.5,9.16999999 14.83,8.49999999 14,8.49999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "blur_on",
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

export const ImageBlurOnIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    