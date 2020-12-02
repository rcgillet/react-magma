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
  title: ['party_mode'],
  paths: [
    {
      d:
        'M20,3.99999996 L16.83,3.99999996 L15.59,2.64999996 C15.22,2.23999996 14.68,1.99999996 14.12,1.99999996 L9.87999999,1.99999996 C9.31999999,1.99999996 8.77999999,2.23999996 8.39999998,2.64999996 L7.16999998,3.99999996 L3.99999996,3.99999996 C2.89999996,3.99999996 1.99999996,4.89999997 1.99999996,5.99999996 L1.99999996,18 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,5.99999996 C22,4.89999997 21.1,3.99999996 20,3.99999996 Z M12,6.99999998 C13.63,6.99999998 15.06,7.78999998 15.98,8.99999998 L12,8.99999998 C10.34,8.99999998 8.99999998,10.34 8.99999998,12 C8.99999998,12.35 9.06999999,12.69 9.17999999,13 L7.09999998,13 C7.03999998,12.68 6.99999998,12.34 6.99999998,12 C6.99999998,9.23999999 9.23999999,6.99999998 12,6.99999998 Z M12,17 C10.37,17 8.93999999,16.21 8.01999998,15 L12,15 C13.66,15 15,13.66 15,12 C15,11.65 14.93,11.31 14.82,11 L16.9,11 C16.97,11.32 17,11.66 17,12 C17,14.76 14.76,17 12,17 Z',
      id: 'SocialPartyModeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'party_mode',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialPartyModeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialPartyModeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialPartyModeIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialPartyModeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
