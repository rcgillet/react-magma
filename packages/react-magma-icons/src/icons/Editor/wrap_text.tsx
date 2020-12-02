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
  title: ['wrap_text'],
  paths: [
    {
      d:
        'M4.99999997,6.99999997 L19,6.99999997 C19.55,6.99999997 20,6.54999998 20,5.99999997 C20,5.44999997 19.55,4.99999997 19,4.99999997 L4.99999997,4.99999997 C4.44999997,4.99999997 3.99999997,5.44999997 3.99999997,5.99999997 C3.99999997,6.54999998 4.44999997,6.99999997 4.99999997,6.99999997 Z M16.83,11 L4.99999997,11 C4.44999997,11 3.99999997,11.45 3.99999997,12 C3.99999997,12.55 4.44999997,13 4.99999997,13 L17.13,13 C18.13,13 19.06,13.67 19.22,14.66 C19.43,15.91 18.46,17 17.25,17 L15,17 L15,16.21 C15,15.76 14.46,15.54 14.15,15.86 L12.36,17.65 C12.16,17.85 12.16,18.16 12.36,18.36 L14.15,20.15 C14.47,20.47 15,20.24 15,19.8 L15,19 L17,19 C19.34,19 21.21,16.99 20.98,14.61 C20.78,12.53 18.92,11 16.83,11 Z M8.99999997,17 L4.99999997,17 C4.44999997,17 3.99999997,17.45 3.99999997,18 C3.99999997,18.55 4.44999997,19 4.99999997,19 L8.99999997,19 C9.54999999,19 9.99999997,18.55 9.99999997,18 C9.99999997,17.45 9.54999999,17 8.99999997,17 Z',
      id: 'EditorWrapTextIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wrap_text',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'EditorWrapTextIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#EditorWrapTextIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#EditorWrapTextIcon-path-1',
        },
      ],
    },
  ],
};

export const EditorWrapTextIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
