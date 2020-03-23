import * as React from 'react';
import PropTypes from 'prop-types';

function MenuIcon(props) {
  const { size, color } = props;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" {...props}>
      <path data-name="Rect\xE1ngulo 44" fill="none" d="M0 0h40v40H0z" />
      <rect
        data-name="Rect\xE1ngulo 48"
        width={19.048}
        height={1.905}
        rx={0.952}
        transform="translate(15.238 19.048)"
        fill={color}
      />
      <rect
        data-name="Rect\xE1ngulo 49"
        width={5.714}
        height={1.905}
        rx={0.952}
        transform="translate(5.714 19.048)"
        fill={color}
      />
      <rect
        data-name="Rect\xE1ngulo 50"
        width={28.571}
        height={1.905}
        rx={0.952}
        transform="translate(5.714 26.667)"
        fill={color}
      />
      <rect
        data-name="Rect\xE1ngulo 47"
        width={28.571}
        height={1.905}
        rx={0.952}
        transform="translate(5.714 11.429)"
        fill={color}
      />
    </svg>
  );
}

MenuIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

MenuIcon.defaultProps = {
  size: 40,
  color: '#CECDCF',
};

export default MenuIcon;
