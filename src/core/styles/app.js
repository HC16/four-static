export default {
  navbar: {
    base: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 50,
      width: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
    },
    brand: {
      fontWeight: 700,
      margin: 'auto 20px',
    },
  },
  content: {
    width: '100%',
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
