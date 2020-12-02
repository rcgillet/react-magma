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
  title: ['web_asset'],
  paths: [
    {
      d:
        'M19,3.99999997 L4.99999996,3.99999997 C3.88999997,3.99999997 2.99999996,4.89999997 2.99999996,5.99999997 L2.99999996,18 C2.99999996,19.1 3.88999997,20 4.99999996,20 L19,20 C20.1,20 21,19.1 21,18 L21,5.99999997 C21,4.89999997 20.11,3.99999997 19,3.99999997 Z M18,18 L5.99999997,18 C5.44999997,18 4.99999997,17.55 4.99999997,17 L4.99999997,7.99999998 L19,7.99999998 L19,17 C19,17.55 18.55,18 18,18 Z',
      id: 'AVWebAssetIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'web_asset',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'AVWebAssetIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#AVWebAssetIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          fill: '#000000',
          xlinkHref: '#AVWebAssetIcon-path-1',
        },
      ],
    },
  ],
};

export const AVWebAssetIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
