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
  title: ['change_display_options'],
  paths: [
    {
      d:
        'M21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.55228475 21.5522847,7 21,7 L17,7 L17,18 C17,18.5522847 16.5522847,19 16,19 C15.4477153,19 15,18.5522847 15,18 L15,7 L11,7 C10.4477153,7 10,6.55228475 10,6 C10,5.44771525 10.4477153,5 11,5 L21,5 Z M10,10 C10.5522847,10 11,10.4477153 11,11 C11,11.5522847 10.5522847,12 10,12 L8,12 L8,18 C8,18.5522847 7.55228475,19 7,19 C6.44771525,19 6,18.5522847 6,18 L6,12 L4,12 C3.44771525,12 3,11.5522847 3,11 C3,10.4477153 3.44771525,10 4,10 L10,10 Z',
      id: 'ActionsChangeDisplayOptionsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'change_display_options',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsChangeDisplayOptionsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsChangeDisplayOptionsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsChangeDisplayOptionsIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsChangeDisplayOptionsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
