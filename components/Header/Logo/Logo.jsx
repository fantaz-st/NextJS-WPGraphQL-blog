import React from 'react';
import Image from 'next/image';

import websiteLogo from '../../../assets/images/fantaz.png';

// eslint-disable-next-line react/display-name
const Logo = React.forwardRef(({ href, websiteName }, ref) => {
  return (
    <a href={href}>
      <Image src={websiteLogo} alt={websiteName} width="170px" height="43px" />
    </a>
  );
});

export default Logo;
