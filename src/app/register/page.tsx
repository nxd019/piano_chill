"use client"
import { Input } from "antd";
import { Controller, useForm } from "react-hook-form";

export const Register = () => {

    const { 
        register,
        handleSubmit, 
        formState: { errors },
        control 
      } = useForm({
        defaultValues: {
          name: '',
          userName: '',
          email: '',
          password: '',
          password2: '',
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
      <div className="w-full max-w-lg p-8 space-y-4 bg-opacity-100 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center">Đăng ký tài khoản</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-md font-medium">Họ và tên:</h1>
            <Controller
              control={control}
              name="name"
              rules={{
                required: 'name là bắt buộc',
                maxLength: {
                  value: 100,
                  message: 'Tên không được vượt quá 100 ký tự'
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Name(*)"
                  onBlur={onBlur}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      onChange(e);
                    }
                  }}
                  maxLength={100}
                  value={value}
                  status={errors.name ? 'error' : ''}
                  className="mt-1 block w-full py-2 px-3 text-md"
                />
              )}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div>
            <h1 className="text-md font-medium">Tên đăng nhập:</h1>
            <Controller
              control={control}
              name="userName"
              rules={{
                required: 'Tên đăng nhập là bắt buộc',
                maxLength: {
                  value: 100,
                  message: 'Tên đăng nhập không được vượt quá 100 ký tự'
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="userName(*)"
                  onBlur={onBlur}
                  onChange={(e) => {
                    if (e.target.value.length <= 100) {
                      onChange(e);
                    }
                  }}
                  maxLength={100}
                  value={value}
                  status={errors.userName ? 'error' : ''}
                  className="mt-1 block w-full py-2 px-3 text-md"
                />
              )}
            />
            {errors.userName && <span className="text-red-500">{errors.userName.message}</span>}
          </div>
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
            <h1 className="text-md font-medium">Mật khẩu:</h1>
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
          <div>
            <h1 className="text-md font-medium">Nhập lại mật khẩu:</h1>
            <Controller
              control={control}
              name="password2"
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
                  status={errors.password2 ? 'error' : ''}
                  className="mt-1 block w-full py-2 px-3 text-md"
                />
              )}
            />
            {errors.password2 && <span className="text-red-500">{errors.password2.message}</span>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-md font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Ghi Danh
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Register;
