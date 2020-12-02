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
    "title"
  ],
  "paths": [
    {
      "d": "M4.99999997,5.49999997 C4.99999997,6.32999998 5.66999997,6.99999997 6.49999997,6.99999997 L10.5,6.99999997 L10.5,17.5 C10.5,18.33 11.17,19 12,19 C12.83,19 13.5,18.33 13.5,17.5 L13.5,6.99999997 L17.5,6.99999997 C18.33,6.99999997 19,6.32999998 19,5.49999997 C19,4.66999997 18.33,3.99999997 17.5,3.99999997 L6.49999997,3.99999997 C5.66999997,3.99999997 4.99999997,4.66999997 4.99999997,5.49999997 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "title",
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

export const EditorTitleIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    