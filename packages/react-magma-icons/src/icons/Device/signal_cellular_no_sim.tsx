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
    "signal_cellular_no_sim"
  ],
  "paths": [
    {
      "d": "M19,4.99999996 C19,3.89999997 18.1,2.99999996 17,2.99999996 L10.83,2.99999996 C10.3,2.99999996 9.78999999,3.20999996 9.40999999,3.58999996 L7.94999998,5.05999997 L19,16.11 L19,4.99999996 Z M3.08999996,4.43999997 C2.69999996,4.82999997 2.69999996,5.45999997 3.08999996,5.84999997 L4.99999997,7.77999998 L4.99999997,19 C4.99999997,20.11 5.89999997,21 6.99999998,21 L18.23,21 L19.14,21.91 C19.53,22.3 20.16,22.3 20.55,21.91 C20.94,21.52 20.94,20.89 20.55,20.5 L4.49999997,4.43999997 C4.10999997,4.04999997 3.47999996,4.04999997 3.08999996,4.43999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "signal_cellular_no_sim",
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

export const DeviceSignalCellularNoSimIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    