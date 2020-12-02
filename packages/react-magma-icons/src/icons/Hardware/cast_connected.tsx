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
    "cast_connected"
  ],
  "paths": [
    {
      "d": "M19,16 L19,7.99999998 C19,7.44999998 18.55,6.99999998 18,6.99999998 L5.99999997,6.99999998 C5.44999997,6.99999998 4.99999997,7.44999998 4.99999997,7.99999998 L4.99999997,8.62999999 C8.95999999,9.90999999 12.09,13.04 13.37,17 L18,17 C18.55,17 19,16.55 19,16 Z M21,2.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 L0.999999954,6.99999996 C0.999999954,7.54999998 1.44999996,7.99999996 1.99999995,7.99999996 C2.54999996,7.99999996 2.99999995,7.54999998 2.99999995,6.99999996 L2.99999995,5.99999996 C2.99999995,5.44999997 3.44999996,4.99999996 3.99999995,4.99999996 L20,4.99999996 C20.55,4.99999996 21,5.44999997 21,5.99999996 L21,18 C21,18.55 20.55,19 20,19 L15,19 C14.45,19 14,19.45 14,20 C14,20.55 14.45,21 15,21 L21,21 C22.1,21 23,20.1 23,19 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M0.999999954,18 L0.999999954,21 L3.99999995,21 C3.99999995,20.38 3.80999997,19.8 3.48999996,19.32 C2.94999996,18.52 2.03999996,18 0.999999954,18 Z M2.13999996,14.09 C1.53999996,13.99 0.999999954,14.48 0.999999954,15.09 C0.999999954,15.58 1.35999996,15.99 1.84999996,16.07 C3.92999997,16.43 5.56999997,18.07 5.92999997,20.15 C6.00999998,20.64 6.41999998,21 6.90999998,21 C7.51999998,21 7.99999995,20.46 7.90999998,19.86 C7.42999998,16.9 5.08999997,14.57 2.13999996,14.09 Z M2.09999996,10.05 C1.50999996,9.99999999 0.999999954,10.46 0.999999954,11.05 C0.999999954,11.56 1.37999996,11.99 1.87999996,12.04 C6.14999998,12.45 9.54999999,15.85 9.95999999,20.12 C10.01,20.62 10.44,20.99 10.95,20.99 C11.55,20.99 12.01,20.47 11.95,19.88 C11.42,14.69 7.28999998,10.57 2.09999996,10.05 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "cast_connected",
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
          "fill": "#000000",
          "xlink:href": "#path-1"
        }
      ]
    }
  ]
};

export const HardwareCastConnectedIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    