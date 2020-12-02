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
    "snippet_folder"
  ],
  "paths": [
    {
      "d": "M15.88,10.5 L17.5,12.12 L17.5,15.5 L14.5,15.5 L14.5,10.5 L15.88,10.5 Z M22,7.99999997 L22,18 C22,19.1 21.1,20 20,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L2.00999996,5.99999997 C2.00999996,4.89999997 2.89999996,3.99999997 3.99999996,3.99999997 L9.16999999,3.99999997 C9.69999999,3.99999997 10.21,4.20999997 10.58,4.58999997 L12,5.99999997 L20,5.99999997 C21.1,5.99999997 22,6.89999998 22,7.99999997 Z M19,11.91 C19,11.64 18.89,11.39 18.71,11.2 L16.8,9.28999999 C16.61,9.10999999 16.35,8.99999999 16.09,8.99999999 L14,8.99999999 C13.45,8.99999999 13,9.44999999 13,9.99999999 L13,16 C13,16.55 13.45,17 14,17 L18,17 C18.55,17 19,16.55 19,16 L19,11.91 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "snippet_folder",
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

export const FileSnippetFolderIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    