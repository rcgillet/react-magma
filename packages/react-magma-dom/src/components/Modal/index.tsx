import * as React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import {
  getTrapElements,
  getTrapElementsAndFocus,
  getFocusedElementIndex,
} from './utils';
import { ThemeContext } from '../../theme/ThemeContext';
import { I18nContext } from '../../i18n';
import { ButtonColor, ButtonVariant } from '../Button';
import { IconButton } from '../IconButton';
import { CrossIcon } from 'react-magma-icons';
import { Heading } from '../Heading';
import { TypographyVisualStyle } from '../Typography';
import { ThemeInterface } from '../../theme/magma';
import { omit, useGenerateId, usePrevious } from '../../utils';

export enum ModalSize {
  large = 'large',
  medium = 'medium', //default
  small = 'small',
}

/**
 * @children required
 */
export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The text read by screen readers for the close button
   * @default "Close dialog"
   */
  closeAriaLabel?: string;
  /**
   * The content of the modal header
   */
  header?: React.ReactNode;
  /**
   * If true, clicking the backdrop will not dismiss the modal
   * @default false
   */
  isBackgroundClickDisabled?: boolean;
  /**
   * If true, the close button the the modal will be suppressed
   * @default false
   */
  isCloseButtonHidden?: boolean;
  /**
   * If true, pressing the Escape key will not dismiss the modal
   * @false
   */
  isEscKeyDownDisabled?: boolean;
  /**
   * If true, the modal will be visible
   * @default false
   */
  isOpen?: boolean;
  /**
   * Action that fires when the close button is clicked
   */
  onClose?: () => void;
  /**
   * Action that fires when the Escape key is pressed
   */
  onEscKeyDown?: (event: KeyboardEvent) => void;
  /**
   * The relative size of the modal
   * @default ModalSize.medium
   */
  size?: ModalSize;
  testId?: string;
  /**
   * @internal
   */
  theme?: ThemeInterface;
}

const ModalContainer = styled.div<{ theme: ThemeInterface }>`
  bottom: 0;
  left: 0;
  overflow-y: auto;
  padding: ${props => props.theme.spaceScale.spacing03};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 998;
`;

const ModalBackdrop = styled.div<{ isExiting?: boolean }>`
  animation: ${props => (props.isExiting ? 'fadeout 500ms' : 'fadein 500ms')};
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.6);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 997;

  @keyframes fadein {
    from {
      opacity: 0;
      transition: translate(0, -50px);
    }
    to {
      opacity: 1;
      transition: translate(0, 0);
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const ModalContent = styled.div<ModalProps & { isExiting?: boolean }>`
  animation: ${props =>
    props.isExiting ? 'fadeSlideOut 500ms' : 'fadeSlideIn 500ms'};
  background: ${props => props.theme.colors.neutral08};
  border: 1px solid;
  border-color: ${props => props.theme.colors.neutral06};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.neutral};
  margin: 0 auto;
  position: relative;
  z-index: 1000;

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translate(0, -50px);
    }
    to {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  @keyframes fadeSlideOut {
    from {
      opacity: 1;
      transform: translate(0, 0);
    }
    to {
      opacity: 0;
      transform: translate(0, -50px);
    }
  }

  max-width: ${props => {
    switch (props.size) {
      case 'large':
        return props.theme.modal.width.large;
      case 'small':
        return props.theme.modal.width.small;
      default:
        return props.theme.modal.width.medium;
    }
  }};

  @media (min-width: ${props => props.theme.breakpoints.small}px) {
    margin: ${props => props.theme.spaceScale.spacing08} auto;
  }
`;

const ModalHeader = styled.div<{ theme?: ThemeInterface }>`
  padding: ${props => props.theme.spaceScale.spacing03}
    ${props => props.theme.spaceScale.spacing05} 0
    ${props => props.theme.spaceScale.spacing05};
  @media (min-width: ${props => props.theme.breakpoints.small}px) {
    padding: ${props => props.theme.spaceScale.spacing05}
      ${props => props.theme.spaceScale.spacing06} 0
      ${props => props.theme.spaceScale.spacing06};
  }
`;

const H1 = styled(Heading)<{ theme?: ThemeInterface }>`
  font-size: ${props =>
    props.theme.typographyVisualStyles.headingSmall.desktop.fontSize};
  line-height: ${props =>
    props.theme.typographyVisualStyles.headingSmall.desktop.lineHeight};
  margin: 0;
  padding-right: ${props => props.theme.spaceScale.spacing10};
`;

const CloseBtn = styled.span`
  position: absolute;
  top: 0;
  right: 0;
`;
const ModalBody = styled.div<{ theme?: ThemeInterface }>`
  padding: ${props => props.theme.spaceScale.spacing05};

  @media (min-width: ${props => props.theme.breakpoints.small}px) {
    padding: ${props => props.theme.spaceScale.spacing06};
  }
`;

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (props, ref) => {
    const lastFocus = React.useRef<any>();
    const headingRef = React.useRef<any>();
    const bodyRef = React.useRef<any>();
    const focusTrapElement = React.useRef<any>();

    const id = useGenerateId(props.id);
    const headingId = `${id}_heading`;
    const contentId = `${id}_content`;

    const [focusableElements, setFocusableElements] = React.useState<
      HTMLElement[]
    >([]);
    const [isModalOpen, setIsModalOpen] = React.useState<boolean>(props.isOpen);
    const [isExiting, setIsExiting] = React.useState<boolean>(false);
    const [currentTarget, setCurrentTarget] = React.useState(null);

    const prevOpen = usePrevious(props.isOpen);

    React.useEffect(() => {
      if (!prevOpen && props.isOpen) {
        setIsModalOpen(true);
      } else if (prevOpen && !props.isOpen && isModalOpen) {
        handleClose();
      }
    }, [props.isOpen]);

    React.useEffect(() => {
      if (isModalOpen) {
        lastFocus.current = document.activeElement;

        setFocusableElements(
          getTrapElementsAndFocus(
            focusTrapElement,
            bodyRef,
            props.header ? headingRef : null
          )
        );

        if (!props.isEscKeyDownDisabled) {
          document.body.addEventListener('keydown', handleEscapeKeyDown, false);
        }
      }

      return () => {
        document.body.removeEventListener(
          'keydown',
          handleEscapeKeyDown,
          false
        );
      };
    }, [isModalOpen]);

    React.useEffect(() => {
      if (isModalOpen) {
        const newFocusableElements: Array<HTMLElement> =
          document.activeElement.nodeName === 'BODY'
            ? getTrapElementsAndFocus(focusTrapElement, bodyRef)
            : getTrapElements(focusTrapElement);

        setFocusableElements(newFocusableElements);
      }
    }, [props.children]);

    function handleModalClick(event: React.SyntheticEvent) {
      if (
        !document.getElementById(contentId).contains(event.target as Node) &&
        event.target === currentTarget
      ) {
        handleClose(event);
      }
    }

    function handleModalOnMouseDown(event: React.SyntheticEvent) {
      setCurrentTarget(event.target);
    }

    function handleEscapeKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();

        props.onEscKeyDown &&
          typeof props.onEscKeyDown === 'function' &&
          props.onEscKeyDown(event);

        handleClose(event);
      }
    }

    function isElementHeader(el: any) {
      return headingRef.current ? headingRef.current.id === el.id : false;
    }

    function handleKeyDown(event) {
      const { keyCode, shiftKey } = event;

      if (shiftKey && keyCode === 9) {
        const index = getFocusedElementIndex(focusableElements, event.target);

        if (focusableElements.length === 0) {
          event.preventDefault();
        }

        if (
          index === 0 ||
          isElementHeader(event.target) ||
          (event.target.getAttribute('type') === 'radio' &&
            event.target.hasAttribute('name') &&
            event.target.getAttribute('name') ===
              focusableElements[0].getAttribute('name'))
        ) {
          event.preventDefault();
          focusableElements[focusableElements.length - 1].focus();
        }
      } else if (keyCode === 9) {
        const index = getFocusedElementIndex(focusableElements, event.target);

        if (index === focusableElements.length - 1) {
          event.preventDefault();
          if (focusableElements.length > 0) {
            focusableElements[0].focus();
          }
        }
      }
    }

    function handleClose(event?) {
      if (event) {
        event.stopPropagation();
      }
      setIsExiting(true);

      setTimeout(() => {
        setIsExiting(false);
        setFocusableElements([]);
        setIsModalOpen(false);

        if (lastFocus.current) {
          lastFocus.current.focus();
        }

        props.onClose && typeof props.onClose === 'function' && props.onClose();
      }, 300);
    }

    const {
      children,
      closeAriaLabel,
      isBackgroundClickDisabled,
      isEscKeyDownDisabled,
      header,
      isCloseButtonHidden,
      isOpen,
      testId,
      ...rest
    } = props;

    const other = omit(['onEscKeyDown'], rest);
    const theme = React.useContext(ThemeContext);
    const i18n = React.useContext(I18nContext);

    const CloseIcon = (
      <CrossIcon color={theme.colors.neutral03} size={theme.iconSizes.small} />
    );

    return isModalOpen
      ? ReactDOM.createPortal(
          <>
            <Global
              styles={css`
                html {
                  overflow: hidden;
                }
              `}
            />

            <ModalContainer
              aria-labelledby={headingId}
              aria-modal={true}
              data-testid={testId}
              id={id}
              onKeyDown={isEscKeyDownDisabled ? null : handleKeyDown}
              onClick={isBackgroundClickDisabled ? null : handleModalClick}
              onMouseDown={
                isBackgroundClickDisabled ? null : handleModalOnMouseDown
              }
              ref={focusTrapElement}
              role="dialog"
              theme={theme}
            >
              <ModalContent
                {...other}
                data-testid="modal-content"
                id={contentId}
                isExiting={isExiting}
                ref={ref}
                theme={theme}
              >
                {header && (
                  <ModalHeader theme={theme}>
                    {header && (
                      <H1
                        id={headingId}
                        level={1}
                        ref={headingRef}
                        visualStyle={TypographyVisualStyle.headingSmall}
                        tabIndex={-1}
                        theme={theme}
                      >
                        {header}
                      </H1>
                    )}
                  </ModalHeader>
                )}
                <ModalBody ref={bodyRef} theme={theme}>
                  {children}
                </ModalBody>
                {!isCloseButtonHidden && (
                  <CloseBtn>
                    <IconButton
                      aria-label={
                        closeAriaLabel
                          ? closeAriaLabel
                          : i18n.modal.closeAriaLabel
                      }
                      color={ButtonColor.secondary}
                      icon={CloseIcon}
                      onClick={handleClose}
                      testId="modal-closebtn"
                      variant={ButtonVariant.link}
                    />
                  </CloseBtn>
                )}
              </ModalContent>
            </ModalContainer>
            <ModalBackdrop
              data-testid="modal-backdrop"
              isExiting={isExiting}
              onMouseDown={
                isBackgroundClickDisabled
                  ? event => event.preventDefault()
                  : null
              }
            />
          </>,
          document.getElementsByTagName('body')[0]
        )
      : null;
  }
);
