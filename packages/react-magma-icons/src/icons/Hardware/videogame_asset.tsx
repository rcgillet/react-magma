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
  title: ['videogame_asset'],
  paths: [
    {
      d:
        'M21,5.99999998 L2.99999995,5.99999998 C1.89999996,5.99999998 0.999999954,6.89999998 0.999999954,7.99999998 L0.999999954,16 C0.999999954,17.1 1.89999996,18 2.99999995,18 L21,18 C22.1,18 23,17.1 23,16 L23,7.99999998 C23,6.89999998 22.1,5.99999998 21,5.99999998 Z M9.99999996,13 L7.99999996,13 L7.99999996,15 C7.99999996,15.55 7.54999998,16 6.99999996,16 C6.44999998,16 5.99999996,15.55 5.99999996,15 L5.99999996,13 L3.99999996,13 C3.44999996,13 2.99999996,12.55 2.99999996,12 C2.99999996,11.45 3.44999996,11 3.99999996,11 L5.99999996,11 L5.99999996,8.99999998 C5.99999996,8.44999999 6.44999998,7.99999998 6.99999996,7.99999998 C7.54999998,7.99999998 7.99999996,8.44999999 7.99999996,8.99999998 L7.99999996,11 L9.99999996,11 C10.55,11 11,11.45 11,12 C11,12.55 10.55,13 9.99999996,13 Z M15.5,15 C14.67,15 14,14.33 14,13.5 C14,12.67 14.67,12 15.5,12 C16.33,12 17,12.67 17,13.5 C17,14.33 16.33,15 15.5,15 Z M19.5,12 C18.67,12 18,11.33 18,10.5 C18,9.66999999 18.67,8.99999999 19.5,8.99999999 C20.33,8.99999999 21,9.66999999 21,10.5 C21,11.33 20.33,12 19.5,12 Z',
      id: 'HardwareVideogameAssetIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'videogame_asset',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'HardwareVideogameAssetIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#HardwareVideogameAssetIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#HardwareVideogameAssetIcon-path-1',
        },
      ],
    },
  ],
};

export const HardwareVideogameAssetIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
