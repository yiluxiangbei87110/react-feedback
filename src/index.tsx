import React, { useState } from 'react';
import classNames from 'classnames';
export interface IFProps {
  hoverActiveClass?: string;
  clickActiveClass?: string;
  disabled?: boolean;
  children?: any;
}

export enum EventType {
  onMouseDown = 'onMouseDown',
  onMouseUp = 'onMouseUp',
  onMouseLeave = 'onMouseLeave',
  onMouseOver = 'onMouseOver',
}

const Feedback: React.FC<IFProps> = props => {
  const [isHoverActive, setHoverActive] = useState(false);
  const [isClickActive, setClickActive] = useState(false);
  const {
    hoverActiveClass = '',
    clickActiveClass = '',
    children,
    disabled,
  } = props;
  const child = React.Children.only(children);
  const { style, className } = child.props;

  function trigger(
    eventType: string,
    isHoverActive: boolean,
    isClickActive: boolean,
    event: MouseEvent
  ): void {
    const childEvent = child.props[eventType];
    if (childEvent) {
      childEvent(event);
    }
    setHoverActive(isHoverActive);
    setClickActive(isClickActive);
  }
  const onMouseDown = (e: MouseEvent) => {
    trigger(EventType.onMouseDown, false, true, e);
  };
  const onMouseUp = (e: MouseEvent) => {
    trigger(EventType.onMouseUp, true, false, e);
  };

  const onMouseLeave = (e: MouseEvent) => {
    trigger(EventType.onMouseLeave, false, false, e);
  };

  const onMouseOver = (e: MouseEvent) => {
    trigger(EventType.onMouseOver, true, false, e);
  };

  const currentClass = classNames(className, {
    [hoverActiveClass]: isHoverActive,
    [clickActiveClass]: isClickActive,
  });
  const currentStyle = { ...style };

  if (disabled) {
    return React.cloneElement(children, {
      className: currentClass,
      style: currentStyle,
    });
  }
  return React.cloneElement(children, {
    className: currentClass,
    style: currentStyle,
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    onMouseOver,
  });
};

export default Feedback;
