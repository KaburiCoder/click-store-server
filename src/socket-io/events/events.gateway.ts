import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventsGateway {
  constructor(private readonly eventsService: EventsService) {}

  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`SocketIoGateway Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`SocketIoGateway Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('createEvent')
  create(@MessageBody() createEventDto: CreateEventDto) {
    this.server.emit('onOrders', { a: '123' });

    return this.eventsService.create(createEventDto);
  }

  // @SubscribeMessage('findAllEvents')
  // findAll() {
  //   return this.eventsService.findAll();
  // }

  // @SubscribeMessage('findOneEvent')
  // findOne(@MessageBody() id: number) {
  //   return this.eventsService.findOne(id);
  // }

  // @SubscribeMessage('updateEvent')
  // update(@MessageBody() updateEventDto: UpdateEventDto) {
  //   return this.eventsService.update(updateEventDto.id, updateEventDto);
  // }

  // @SubscribeMessage('removeEvent')
  // remove(@MessageBody() id: number) {
  //   return this.eventsService.remove(id);
  // }
}
