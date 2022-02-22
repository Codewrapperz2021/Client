import io from 'socket.io-client';
const sockets = io('hhttps://master.d2p32jz8cu0did.amplifyapp.com', { autoConnect: true, forceNew: true });
// const sockets = io('/');
export default sockets;
