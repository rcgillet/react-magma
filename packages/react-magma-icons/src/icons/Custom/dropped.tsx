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
  title: ['dropped'],
  paths: [
    {
      d:
        'M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M15.3287932,12.1899157 C15.3287932,13.4887503 14.9591166,14.4835492 14.2197523,15.1743421 C13.480388,15.865135 12.4127331,16.2105263 11.0167558,16.2105263 L8.78248355,16.2105263 L8.78248355,8.3204153 L11.2596114,8.3204153 C12.5476524,8.3204153 13.547848,8.66040984 14.2602282,9.34040913 C14.9726084,10.0204084 15.3287932,10.9702344 15.3287932,12.1899157 Z M13.5910259,12.23309 C13.5910259,10.5384886 12.8426781,9.69120066 11.3459601,9.69120066 L10.4554893,9.69120066 L10.4554893,14.8289474 L11.1732627,14.8289474 C12.7851129,14.8289474 13.5910259,13.9636702 13.5910259,12.23309 Z',
      id: 'CustomDroppedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'dropped',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomDroppedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomDroppedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomDroppedIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomDroppedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
