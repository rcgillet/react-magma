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
    "room_preferences"
  ],
  "paths": [
    {
      "d": "M21.75,17 C21.75,16.78 21.72,16.58 21.69,16.37 L22.53,15.64 C22.71,15.48 22.75,15.22 22.63,15.01 L22.04,13.99 C21.92,13.78 21.67,13.69 21.45,13.77 L20.39,14.13 C20.07,13.86 19.71,13.65 19.31,13.5 L19.09,12.41 C19.04,12.18 18.84,12.01 18.6,12.01 L17.42,12.01 C17.18,12.01 16.98,12.18 16.93,12.41 L16.71,13.5 C16.31,13.65 15.95,13.86 15.63,14.13 L14.57,13.77 C14.34,13.69 14.1,13.79 13.98,13.99 L13.39,15.01 C13.27,15.22 13.31,15.48 13.49,15.64 L14.33,16.37 C14.3,16.58 14.27,16.78 14.27,17 C14.27,17.22 14.3,17.42 14.33,17.63 L13.49,18.36 C13.31,18.52 13.27,18.78 13.39,18.99 L13.98,20.01 C14.1,20.22 14.35,20.31 14.57,20.23 L15.63,19.87 C15.95,20.14 16.31,20.35 16.71,20.5 L16.93,21.59 C16.98,21.82 17.18,21.99 17.42,21.99 L18.6,21.99 C18.84,21.99 19.04,21.82 19.09,21.59 L19.31,20.5 C19.71,20.35 20.07,20.14 20.39,19.87 L21.45,20.23 C21.68,20.31 21.92,20.21 22.04,20.01 L22.63,18.99 C22.75,18.78 22.71,18.52 22.53,18.36 L21.69,17.63 C21.72,17.42 21.75,17.22 21.75,17 Z M18,19 C16.9,19 16,18.1 16,17 C16,15.9 16.9,15 18,15 C19.1,15 20,15.9 20,17 C20,18.1 19.1,19 18,19 Z M14,11.26 L14,5.99999996 L17,5.99999996 L17,9.99999996 L19,9.99999996 L19,4.99999996 C19,4.44999997 18.55,3.99999996 18,3.99999996 L14,3.99999996 C14,3.44999996 13.55,2.99999996 13,2.99999996 L5.99999996,2.99999996 C5.44999997,2.99999996 4.99999996,3.44999996 4.99999996,3.99999996 L4.99999996,19 L3.99999996,19 C3.44999996,19 2.99999996,19.45 2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 L12.26,21 C11.47,19.87 11,18.49 11,17 C11,14.62 12.19,12.53 14,11.26 Z M9.99999999,12 C9.99999999,11.45 10.45,11 11,11 C11.55,11 12,11.45 12,12 C12,12.55 11.55,13 11,13 C10.45,13 9.99999999,12.55 9.99999999,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "room_preferences",
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

export const PlacesRoomPreferencesIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    