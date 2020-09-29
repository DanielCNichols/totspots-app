import React from 'react';
import AutoComplete from 'react-google-autocomplete';
import cx from 'classnames';
import s from '../sass/components/Form.module.scss';
import config from '../config';

export function Fieldset({className, ...props}) {
  return <fieldset className={cx(`${s.Fieldset}`, className)} {...props} />;
}

export function Legend({className, ...props}) {
  return <legend className={cx(`${s.Legend}`, className)} {...props} />;
}

export function FormElement({className, ...props}) {
  return <div className={cx(`${s.FormElement}`, className)} {...props} />;
}

export function Label({className, ...props}) {
  return <label className={cx(`${s.Label}`, className)} {...props} />;
}

export function Input({className, ...props}) {
  return <input className={cx(`${s.Input}`, className)} {...props} />;
}

export function Textarea({className, ...props}) {
  return <textarea className={cx(`${s.Textarea}`, className)} {...props} />;
}

export function Select({className, ...props}) {
  return <select className={cx(`${s.Select}`, className)} {...props} />;
}

export function Searchbox({className, ...props}) {
  return (
    <AutoComplete
      className={cx(`${s.Select}`, className)}
      apiKey={config.GKEY}
      {...props}
    />
  );
}

export function Button({className, ...props}) {
  return <button className={cx(`${s.Button}`, className)} {...props} />;
}
