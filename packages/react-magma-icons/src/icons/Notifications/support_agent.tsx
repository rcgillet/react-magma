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
    "support_agent"
  ],
  "paths": [
    {
      "d": "M12,2.99999996 C16.74,2.99999996 21,6.72999998 21,12.22 C21.59,12.53 22,13.14 22,13.84 L22,13.84 L22,16.14 C22,16.86 21.59,17.47 21,17.78 L21,17.78 L21,19 C21,20.1 20.1,21 19,21 L19,21 L12,21 C11.45,21 11,20.55 11,20 L11,20 L11.0067602,19.883801 C11.0647959,19.3880102 11.4892857,19 12,19 L12,19 L19,19 L19,11.9 C19,7.95999998 15.74,4.77999997 11.78,4.89999997 C7.94999998,5.00999997 4.99999996,8.35999998 4.99999996,12.19 L4.99999996,12.19 L4.99999996,17 C4.99999996,17.55 4.54999997,18 3.99999996,18 L3.99999996,18 L3.85130537,17.9944872 C2.82004128,17.9177686 1.99999996,17.05 1.99999996,16 L1.99999996,16 L1.99999996,14 C1.99999996,13.26 2.39999996,12.62 2.99999996,12.28 C2.99999996,6.64999998 7.30999998,2.99999996 12,2.99999996 Z M8.99999998,12 C9.55228474,12 9.99999998,12.4477153 9.99999998,13 C9.99999998,13.5522848 9.55228474,14 8.99999998,14 C8.44771524,14 7.99999998,13.5522848 7.99999998,13 C7.99999998,12.4477153 8.44771524,12 8.99999998,12 Z M15,12 C15.5522848,12 16,12.4477153 16,13 C16,13.5522848 15.5522848,14 15,14 C14.4477153,14 14,13.5522848 14,13 C14,12.4477153 14.4477153,12 15,12 Z M12.05,5.99999998 C15.04,5.99999998 17.52,8.17999998 18,11.03 C14.88,11 12.19,9.18999999 10.88,6.55999998 C10.35,9.23999999 8.48999999,11.44 6.01999998,12.45 C5.75999997,8.50999999 9.01999999,5.99999998 12.05,5.99999998 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "support_agent",
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

export const NotificationsSupportAgentIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    