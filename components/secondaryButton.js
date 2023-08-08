import React from 'react';

const SecondaryButton = ({ text, href, download }) => {
  const buttonProps = {
    className: "flex items-center justify-center rounded-md px-7 h-14 cursor-pointer py-2 border border-custom-blue-3 text-custom-blue-3 hover:bg-custom-dark-4 hover:bg-opacity-50"
  };

  if (href) {
    buttonProps.href = href;
  }

  if (download) {
    buttonProps.download = download;
  }

  return (
    <a {...buttonProps}>
      {text}
    </a>
  );
};

export default SecondaryButton;
