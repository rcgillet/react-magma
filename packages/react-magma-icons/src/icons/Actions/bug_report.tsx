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
    "bug_report"
  ],
  "paths": [
    {
      "d": "M19,7.99999998 L17.19,7.99999998 C16.74,7.21999998 16.12,6.54999998 15.37,6.03999998 L16.3,5.10999997 C16.69,4.71999997 16.69,4.08999997 16.3,3.69999997 C15.91,3.30999996 15.28,3.30999996 14.89,3.69999997 L13.42,5.16999997 C12.96,5.05999997 12.49,4.99999997 12,4.99999997 C11.51,4.99999997 11.04,5.05999997 10.59,5.16999997 L9.10999999,3.69999997 C8.71999999,3.30999996 8.08999998,3.30999996 7.69999998,3.69999997 C7.30999998,4.08999997 7.30999998,4.71999997 7.69999998,5.10999997 L8.61999999,6.03999998 C7.87999998,6.54999998 7.25999998,7.21999998 6.80999998,7.99999998 L4.99999997,7.99999998 C4.44999997,7.99999998 3.99999997,8.44999999 3.99999997,8.99999999 C3.99999997,9.54999999 4.44999997,9.99999999 4.99999997,9.99999999 L6.08999998,9.99999999 C6.03999998,10.33 5.99999997,10.66 5.99999997,11 L5.99999997,12 L4.99999997,12 C4.44999997,12 3.99999997,12.45 3.99999997,13 C3.99999997,13.55 4.44999997,14 4.99999997,14 L5.99999997,14 L5.99999997,15 C5.99999997,15.34 6.03999998,15.67 6.08999998,16 L4.99999997,16 C4.44999997,16 3.99999997,16.45 3.99999997,17 C3.99999997,17.55 4.44999997,18 4.99999997,18 L6.80999998,18 C7.84999998,19.79 9.77999999,21 12,21 C14.22,21 16.15,19.79 17.19,18 L19,18 C19.55,18 20,17.55 20,17 C20,16.45 19.55,16 19,16 L17.91,16 C17.96,15.67 18,15.34 18,15 L18,14 L19,14 C19.55,14 20,13.55 20,13 C20,12.45 19.55,12 19,12 L18,12 L18,11 C18,10.66 17.96,10.33 17.91,9.99999999 L19,9.99999999 C19.55,9.99999999 20,9.54999999 20,8.99999999 C20,8.44999999 19.55,7.99999998 19,7.99999998 Z M13,16 L11,16 C10.45,16 9.99999999,15.55 9.99999999,15 C9.99999999,14.45 10.45,14 11,14 L13,14 C13.55,14 14,14.45 14,15 C14,15.55 13.55,16 13,16 Z M13,12 L11,12 C10.45,12 9.99999999,11.55 9.99999999,11 C9.99999999,10.45 10.45,9.99999999 11,9.99999999 L13,9.99999999 C13.55,9.99999999 14,10.45 14,11 C14,11.55 13.55,12 13,12 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "bug_report",
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

export const ActionsBugReportIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    