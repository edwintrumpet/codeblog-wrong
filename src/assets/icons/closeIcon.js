import * as React from 'react';
import PropTypes from 'prop-types';

function CloseIcon(props) {
  const { color } = props;
  return (
    <svg width={40} height={40} viewBox="0 0 40 40" {...props}>
      <path data-name="Rect\xE1ngulo 80" fill="none" d="M0 0h40v40H0z" />
      <g data-name="Trazado 28" fill={color}>
        <path d="M22.857 20z" />
        <path d="M17.143 20h5.714-5.714z" fill="#707070" />
      </g>
      <g data-name="Grupo 12" transform="translate(7.619 7.619)" fill={color}>
        <path
          data-name="Sustracci\xF3n 3"
          d="M12.381 24.762A12.384 12.384 0 017.562.973 12.384 12.384 0 0117.2 23.789a12.3 12.3 0 01-4.819.973zm0-22.857A10.479 10.479 0 008.3 22.034a10.48 10.48 0 008.159-19.306 10.411 10.411 0 00-4.078-.828z"
        />
        <rect
          data-name="Rect\xE1ngulo 79"
          width={1.905}
          height={15.238}
          rx={0.952}
          transform="rotate(45 .842 23.982)"
        />
        <rect
          data-name="Rect\xE1ngulo 78"
          width={1.905}
          height={15.238}
          rx={0.952}
          transform="rotate(-45 12.6 -3.873)"
        />
      </g>
    </svg>
  );
}

CloseIcon.propTypes = {
  color: PropTypes.string,
};

CloseIcon.defaultProps = {
  color: '#5C5B62',
};

export default CloseIcon;
