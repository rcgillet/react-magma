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
    "settings_ethernet"
  ],
  "paths": [
    {
      "d": "M6.99999998,6.11999998 C6.56999998,5.76999997 5.93999997,5.81999997 5.58999997,6.24999998 L1.34999996,11.36 C1.03999995,11.73 1.03999995,12.27 1.34999996,12.64 L5.58999997,17.75 C5.93999997,18.18 6.56999998,18.23 6.99999998,17.88 C7.42999998,17.53 7.47999998,16.9 7.12999998,16.47 L3.41999996,12 L7.12999998,7.52999998 C7.47999998,7.09999998 7.42999998,6.46999998 6.99999998,6.11999998 Z M6.99999998,13 L8.99999998,13 L8.99999998,11 L6.99999998,11 L6.99999998,13 Z M17,11 L15,11 L15,13 L17,13 L17,11 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M17,6.11999998 C16.57,6.46999998 16.52,7.09999998 16.87,7.52999998 L20.58,12 L16.87,16.47 C16.52,16.9 16.58,17.53 17,17.88 C17.43,18.23 18.06,18.18 18.41,17.75 L22.65,12.64 C22.96,12.27 22.96,11.73 22.65,11.36 L18.41,6.24999998 C18.06,5.82999997 17.42,5.76999997 17,6.11999998 L17,6.11999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "settings_ethernet",
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

export const ActionsSettingsEthernetIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    