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
    "charging_station"
  ],
  "paths": [
    {
      "d": "M17,0.999999954 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,21 C4.99999997,22.1 5.89999997,23 6.99999997,23 L17,23 C18.1,23 19,22.1 19,21 L19,2.99999995 C19,1.89999996 18.1,0.999999954 17,0.999999954 Z M17,18 L6.99999998,18 L6.99999998,5.99999998 L17,5.99999998 L17,18 Z M12.5,11 L12.5,9.11999999 C12.5,8.58999999 11.79,8.41999999 11.55,8.89999999 L9.85999999,12.28 C9.69999999,12.61 9.93999999,13 10.31,13 L11.5,13 L11.5,14.88 C11.5,15.41 12.21,15.58 12.45,15.1 L14.14,11.72 C14.3,11.39 14.06,11 13.69,11 L12.5,11 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "charging_station",
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

export const PlacesChargingStationIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    