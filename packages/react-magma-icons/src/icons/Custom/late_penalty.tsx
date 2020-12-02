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
  title: ['late_penalty'],
  paths: [
    {
      d:
        'M12,2 C6.42857143,2 2,6.42857143 2,12 C2,17.5714286 6.42857143,22 12,22 C17.5714286,22 22,17.5714286 22,12 C22,6.42857143 17.5714286,2 12,2 Z M9.83511513,16.2105263 L9.83511513,8.3204153 L11.5081209,8.3204153 L11.5081209,14.8289474 L14.708419,14.8289474 L14.708419,16.2105263 L9.83511513,16.2105263 Z',
      id: 'CustomLatePenaltyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'late_penalty',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CustomLatePenaltyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CustomLatePenaltyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CustomLatePenaltyIcon-path-1',
        },
      ],
    },
  ],
};

export const CustomLatePenaltyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
