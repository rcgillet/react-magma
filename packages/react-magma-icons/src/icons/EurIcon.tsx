import * as React from 'react';
import { IconProps } from '../iconProps';
import { renderIcon } from '../SvgIcon';

const iconType = {
  viewBox: '0 0 15.81 22',
  paths: [
    {
      d:
        'M15.33,21.42l.55,2.49a.43.43,0,0,1-.05.35.47.47,0,0,1-.26.22l-.08,0-.16.06-.25.07-.34.08-.4.08-.47.08-.52.07-.57,0c-.2,0-.4,0-.6,0a10.38,10.38,0,0,1-6.39-2,10,10,0,0,1-3.72-5.49H.58a.49.49,0,0,1-.35-.15A.47.47,0,0,1,.08,17V15.2a.49.49,0,0,1,.15-.35.49.49,0,0,1,.35-.15h1a14.79,14.79,0,0,1,0-1.64h-1a.45.45,0,0,1-.35-.14.46.46,0,0,1-.15-.36V10.78a.49.49,0,0,1,.15-.36.48.48,0,0,1,.35-.14H2.12A10.09,10.09,0,0,1,5.92,5a10.41,10.41,0,0,1,6.26-2,12.45,12.45,0,0,1,3,.36.6.6,0,0,1,.31.23.55.55,0,0,1,.05.38L14.9,6.45a.48.48,0,0,1-.22.31.46.46,0,0,1-.38,0l-.06,0-.18,0-.27,0-.35-.06-.41,0a2.32,2.32,0,0,1-.45,0,1.22,1.22,0,0,0-.46,0,6.41,6.41,0,0,0-3.54,1,6.17,6.17,0,0,0-2.34,2.75h7.31a.44.44,0,0,1,.39.19.43.43,0,0,1,.11.4l-.37,1.78a.46.46,0,0,1-.5.41H5.55a14.63,14.63,0,0,0,0,1.64h7.18a.49.49,0,0,1,.39.19.51.51,0,0,1,.09.42l-.37,1.75a.53.53,0,0,1-.18.29.47.47,0,0,1-.31.12h-6a6.29,6.29,0,0,0,2.34,2.89,6.2,6.2,0,0,0,3.57,1.07,5.24,5.24,0,0,0,.56,0l.52-.05.47-.07.38-.08.29-.07.18-.05.08,0a.49.49,0,0,1,.41,0,.47.47,0,0,1,.23.33Z',
      transform: 'translate(-0.08 -3)',
    },
  ],
};

export const EurIcon: React.FunctionComponent<IconProps> = (props: IconProps) =>
  renderIcon(props, iconType);
