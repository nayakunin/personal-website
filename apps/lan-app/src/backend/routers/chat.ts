import { observable } from '@trpc/server/observable';
import { EventEmitter } from 'events';
import { z } from 'zod';

import { database } from '../database';
import { protectedProcedure, router } from '../trpc';
import { Message, WithId } from '../types';

const ee = new EventEmitter();

export const chat = router({
  onAdd: protectedProcedure.subscription(() => {
    return observable<WithId<Message>>((emit) => {
      const onAdd = (data: WithId<Message>) => {
        emit.next(data);
      };
      
      ee.on('add', onAdd);

      return () => {
        ee.off('add', onAdd);
      };
    });
  }),
  add: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      const message: WithId<Message> = {
        id: crypto.randomUUID(),
        text: input.text,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        author: ctx.user,
        timestamp: Date.now(),
      };

      database.chat.push(message);

      ee.emit('add', message);

      return;
    }),
});
