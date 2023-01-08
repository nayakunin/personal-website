import axios from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks';

const Auth = () => {
  const router = useRouter();
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      axios
        .post<{ token: string }>('/api/auth/sign-in', {
          name: values.name,
        })
        .then((response) => {
          auth.setJwt(response.data.token);
          router.push('/chat');
        });
    },
  });

  return (
    <div className="p-4 min-h-screen flex flex-col">
      <h1 className="text-3xl text-white">Auth</h1>
      <div className="pt-2 min-h-full grid items-center flex-grow">
        <form onSubmit={formik.handleSubmit} className="flex flex-col items-center gap-2">
          <input
            className="p-2 bg-zinc-700 rounded text-white"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <button className="p-2 bg-zinc-700 rounded text-white w-1/2" type="submit">
            auth
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
