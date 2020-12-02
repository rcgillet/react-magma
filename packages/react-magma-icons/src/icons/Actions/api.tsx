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
  title: ['api'],
  paths: [
    {
      d:
        'M13,13 L13,13 C12.44,13.56 11.55,13.56 11,13.01 L11,13 C10.45,12.45 10.45,11.56 11,11.01 L11,11 C11.55,10.45 12.44,10.45 12.99,11 L13,11 C13.55,11.55 13.55,12.45 13,13 Z M12,5.99999997 L14.12,8.11999998 L16.62,5.61999997 L13.42,2.41999996 C12.64,1.63999996 11.37,1.63999996 10.59,2.41999996 L7.38999998,5.61999997 L9.88999998,8.11999998 L12,5.99999997 Z M5.99999997,12 L8.11999998,9.87999998 L5.61999997,7.37999998 L2.41999996,10.58 C1.63999996,11.36 1.63999996,12.63 2.41999996,13.41 L5.61999997,16.61 L8.11999998,14.11 L5.99999997,12 Z M18,12 L15.88,14.12 L18.38,16.62 L21.58,13.42 C22.36,12.64 22.36,11.37 21.58,10.59 L18.38,7.38999998 L15.88,9.88999998 L18,12 Z M12,18 L9.87999998,15.88 L7.37999998,18.38 L10.58,21.58 C11.36,22.36 12.63,22.36 13.41,21.58 L16.61,18.38 L14.11,15.88 L12,18 Z',
      id: 'ActionsApiIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'api',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsApiIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsApiIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsApiIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsApiIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
