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
  title: ['hvac'],
  paths: [
    {
      d:
        'M19,2.99999996 C20.1,2.99999996 21,3.89999997 21,4.99999996 L21,4.99999996 L21,19 C21,20.1 20.1,21 19,21 L19,21 L4.99999996,21 C3.89999997,21 2.99999996,20.1 2.99999996,19 L2.99999996,19 L2.99999996,4.99999996 C2.99999996,3.89999997 3.89999997,2.99999996 4.99999996,2.99999996 L4.99999996,2.99999996 Z M12,5.99999998 C8.68999999,5.99999998 5.99999997,8.68999999 5.99999997,12 C5.99999997,15.31 8.68999999,18 12,18 C15.31,18 18,15.31 18,12 C18,8.68999999 15.31,5.99999998 12,5.99999998 Z M14.62,15 C13.91,15.61 13.01,16 12,16 C10.99,16 10.09,15.61 9.37999999,15 L9.37999999,15 Z M15.96,12.5 C15.89,13.04 15.71,13.55 15.45,14 L15.45,14 L8.55999998,14 C8.28999998,13.55 8.11999998,13.04 8.05999998,12.5 L8.05999998,12.5 Z M15.44,9.99999999 C15.71,10.45 15.88,10.96 15.95,11.5 L15.95,11.5 L8.04999998,11.5 C8.11999998,10.96 8.29999998,10.45 8.55999999,9.99999999 L8.55999999,9.99999999 Z M12,7.99999998 C13.01,7.99999998 13.91,8.38999998 14.62,8.99999998 L14.62,8.99999998 L9.37999999,8.99999998 C10.09,8.38999998 10.99,7.99999998 12,7.99999998 Z',
      id: 'MapsHvacIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'hvac',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsHvacIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsHvacIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsHvacIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsHvacIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
