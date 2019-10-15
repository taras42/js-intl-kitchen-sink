import React from 'react';

const copyToClipBoard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

const Clipboard = props => {
  return (
    <div onClick={() => copyToClipBoard(props.onCopy())}>{props.children}</div>
  );
};

export default Clipboard;
