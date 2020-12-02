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
    "music_note"
  ],
  "paths": [
    {
      "d": "M12,4.99999996 L12,13.55 C11.06,13.01 9.89999999,12.8 8.66999999,13.23 C7.32999998,13.71 6.29999998,14.9 6.05999998,16.3 C5.59999997,19.04 7.91999998,21.38 10.65,20.95 C12.61,20.64 14,18.84 14,16.85 L14,6.99999996 L16,6.99999996 C17.1,6.99999996 18,6.09999998 18,4.99999996 C18,3.89999997 17.1,2.99999996 16,2.99999996 L14,2.99999996 C12.9,2.99999996 12,3.89999997 12,4.99999996 Z",
      "id": "path-1"
    }
  ],
  "polygons": [],
  "groups": [
    {
      "id": "music_note",
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

export const ImageMusicNoteIcon: React.FunctionComponent<IconProps> = (
    props: IconProps
) => renderIcon(props, iconType);
    