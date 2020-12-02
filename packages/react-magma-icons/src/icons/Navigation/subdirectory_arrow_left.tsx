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
  title: ['subdirectory_arrow_left'],
  paths: [
    {
      d:
        'M5.70999997,15.71 L10.29,20.29 C10.68,20.68 11.32,20.68 11.71,20.29 C12.1,19.9 12.1,19.26 11.71,18.87 L8.82999999,16 L19,16 C19.55,16 20,15.55 20,15 L20,4.99999997 C20,4.44999997 19.55,3.99999997 19,3.99999997 C18.45,3.99999997 18,4.44999997 18,4.99999997 L18,14 L8.82999999,14 L11.71,11.13 C12.1,10.74 12.1,10.1 11.71,9.70999999 C11.32,9.31999999 10.68,9.31999999 10.29,9.70999999 L5.70999997,14.29 C5.31999997,14.68 5.31999997,15.32 5.70999997,15.71 Z',
      id: 'NavigationSubdirectoryArrowLeftIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'subdirectory_arrow_left',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationSubdirectoryArrowLeftIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationSubdirectoryArrowLeftIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationSubdirectoryArrowLeftIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationSubdirectoryArrowLeftIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
