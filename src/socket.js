import io from 'socket.io-client';
const sockets = io('https://server-3wl8.onrender.com', { autoConnect: true, forceNew: true });
// const sockets = io('/');
export default sockets;
