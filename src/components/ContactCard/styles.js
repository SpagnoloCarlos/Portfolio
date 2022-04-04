const styles = {
  card: {
    width: {xs: '90%', sm: '90%', md: '70%', lg: '60%', xl: '55%'},
    m: 4,
    borderRadius: '1em',
    boxShadow: '0px 0px 10px 2px rgba(54,54,54,0.65)',
    bgcolor: '#161b22',
  },
  cardContent: {
    display: 'flex',
    flexDirection: {xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row'},
    justifyContent: 'space-between',
    alignItems: 'center',
    p: 2,
  },
  box_img: {
    background:
      'transparent url("https://res.cloudinary.com/dw4hak4ok/image/upload/v1648577150/Fading_lines_ozdef7.gif") center no-repeat',
    height: '350px',
  },
  cardMedia: {
    width: '350px',
    borderRadius: '1em',
    mr: '1em',
    flex: 1,
  },
  cardContent_testimonyData: {
    flex: 2,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '1em',
    bgcolor: '#ebebebbd',
  },
  iconButton: {
    'margin': 3,
    'width': '80%',
    'border': '2px solid black',
    'bgcolor': '#1d5e65',
    'color': '#161b22',
    'borderRadius': '0.4em',
    '&:hover': {
      bgcolor: '#43919B',
      color: 'black',
      border: '2px solid black',
    },
  },
  iconButtonLinkedin: {
    'margin': 0,
    'width': '80%',
    'border': '2px solid black',
    'bgcolor': '#1C658C',
    'color': '#161b22',
    'borderRadius': '0.4em',
    '&:hover': {
      bgcolor: '#398AB9',
      color: 'black',
      border: '2px solid black',
    },
  },
};

export default styles;
