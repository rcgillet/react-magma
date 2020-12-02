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
  title: ['zoom_out'],
  paths: [
    {
      d:
        'M10.5,3 C14.6421356,3 18,6.35786438 18,10.5 C18,12.2106044 17.4273178,13.7874516 16.4632192,15.0492761 L20.363961,18.9497475 C20.7544853,19.3402718 20.7544853,19.9734367 20.363961,20.363961 C19.9734367,20.7544853 19.3402718,20.7544853 18.9497475,20.363961 L15.0492761,16.4632192 C13.7874516,17.4273178 12.2106044,18 10.5,18 C6.35786438,18 3,14.6421356 3,10.5 C3,6.35786438 6.35786438,3 10.5,3 Z M10.5,5 C7.46243388,5 5,7.46243388 5,10.5 C5,13.5375661 7.46243388,16 10.5,16 C13.5375661,16 16,13.5375661 16,10.5 C16,7.46243388 13.5375661,5 10.5,5 Z M13.3,9.75 C13.692,9.75 14,10.058 14,10.45 C14,10.842 13.692,11.15 13.3,11.15 L7.7,11.15 C7.308,11.15 7,10.842 7,10.45 C7,10.058 7.308,9.75 7.7,9.75 L13.3,9.75 Z',
      id: 'ActionsZoomOutIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'zoom_out',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsZoomOutIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsZoomOutIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsZoomOutIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsZoomOutIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
