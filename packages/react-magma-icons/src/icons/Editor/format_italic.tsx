import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['format_italic'],
  paths: [
    {
      d:
        'M9.99999997,5.49999997 C9.99999997,6.32999998 10.67,6.99999997 11.5,6.99999997 L12.21,6.99999997 L8.78999999,15 L7.49999997,15 C6.66999998,15 5.99999997,15.67 5.99999997,16.5 C5.99999997,17.33 6.66999998,18 7.49999997,18 L12.5,18 C13.33,18 14,17.33 14,16.5 C14,15.67 13.33,15 12.5,15 L11.79,15 L15.21,6.99999997 L16.5,6.99999997 C17.33,6.99999997 18,6.32999998 18,5.49999997 C18,4.66999997 17.33,3.99999997 16.5,3.99999997 L11.5,3.99999997 C10.67,3.99999997 9.99999997,4.66999997 9.99999997,5.49999997 Z',
      id: 'EditorFormatItalicIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'format_italic',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorFormatItalicIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorFormatItalicIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorFormatItalicIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorFormatItalicIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
