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
  title: ['subject'],
  paths: [
    {
      d:
        'M13,17 L4.99999997,17 C4.44999997,17 3.99999997,17.45 3.99999997,18 C3.99999997,18.55 4.44999997,19 4.99999997,19 L13,19 C13.55,19 14,18.55 14,18 C14,17.45 13.55,17 13,17 Z M19,8.99999999 L4.99999997,8.99999999 C4.44999997,8.99999999 3.99999997,9.44999999 3.99999997,9.99999999 C3.99999997,10.55 4.44999997,11 4.99999997,11 L19,11 C19.55,11 20,10.55 20,9.99999999 C20,9.44999999 19.55,8.99999999 19,8.99999999 Z M4.99999997,15 L19,15 C19.55,15 20,14.55 20,14 C20,13.45 19.55,13 19,13 L4.99999997,13 C4.44999997,13 3.99999997,13.45 3.99999997,14 C3.99999997,14.55 4.44999997,15 4.99999997,15 Z M3.99999997,5.99999997 C3.99999997,6.54999998 4.44999997,6.99999997 4.99999997,6.99999997 L19,6.99999997 C19.55,6.99999997 20,6.54999998 20,5.99999997 C20,5.44999997 19.55,4.99999997 19,4.99999997 L4.99999997,4.99999997 C4.44999997,4.99999997 3.99999997,5.44999997 3.99999997,5.99999997 Z',
      id: 'ActionsSubjectIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'subject',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsSubjectIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsSubjectIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsSubjectIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsSubjectIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
