import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

const ScrollTop = ({ children }) => {
  const location = useRouter();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return children || null;
};

ScrollTop.propTypes = {
  children: PropTypes.node
};

export default ScrollTop;
