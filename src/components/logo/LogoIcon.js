// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * const logoIconDark = 'assets/images/logo-icon-dark.svg';
 * const logoIcon = 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <Image src={theme.palette.mode === 'dark' ? logoIconDark : logoIcon} alt="Mantis" width="129" height="129" />
     *
     */
    <svg width={35.419} height={32.018} viewBox="0 0 9.371 8.472" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-1.76 -.496)">
        <circle
          style={{
            fill: 'none',
            fillOpacity: 1,
            stroke: theme.palette.primary.dark,
            strokeWidth: 0.485386,
            strokeDasharray: 'none',
            strokeOpacity: 1
          }}
          cx={3.808}
          cy={7.911}
          r={0.791}
        />
        <circle
          style={{
            fill: 'none',
            fillOpacity: 1,
            stroke: theme.palette.primary.dark,
            strokeWidth: 0.485386,
            strokeDasharray: 'none',
            strokeOpacity: 1
          }}
          cx={7.215}
          cy={7.934}
          r={0.791}
        />
        <path
          style={{
            fill: theme.palette.primary.main,
            fillOpacity: 1,
            strokeWidth: 0.485385
          }}
          d="m3.24 6.166 4.593-.002s.157-.061.22-.124c.064-.063.14-.246.14-.246l.31-1.433-4.31-.014.752.77s.08.11-.031.231c-.111.122-.245.02-.245.02L3.574 4.284s-.048-.062-.051-.122c-.003-.06.044-.108.044-.108L4.66 2.969s.127-.122.262.008c.136.13.004.264.004.264l-.705.733 4.37-.011L9.259.89s.011-.075.163-.23c.151-.155.287-.163.287-.163l1.32-.001s.107-.007.103.18c-.005.187-.111.19-.111.19L9.824.866s-.05.001-.123.058-.088.095-.088.095L8.584 5.841s-.026.259-.25.478c-.225.22-.464.23-.464.23H3.177s-.221-.044-.373-.173c-.151-.128-.285-.385-.285-.385l-.752-3.526s-.053-.184.124-.444c.176-.26.433-.267.433-.267l4.977.002-.736-.75s-.066-.131.015-.23c.08-.1.237-.048.237-.048L7.874 1.78s.112.054.106.168c-.006.115-.12.176-.12.176L6.85 3.152s-.126.08-.256-.03c-.129-.11-.038-.243-.038-.243l.728-.739-4.846-.006s-.126-.021-.223.095c-.098.117-.063.213-.063.213l.732 3.4s.029.093.126.194c.097.1.231.13.231.13z"
        />
      </g>
    </svg>
  );
};

export default LogoIcon;
