import React from 'react';
import AriaModal from 'react-aria-modal';

export default function Modal(props) {
  return <AriaModal titleText={props.titleText}>{props.children}</AriaModal>;
}
