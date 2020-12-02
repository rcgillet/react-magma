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
  title: ['closed_caption'],
  paths: [
    {
      d:
        'M19,3.99999997 L4.99999996,3.99999997 C3.88999997,3.99999997 2.99999996,4.89999997 2.99999996,5.99999997 L2.99999996,18 C2.99999996,19.1 3.88999997,20 4.99999996,20 L19,20 C20.1,20 21,19.1 21,18 L21,5.99999997 C21,4.89999997 20.1,3.99999997 19,3.99999997 Z M11,10.5 C11,10.78 10.78,11 10.5,11 L9.99999997,11 C9.71999999,11 9.49999997,10.78 9.49999997,10.5 L7.49999997,10.5 L7.49999997,13.5 L9.49999997,13.5 C9.49999997,13.22 9.71999999,13 9.99999997,13 L10.5,13 C10.78,13 11,13.22 11,13.5 L11,14 C11,14.55 10.55,15 9.99999997,15 L6.99999997,15 C6.44999998,15 5.99999997,14.55 5.99999997,14 L5.99999997,9.99999999 C5.99999997,9.44999999 6.44999998,8.99999999 6.99999997,8.99999999 L9.99999997,8.99999999 C10.55,8.99999999 11,9.44999999 11,9.99999999 L11,10.5 Z M18,10.5 C18,10.78 17.78,11 17.5,11 L17,11 C16.72,11 16.5,10.78 16.5,10.5 L14.5,10.5 L14.5,13.5 L16.5,13.5 C16.5,13.22 16.72,13 17,13 L17.5,13 C17.78,13 18,13.22 18,13.5 L18,14 C18,14.55 17.55,15 17,15 L14,15 C13.45,15 13,14.55 13,14 L13,9.99999999 C13,9.44999999 13.45,8.99999999 14,8.99999999 L17,8.99999999 C17.55,8.99999999 18,9.44999999 18,9.99999999 L18,10.5 Z',
      id: 'AVClosedCaptionIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'closed_caption',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVClosedCaptionIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVClosedCaptionIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVClosedCaptionIcon-path-1',
        },
      ],
    },
  ],
};

export const AVClosedCaptionIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
