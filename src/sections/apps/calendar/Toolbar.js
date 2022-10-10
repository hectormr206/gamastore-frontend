import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useMediaQuery, Button, ButtonGroup, Grid, Stack, Tooltip, Typography } from '@mui/material';

// third-party
import { format } from 'date-fns';

// project import
import IconButton from 'components/@extended/IconButton';

// assets
import { AppstoreOutlined, LayoutOutlined, LeftOutlined, OrderedListOutlined, PicCenterOutlined, RightOutlined } from '@ant-design/icons';

// constant
const viewOptions = [
  {
    label: 'Month',
    value: 'dayGridMonth',
    icon: AppstoreOutlined
  },
  {
    label: 'Week',
    value: 'timeGridWeek',
    icon: LayoutOutlined
  },
  {
    label: 'Day',
    value: 'timeGridDay',
    icon: PicCenterOutlined
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: OrderedListOutlined
  }
];

// ==============================|| CALENDAR - TOOLBAR ||============================== //

const Toolbar = ({ date, view, onClickNext, onClickPrev, onClickToday, onChangeView, ...others }) => {
  const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [viewFilter, setViewFilter] = useState(viewOptions);

  useEffect(() => {
    if (matchDownSM) {
      const filter = viewOptions.filter((item) => item.value !== 'dayGridMonth' && item.value !== 'timeGridWeek');
      setViewFilter(filter);
    } else {
      setViewFilter(viewOptions);
    }
  }, [matchDownSM]);

  return (
    <Grid alignItems="center" container justifyContent="space-between" spacing={matchDownSM ? 1 : 3} {...others} sx={{ pb: 3 }}>
      <Grid item>
        <Button variant="outlined" onClick={onClickToday} size={matchDownSM ? 'small' : 'medium'}>
          Today
        </Button>
      </Grid>
      <Grid item>
        <Stack direction="row" alignItems="center" spacing={matchDownSM ? 1 : 3}>
          <IconButton onClick={onClickPrev} size={matchDownSM ? 'small' : 'large'}>
            <LeftOutlined />
          </IconButton>
          <Typography variant={matchDownSM ? 'h4' : 'h3'} color="textPrimary">
            {format(date, 'MMMM yyyy')}
          </Typography>
          <IconButton onClick={onClickNext} size={matchDownSM ? 'small' : 'large'}>
            <RightOutlined />
          </IconButton>
        </Stack>
      </Grid>
      <Grid>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {viewFilter.map((viewOption) => {
            const Icon = viewOption.icon;
            return (
              <Tooltip title={viewOption.label} key={viewOption.value}>
                <Button
                  disableElevation
                  size={matchDownSM ? 'small' : 'medium'}
                  variant={viewOption.value === view ? 'contained' : 'outlined'}
                  onClick={() => onChangeView(viewOption.value)}
                >
                  <Icon style={{ fontSize: '1.3rem' }} />
                </Button>
              </Tooltip>
            );
          })}
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

Toolbar.propTypes = {
  date: PropTypes.object,
  view: PropTypes.string,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
  onClickToday: PropTypes.func,
  onChangeView: PropTypes.func
};

export default Toolbar;