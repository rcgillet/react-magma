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
    "qr_code_scanner"
  ],
  "paths": [
    {
      "d": "M9.49999998,6.49999998 L9.49999998,9.49999998 L6.49999998,9.49999998 L6.49999998,6.49999998 L9.49999998,6.49999998 M11,4.99999997 L4.99999997,4.99999997 L4.99999997,11 L11,11 L11,4.99999997 L11,4.99999997 Z M9.49999998,14.5 L9.49999998,17.5 L6.49999998,17.5 L6.49999998,14.5 L9.49999998,14.5 M11,13 L4.99999997,13 L4.99999997,19 L11,19 L11,13 L11,13 Z M17.5,6.49999998 L17.5,9.49999998 L14.5,9.49999998 L14.5,6.49999998 L17.5,6.49999998 M19,4.99999997 L13,4.99999997 L13,11 L19,11 L19,4.99999997 L19,4.99999997 Z M13,13 L14.5,13 L14.5,14.5 L13,14.5 L13,13 Z M14.5,14.5 L16,14.5 L16,16 L14.5,16 L14.5,14.5 Z M16,13 L17.5,13 L17.5,14.5 L16,14.5 L16,13 Z M13,16 L14.5,16 L14.5,17.5 L13,17.5 L13,16 Z M14.5,17.5 L16,17.5 L16,19 L14.5,19 L14.5,17.5 Z M16,16 L17.5,16 L17.5,17.5 L16,17.5 L16,16 Z M17.5,14.5 L19,14.5 L19,16 L17.5,16 L17.5,14.5 Z M17.5,17.5 L19,17.5 L19,19 L17.5,19 L17.5,17.5 Z M21,6.99999996 L21,6.99999996 C20.45,6.99999996 20,6.54999998 20,5.99999996 L20,3.99999996 L18,3.99999996 C17.45,3.99999996 17,3.54999996 17,2.99999996 L17,2.99999996 C17,2.44999996 17.45,1.99999996 18,1.99999996 L21,1.99999996 C21.55,1.99999996 22,2.44999996 22,2.99999996 L22,5.99999996 C22,6.54999998 21.55,6.99999996 21,6.99999996 Z M22,21 L22,18 C22,17.45 21.55,17 21,17 L21,17 C20.45,17 20,17.45 20,18 L20,20 L18,20 C17.45,20 17,20.45 17,21 L17,21 C17,21.55 17.45,22 18,22 L21,22 C21.55,22 22,21.55 22,21 Z M2.99999996,22 L5.99999996,22 C6.54999998,22 6.99999996,21.55 6.99999996,21 L6.99999996,21 C6.99999996,20.45 6.54999998,20 5.99999996,20 L3.99999996,20 L3.99999996,18 C3.99999996,17.45 3.54999996,17 2.99999996,17 L2.99999996,17 C2.44999996,17 1.99999996,17.45 1.99999996,18 L1.99999996,21 C1.99999996,21.55 2.44999996,22 2.99999996,22 Z M1.99999996,2.99999996 L1.99999996,5.99999996 C1.99999996,6.54999998 2.44999996,6.99999996 2.99999996,6.99999996 L2.99999996,6.99999996 C3.54999996,6.99999996 3.99999996,6.54999998 3.99999996,5.99999996 L3.99999996,3.99999996 L5.99999996,3.99999996 C6.54999998,3.99999996 6.99999996,3.54999996 6.99999996,2.99999996 L6.99999996,2.99999996 C6.99999996,2.44999996 6.54999998,1.99999996 5.99999996,1.99999996 L2.99999996,1.99999996 C2.44999996,1.99999996 1.99999996,2.44999996 1.99999996,2.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "qr_code_scanner",
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

export const CommunicationQrCodeScannerIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    