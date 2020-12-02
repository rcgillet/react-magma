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
  title: ['non_mindtap_activity'],
  paths: [
    {
      d:
        'M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M15.255808,16.2105263 L13.1294716,16.2105263 L9.69711143,10.2416735 L9.6485403,10.2416735 C9.71690001,11.2958523 9.75107936,12.0477979 9.75107936,12.4975329 L9.75107936,16.2105263 L8.25616776,16.2105263 L8.25616776,8.3204153 L10.3663137,8.3204153 L13.7932771,14.2299034 L13.8310547,14.2299034 C13.7770865,13.2045076 13.7501028,12.4795457 13.7501028,12.0549959 L13.7501028,8.3204153 L15.255808,8.3204153 L15.255808,16.2105263 Z',
      id: 'CustomNonMindtapActivityIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'non_mindtap_activity',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomNonMindtapActivityIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomNonMindtapActivityIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomNonMindtapActivityIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomNonMindtapActivityIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
