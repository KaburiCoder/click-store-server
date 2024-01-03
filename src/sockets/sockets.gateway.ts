import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { SocketsService } from './sockets.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class SocketsGateway {
  constructor(private readonly socketsService: SocketsService) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`SocketIoGateway Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`SocketIoGateway Client disconnected: ${client.id}`);
  }

  // @SubscribeMessage('paymentStateUpdatedEvent')
  // paymentStateUpdated(@MessageBody() createEventDto: CreateEventDto) {
  //   this.server.emit('onOrders', { a: '123' });

  //   return this.eventsService.create(createEventDto);
  // }
}
