import io from 'socket.io-client';

let socket;

export default () => {
  if (!socket || !socket.connected) {
    socket = io.connect('http://localhost:3001');
  }

  return socket;
}
