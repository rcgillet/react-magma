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
  title: ['how_to_vote'],
  paths: [
    {
      d:
        'M11.34,15.02 C11.73,15.41 12.36,15.41 12.75,15.02 L19.11,8.65999999 C19.5,8.26999998 19.5,7.63999998 19.11,7.24999998 L14.16,2.29999996 C13.78,1.89999996 13.15,1.89999996 12.76,2.28999996 L6.38999998,8.65999999 C5.99999997,9.04999999 5.99999997,9.67999999 6.38999998,10.07 L11.34,15.02 Z M13.46,4.40999997 L17,7.94999998 L12.05,12.9 L8.50999999,9.35999999 L13.46,4.40999997 Z M20.41,15.41 L18.29,13.29 C18.11,13.11 17.85,13 17.59,13 L17.32,13 L15.32,15 L17.23,15 L19,17 L4.99999996,17 L6.77999998,15 L8.82999999,15 L6.82999998,13 L6.40999998,13 C6.13999998,13 5.88999997,13.11 5.69999997,13.29 L3.57999996,15.41 C3.20999996,15.79 2.99999996,16.3 2.99999996,16.83 L2.99999996,20 C2.99999996,21.1 3.89999997,22 4.99999996,22 L19,22 C20.1,22 21,21.11 21,20 L21,16.83 C21,16.3 20.79,15.79 20.41,15.41 Z',
      id: 'ContentHowToVoteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'how_to_vote',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentHowToVoteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentHowToVoteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentHowToVoteIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentHowToVoteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
