import * as React from 'react';
import styled from '../../theme/styled';
import isPropValid from '@emotion/is-prop-valid';
import { AlertProps } from '../Alert';
import { AlertVariant, buildAlertBackground, VARIANT_ICON } from '../AlertBase';
import { CrossIcon } from 'react-magma-icons';
import { Button, ButtonSize, ButtonVariant, ButtonColor } from '../Button';
import { IconButton } from '../IconButton';
import { ThemeContext } from '../../theme/ThemeContext';
import { I18nContext } from '../../i18n';

/**
 * @children required
 */
export interface BannerProps extends AlertProps {
  /**
   * The text displayed inside of the action button
   */
  actionButtonText?: string;
  /**
   * Action that fires when the action button is clicked. Must be present for button to appear
   */
  actionButtonOnClick?: () => void;
  /**
   * If true, the component will be able to be dismissed and will include a close button
   * @default false
   */
  isDismissible?: boolean;
}

const StyledBanner = styled.div<AlertProps>`
  align-items: stretch;
  background: ${props => buildAlertBackground(props)};
  color: ${props =>
    props.variant === 'warning'
      ? props.theme.colors.neutral
      : props.theme.colors.neutral08};
  display: flex;
  font-size: ${props => props.theme.typeScale.size03.fontSize};
  line-height: ${props => props.theme.typeScale.size03.lineHeight};
  position: relative;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.small}px) {
    text-align: left;
    font-size: ${props => props.theme.typeScale.size02.fontSize};
    line-height: ${props => props.theme.typeScale.size02.lineHeight};
  }
`;

const BannerContents = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: ${props => props.theme.spaceScale.spacing05}
    ${props => props.theme.spaceScale.spacing04};

  @media (max-width: ${props => props.theme.breakpoints.small}px) {
    justify-content: flex-start;
  }
`;

const ButtonWrapper = styled.span`
  align-items: center;
  display: flex;
  flex-shrink: 0;
`;

const allowedProps = ['icon', 'isInverse', 'theme', 'variant'];

const shouldForwardProp = prop => {
  return isPropValid(prop) || allowedProps.includes(prop);
};

const DismissButton = styled(IconButton, { shouldForwardProp })<{
  alertVariant?: AlertVariant;
}>`
  align-self: stretch;
  border-radius: 0;
  color: ${({ alertVariant, theme }) =>
    alertVariant === 'warning' ? theme.colors.neutral : theme.colors.neutral08};
  height: auto;
  padding: 0 ${props => props.theme.spaceScale.spacing05};
  width: auto;

  &&:focus:not(:disabled) {
    outline: 2px dotted
      ${({ alertVariant, theme }) =>
        alertVariant === 'warning'
          ? theme.colors.neutral
          : theme.colors.neutral08};
    outline-offset: 0 !important;
  }

  &:hover,
  &:focus {
    :not(:disabled) {
      &:before {
        background: ${({ alertVariant, theme }) =>
          alertVariant === 'warning'
            ? theme.colors.neutral
            : theme.colors.neutral08};
        opacity: 0.15;
      }

      &:after {
        display: none;
      }
    }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  padding-right: ${props => props.theme.spaceScale.spacing03};

  @media (max-width: ${props => props.theme.breakpoints.small}px) {
    display: none;
  }
`;

function renderIcon(variant = 'info', theme: any) {
  const Icon = VARIANT_ICON[variant];

  return (
    <IconWrapper theme={theme}>
      <Icon size={theme.iconSizes.medium} />
    </IconWrapper>
  );
}

function getButtonColor(variant: AlertVariant) {
  switch (variant) {
    case 'success':
      return ButtonColor.success;
    case 'warning':
      return ButtonColor.secondary;
    case 'danger':
      return ButtonColor.danger;
    default:
      return ButtonColor.primary;
  }
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (props, ref) => {
    const {
      actionButtonText,
      actionButtonOnClick,
      children,
      closeAriaLabel,
      isDismissible,
      onDismiss,
      testId,
      variant,
      ...other
    } = props;

    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);

    return (
      <StyledBanner
        {...other}
        data-testid={testId}
        ref={ref}
        theme={theme}
        variant={variant}
      >
        <BannerContents theme={theme}>
          {renderIcon(variant, theme)}
          {children}
          {actionButtonText && actionButtonOnClick && (
            <Button
              color={getButtonColor(variant)}
              isInverse
              onClick={actionButtonOnClick}
              style={{ margin: `0 0 0 ${theme.spaceScale.spacing08}` }}
              size={ButtonSize.small}
            >
              {actionButtonText}
            </Button>
          )}
        </BannerContents>

        {isDismissible && (
          <ButtonWrapper>
            <DismissButton
              alertVariant={variant}
              aria-label={
                closeAriaLabel ? closeAriaLabel : i18n.alert.dismissAriaLabel
              }
              icon={<CrossIcon size={13} />}
              isInverse
              onClick={onDismiss}
              theme={theme}
              variant={ButtonVariant.link}
            />
          </ButtonWrapper>
        )}
      </StyledBanner>
    );
  }
);
