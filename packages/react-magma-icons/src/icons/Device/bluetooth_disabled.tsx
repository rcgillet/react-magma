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
    "bluetooth_disabled"
  ],
  "paths": [
    {
      "d": "M19.29,17.89 L6.10999998,4.69999997 C5.71999997,4.30999997 5.08999997,4.30999997 4.69999997,4.69999997 C4.30999997,5.08999997 4.30999997,5.71999997 4.69999997,6.10999998 L10.59,12 L5.69999997,16.89 C5.30999997,17.28 5.30999997,17.91 5.69999997,18.3 C6.08999998,18.69 6.71999998,18.69 7.10999998,18.3 L11,14.41 L11,20.59 C11,21.48 12.08,21.93 12.71,21.3 L16.3,17.71 L17.89,19.3 C18.28,19.69 18.91,19.69 19.3,19.3 C19.68,18.91 19.68,18.27 19.29,17.89 Z M13,18.17 L13,14.41 L14.88,16.29 L13,18.17 Z M13,5.82999997 L14.88,7.70999998 L13.41,9.17999999 L14.82,10.59 L17,8.41999999 C17.39,8.02999998 17.39,7.39999998 17,6.99999998 L12.71,2.70999996 C12.08,2.07999996 11,2.51999996 11,3.40999996 L11,6.76999998 L13,8.76999999 L13,5.82999997 L13,5.82999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "bluetooth_disabled",
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

export const DeviceBluetoothDisabledIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    