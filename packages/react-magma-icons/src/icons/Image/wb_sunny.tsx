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
    "wb_sunny"
  ],
  "paths": [
    {
      "d": "M6.04999998,4.13999997 L5.65999997,3.74999997 C5.26999997,3.35999996 4.63999997,3.36999996 4.25999997,3.74999997 L4.24999997,3.75999997 C3.85999997,4.14999997 3.85999997,4.77999997 4.24999997,5.15999997 L4.63999997,5.54999997 C5.02999997,5.93999997 5.64999997,5.93999997 6.03999998,5.54999997 L6.04999998,5.53999997 C6.43999998,5.15999997 6.43999998,4.51999997 6.04999998,4.13999997 L6.04999998,4.13999997 Z M3.00999996,10.5 L1.98999996,10.5 C1.43999996,10.5 0.999999954,10.94 0.999999954,11.49 L0.999999954,11.5 C0.999999954,12.05 1.43999996,12.49 1.98999996,12.49 L2.99999995,12.49 C3.55999996,12.5 3.99999995,12.06 3.99999995,11.51 L3.99999995,11.5 C3.99999995,10.94 3.55999996,10.5 3.00999996,10.5 Z M12.01,0.549999952 L12,0.549999952 C11.44,0.549999952 11,0.989999954 11,1.53999996 L11,2.49999996 C11,3.04999995 11.44,3.48999996 11.99,3.48999996 L12,3.48999996 C12.56,3.49999996 13,3.05999996 13,2.50999996 L13,1.53999996 C13,0.989999954 12.56,0.549999952 12.01,0.549999952 Z M19.75,3.75999997 C19.36,3.36999996 18.73,3.36999996 18.34,3.74999997 L17.95,4.13999997 C17.56,4.52999997 17.56,5.15999997 17.95,5.53999997 L17.96,5.54999997 C18.35,5.93999997 18.98,5.93999997 19.36,5.54999997 L19.75,5.15999997 C20.14,4.76999997 20.14,4.14999997 19.75,3.75999997 Z M17.94,18.86 L18.33,19.25 C18.72,19.64 19.35,19.64 19.74,19.25 C20.13,18.86 20.13,18.23 19.74,17.84 L19.35,17.45 C18.96,17.06 18.33,17.07 17.95,17.45 C17.55,17.85 17.55,18.47 17.94,18.86 Z M20,11.49 L20,11.5 C20,12.05 20.44,12.49 20.99,12.49 L22,12.49 C22.55,12.49 22.99,12.05 22.99,11.5 L22.99,11.49 C22.99,10.94 22.55,10.5 22,10.5 L20.99,10.5 C20.44,10.5 20,10.94 20,11.49 Z M12,5.49999997 C8.68999999,5.49999997 5.99999998,8.18999998 5.99999998,11.5 C5.99999998,14.81 8.68999999,17.5 12,17.5 C15.31,17.5 18,14.81 18,11.5 C18,8.18999998 15.31,5.49999997 12,5.49999997 Z M11.99,22.45 L12,22.45 C12.55,22.45 12.99,22.01 12.99,21.46 L12.99,20.5 C12.99,19.95 12.55,19.51 12,19.51 L11.99,19.51 C11.44,19.51 11,19.95 11,20.5 L11,21.46 C11,22.01 11.44,22.45 11.99,22.45 Z M4.24999997,19.24 C4.63999997,19.63 5.26999997,19.63 5.65999997,19.24 L6.04999998,18.85 C6.43999998,18.46 6.42999998,17.83 6.04999998,17.45 L6.03999998,17.44 C5.64999997,17.05 5.01999997,17.05 4.62999997,17.44 L4.23999997,17.83 C3.85999997,18.23 3.85999997,18.85 4.24999997,19.24 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "wb_sunny",
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

export const ImageWbSunnyIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    