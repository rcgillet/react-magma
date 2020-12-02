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
    "signal_cellular_off"
  ],
  "paths": [
    {
      "d": "M21,3.40999996 C21,2.51999996 19.92,2.06999996 19.29,2.69999996 L12.69,9.29999999 L21,17.61 L21,3.40999996 Z M21.44,20.88 L5.61999997,5.05999997 C5.22999997,4.66999997 4.59999997,4.66999997 4.20999997,5.05999997 C3.81999997,5.44999997 3.81999997,6.07999998 4.20999997,6.46999998 L9.86999999,12.13 L2.70999996,19.29 C2.07999996,19.92 2.51999996,21 3.40999996,21 L18.73,21 L20.02,22.29 C20.41,22.68 21.04,22.68 21.43,22.29 C21.83,21.9 21.83,21.27 21.44,20.88 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "signal_cellular_off",
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

export const DeviceSignalCellularOffIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    