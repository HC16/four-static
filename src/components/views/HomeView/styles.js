export default {
  base: {
    background: 'linear-gradient(to bottom, #222, #CB4335)',
    flex: 1,
    width: '100%',
    margin: 0,
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  init_input: {
    outline: 'none',
    border: '1px solid #eee',
    padding: 10,
    boxSizing: 'border-box',
    fontSize: '1em',
  },
  firechain: {
    color: '#fff',
    textTransform: 'capitalize',
    letterSpacing: 3,
    fontSize: '2em',
    margin: 'auto auto 20px',
  },
  tagline: {
    color: '#aaa',
    letterSpacing: 1,
    fontSize: '1.5em',
    fontWeight: 300,
    margin: '0 auto 20px',
  },
  action_button: {
    margin: '20px auto auto',
    background: '#222',
    color: '#ccc',
    padding: '15px 20px',
    letterSpacing: 1,
    boxSizing: 'border-box',
    borderRadius: 3,
    textTransform: 'uppercase',
    fontWeight: 400,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    cursor: 'pointer',
  }
};
