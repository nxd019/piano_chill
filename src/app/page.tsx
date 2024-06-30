"use client"
import { useForm, Controller } from 'react-hook-form';
import { Input } from 'antd';
import Link from 'next/link';
import { GoogleOutlined } from '@ant-design/icons';

export default function LoginForm() {
  const { 
    register,
    handleSubmit, 
    formState: { errors },
    control 
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div 
      className="flex items-center justify-center min-h-screen"
      style={{ 
        backgroundImage: `url('/banner.png')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="w-full max-w-md p-8 space-y-4 bg-opacity-100 rounded-xl shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center">Chào mừng đến với Chill Production</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-md font-medium">Email:</h1>
            <Controller
              control={control}
              name="email"
              rules={{
                required: 'Email là bắt buộc',
                maxLength: {
                  value: 100,
                  message: 'Email không được vượt quá 100 ký tự'
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Email(*)"
                  onBlur={onBlur}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      onChange(e);
                    }
                  }}
                  maxLength={100}
                  value={value}
                  status={errors.email ? 'error' : ''}
                  className="mt-1 block w-full py-2 px-3 text-md"
                />
              )}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div>
            <h1 className="text-md font-medium">Password:</h1>
            <Controller
              control={control}
              name="password"
              rules={{
                required: 'Password là bắt buộc',
                maxLength: {
                  value: 100,
                  message: 'Password không được vượt quá 100 ký tự'
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Password(*)"
                  onBlur={onBlur}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      onChange(e);
                    }
                  }}
                  maxLength={100}
                  value={value}
                  status={errors.password ? 'error' : ''}
                  className="mt-1 block w-full py-2 px-3 text-md"
                />
              )}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="space-y-2">
            <button
              type="submit"
              className="w-full px-4 py-2 text-md font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Đăng nhập
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 text-md font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <GoogleOutlined className="mr-2" />
              Đăng nhập với Google
            </button>
            <div className='w-full flex justify-center mt-4'>
              <p>Bạn chưa có tài khoản?</p>
              <Link className='text-sky-900 ml-2 text-md' href="/register">Đăng ký ngay</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
