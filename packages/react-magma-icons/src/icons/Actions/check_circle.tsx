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
  title: ['check_circle'],
  paths: [
    {
      d:
        'M12,1.99999996 C6.47999998,1.99999996 1.99999996,6.47999998 1.99999996,12 C1.99999996,17.52 6.47999998,22 12,22 C17.52,22 22,17.52 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 Z M9.28999999,16.29 L5.69999997,12.7 C5.30999997,12.31 5.30999997,11.68 5.69999997,11.29 C6.08999998,10.9 6.71999998,10.9 7.10999998,11.29 L9.99999999,14.17 L16.88,7.28999998 C17.27,6.89999998 17.9,6.89999998 18.29,7.28999998 C18.68,7.67999998 18.68,8.30999998 18.29,8.69999999 L10.7,16.29 C10.32,16.68 9.67999999,16.68 9.28999999,16.29 Z',
      id: 'ActionsCheckCircleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'check_circle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsCheckCircleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsCheckCircleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsCheckCircleIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsCheckCircleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
