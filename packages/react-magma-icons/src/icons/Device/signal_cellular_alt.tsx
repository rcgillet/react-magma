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
    "signal_cellular_alt"
  ],
  "paths": [
    {
      "d": "M18.5,3.99999997 C19.33,3.99999997 20,4.66999997 20,5.49999997 L20,18.5 C20,19.33 19.33,20 18.5,20 C17.67,20 17,19.33 17,18.5 L17,5.49999997 C17,4.66999997 17.67,3.99999997 18.5,3.99999997 Z M6.49999997,14 C7.32999998,14 7.99999997,14.67 7.99999997,15.5 L7.99999997,18.5 C7.99999997,19.33 7.32999998,20 6.49999997,20 C5.66999997,20 4.99999997,19.33 4.99999997,18.5 L4.99999997,15.5 C4.99999997,14.67 5.66999997,14 6.49999997,14 Z M12.5,8.99999999 C13.33,8.99999999 14,9.66999999 14,10.5 L14,18.5 C14,19.33 13.33,20 12.5,20 C11.67,20 11,19.33 11,18.5 L11,10.5 C11,9.66999999 11.67,8.99999999 12.5,8.99999999 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "signal_cellular_alt",
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

export const DeviceSignalCellularAltIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    