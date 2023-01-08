import axios from 'axios';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import jwt from 'jsonwebtoken';
import useSWR from 'swr';

import { Message, WithId } from '@/backend/types';
import { useAuth } from '@/hooks';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

type MessageProps = Message;

const Message = ({ author, text, timestamp }: MessageProps) => {
  const auth = useAuth();

  return (
    <div
      className={clsx('rounded bg-zinc-800 p-2 w-fit text-white', {
        'ml-auto': auth.jwt && author.id === (jwt.decode(auth.jwt) as any).id,
      })}
    >
      <div>From: {author.name}</div>
      <div>{text}</div>
      <div className="text-end">{format(timestamp, 'HH:mm:ss')}</div>
    </div>
  );
};

const Chat = () => {
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: (values, props) => {
      axios
        .post('/api/chat/add', {
          text: values.message,
          token: auth.jwt,
        })
        .then(() => {
          props.resetForm();
        });
    },
  });
  const { data } = useSWR<{ messages: WithId<Message>[] }>('/api/chat/get', fetcher, {
    refreshInterval: 1000,
  });

  return (
    <div className="p-4 min-h-screen relative flex flex-col">
      <h1 className="fixed top-0 left-0 p-4 w-full text-3xl text-white bg-zinc-900">Chat</h1>
      <div className="pt-14 pb-14 min-h-full flex justify-end flex-col flex-grow">
        <div className="pt-4 flex flex-col gap-2 overflow-y-scroll">
          {data?.messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </div>
        <div className="p-2 bg-zinc-800 fixed bottom-0 left-0 w-full">
          <form onSubmit={formik.handleSubmit} className="flex justify-between gap-2">
            <input
              className="p-2 bg-zinc-700 rounded text-white w-full"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
            <button className="p-2 bg-zinc-700 rounded text-white" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
