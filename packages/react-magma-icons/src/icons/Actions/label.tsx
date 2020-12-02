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
  title: ['label'],
  paths: [
    {
      d:
        'M17.63,5.83999997 C17.27,5.32999997 16.67,4.99999997 16,4.99999997 L4.99999996,5.00999997 C3.89999997,5.00999997 2.99999996,5.89999997 2.99999996,6.99999997 L2.99999996,17 C2.99999996,18.1 3.89999997,18.99 4.99999996,18.99 L16,19 C16.67,19 17.27,18.67 17.63,18.16 L21.59,12.58 C21.84,12.23 21.84,11.77 21.59,11.42 L17.63,5.83999997 Z',
      id: 'ActionsLabelIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'label',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsLabelIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsLabelIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsLabelIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsLabelIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
