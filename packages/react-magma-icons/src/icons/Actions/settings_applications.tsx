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
    "settings_applications"
  ],
  "paths": [
    {
      "d": "M12,9.99999999 C10.9,9.99999999 9.99999999,10.9 9.99999999,12 C9.99999999,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,9.99999999 12,9.99999999 Z M19,2.99999996 L4.99999996,2.99999996 C3.88999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.88999997,21 4.99999996,21 L19,21 C20.11,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.11,2.99999996 19,2.99999996 Z M17.25,12 C17.25,12.23 17.23,12.46 17.2,12.68 L18.68,13.84 C18.81,13.95 18.85,14.14 18.76,14.29 L17.36,16.71 C17.27,16.86 17.09,16.92 16.93,16.86 L15.19,16.16 C14.83,16.44 14.43,16.67 14.01,16.85 L13.75,18.7 C13.72,18.87 13.57,19 13.4,19 L10.6,19 C10.43,19 10.28,18.87 10.25,18.71 L9.98999999,16.86 C9.55999999,16.68 9.16999999,16.45 8.80999999,16.17 L7.06999998,16.87 C6.90999998,16.93 6.72999998,16.87 6.63999998,16.72 L5.23999997,14.3 C5.14999997,14.15 5.18999997,13.96 5.31999997,13.85 L6.79999998,12.69 C6.76999998,12.46 6.74999998,12.23 6.74999998,12 C6.74999998,11.77 6.76999998,11.54 6.79999998,11.32 L5.31999997,10.16 C5.18999997,10.05 5.14999997,9.85999999 5.23999997,9.70999999 L6.63999998,7.28999998 C6.72999998,7.13999998 6.90999998,7.07999998 7.06999998,7.13999998 L8.80999999,7.83999998 C9.16999999,7.55999998 9.56999999,7.32999998 9.98999999,7.14999998 L10.25,5.29999997 C10.28,5.12999997 10.43,4.99999997 10.6,4.99999997 L13.4,4.99999997 C13.57,4.99999997 13.72,5.12999997 13.75,5.28999997 L14.01,7.13999998 C14.44,7.31999998 14.83,7.54999998 15.19,7.82999998 L16.93,7.12999998 C17.09,7.06999998 17.27,7.12999998 17.36,7.27999998 L18.76,9.69999999 C18.85,9.84999999 18.81,10.04 18.68,10.15 L17.2,11.31 C17.23,11.54 17.25,11.77 17.25,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "settings_applications",
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

export const ActionsSettingsApplicationsIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    