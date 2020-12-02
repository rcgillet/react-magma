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
  title: ['assistant_photo'],
  paths: [
    {
      d:
        'M14.4,5.99999997 L14.16,4.79999997 C14.07,4.33999997 13.66,3.99999997 13.18,3.99999997 L5.99999997,3.99999997 C5.44999997,3.99999997 4.99999997,4.44999997 4.99999997,4.99999997 L4.99999997,20 C4.99999997,20.55 5.44999997,21 5.99999997,21 C6.54999998,21 6.99999997,20.55 6.99999997,20 L6.99999997,14 L12.6,14 L12.84,15.2 C12.93,15.67 13.34,16 13.82,16 L19,16 C19.55,16 20,15.55 20,15 L20,6.99999997 C20,6.44999998 19.55,5.99999997 19,5.99999997 L14.4,5.99999997 Z',
      id: 'ImageAssistantPhotoIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'assistant_photo',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageAssistantPhotoIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageAssistantPhotoIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageAssistantPhotoIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageAssistantPhotoIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
