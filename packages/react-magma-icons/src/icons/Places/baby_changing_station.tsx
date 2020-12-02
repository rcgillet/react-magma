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
    "baby_changing_station"
  ],
  "paths": [
    {
      "d": "M14,8.99999999 L14,8.99999999 C14,9.54999999 13.55,9.99999999 13,9.99999999 L11.42,9.99999999 C11.14,9.99999999 10.87,9.93999999 10.62,9.82999999 L8.31999998,8.81999999 L6.99999996,12.75 L6.99999996,21 C6.99999996,21.55 6.54999998,22 5.99999996,22 L3.99999996,22 C3.44999996,22 2.99999996,21.55 2.99999996,21 L2.99999996,12.33 C2.99999996,12.11 3.03999996,11.89 3.10999996,11.68 L4.58999997,7.35999998 C4.95999997,6.24999998 6.21999998,5.68999997 7.29999998,6.17999998 L11.45,8.00999998 L13,7.99999998 C13.55,7.99999998 14,8.44999999 14,8.99999999 Z M7.99999997,0.999999954 C6.89999998,0.999999954 5.99999997,1.89999996 5.99999997,2.99999995 C5.99999997,4.09999997 6.89999998,4.99999995 7.99999997,4.99999995 C9.09999999,4.99999995 9.99999997,4.09999997 9.99999997,2.99999995 C9.99999997,1.89999996 9.09999999,0.999999954 7.99999997,0.999999954 Z M9.99999999,19 L20,19 C20.55,19 21,18.55 21,18 L21,18 C21,17.45 20.55,17 20,17 L9.99999999,17 C9.44999999,17 8.99999999,17.45 8.99999999,18 L8.99999999,18 C8.99999999,18.55 9.44999999,19 9.99999999,19 Z M19.5,16 C20.33,16 21,15.33 21,14.5 C21,13.67 20.33,13 19.5,13 C18.67,13 18,13.67 18,14.5 C18,15.33 18.67,16 19.5,16 Z M13,12 C13,11.45 12.55,11 12,11 L9.99999999,11 C9.44999999,11 8.99999999,11.45 8.99999999,12 L8.99999999,12 C8.99999999,12.55 9.44999999,13 9.99999999,13 L11,13 L11,14 C11,15.1 11.9,16 13,16 L15,16 C16.1,16 17,15.1 17,14 L17,12 C17,11.45 16.55,11 16,11 L16,11 C15.45,11 15,11.45 15,12 L15,13 L13,13 L13,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "baby_changing_station",
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

export const PlacesBabyChangingStationIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    