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
    "visibility_off"
  ],
  "paths": [
    {
      "d": "M2.70999996,3.15999996 C3.09999996,2.76999996 3.73999997,2.76999996 4.12999997,3.15999996 L4.12999997,3.15999996 L20.44,19.49 C20.83,19.88 20.83,20.51 20.44,20.9 C20.05,21.29 19.42,21.29 19.03,20.9 L19.03,20.9 L16.31,18.18 C14.97,18.7 13.52,19 12,19 C6.99999995,19 2.72999996,15.89 0.999999954,11.5 C1.76999996,9.52999999 3.05999996,7.82999998 4.67999997,6.53999998 L4.67999997,6.53999998 L2.70999996,4.56999997 C2.31999996,4.17999997 2.31999996,3.54999996 2.70999996,3.15999996 Z M7.48999998,9.35999999 C7.17999998,9.99999999 6.99999998,10.73 6.99999998,11.5 C6.99999998,14.26 9.23999999,16.5 12,16.5 C12.77,16.5 13.49,16.32 14.14,16 L14.14,16 L12.57,14.43 C12.38,14.47 12.2,14.5 12,14.5 C10.34,14.5 8.99999998,13.16 8.99999998,11.5 C8.99999998,11.3 9.02999999,11.11 9.05999999,10.93 L9.05999999,10.93 Z M12,3.99999997 C17,3.99999997 21.27,7.10999998 23,11.49 C22.31,13.25 21.21,14.79 19.82,16.02 L19.82,16.02 L16.76,12.96 C16.9,12.5 17,12.01 17,11.5 C17,8.73999999 14.76,6.49999997 12,6.49999997 C11.49,6.49999997 11,6.59999998 10.53,6.73999998 L10.53,6.73999998 L8.35999998,4.56999997 C9.50999999,4.19999997 10.73,3.99999997 12,3.99999997 Z M12.33,8.52999999 C13.72,8.67999999 14.82,9.76999999 14.97,11.17 L14.97,11.17 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "visibility_off",
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

export const ActionsVisibilityOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    