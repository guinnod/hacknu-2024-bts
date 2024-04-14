"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useLogin } from "@/hooks/auth/useLogin";
import Link from "next/link";
export default function LoginPage() {
    const { formik, mutation } = useLogin();
    const { getHref } = useLanguage();

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
            {/* <Logo /> */}
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Войти в аккаунт
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Почта
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                type="username"
                                autoComplete="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                required
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Пароль
                            </label>
                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Забыли пароль?
                                </a>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={mutation.isPending}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Войти
                        </button>
                    </div>
                </form>
                {/* <Link className="!p-0 !text-primary w-full"></Link> */}
                <p className="mt-10 text-center text-sm text-gray-500">
                    У меня нет аккаунта{" "}
                    <Link
                        href={getHref("/auth/register")}
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Регистрация
                    </Link>
                </p>
                <p className="mt-10 text-center text-sm text-gray-500">
                    <Link
                        href={"#"}
                        onClick={() => {
                            formik
                                .setValues({
                                    username: "erlandzhumabaev@gmail.com",
                                    password: "12345678",
                                })
                                .then(() => {
                                    formik.submitForm();
                                });
                        }}
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Войти как тестовый пользователь
                    </Link>
                </p>
            </div>
        </div>
    );

    // <main className="flex flex-col h-screen justify-center gap-10 items-center px-5">
    //     <Logo />
    //     <div className="w-full max-w-xs sm:max-w-sm">
    //         <Form
    //             onFinish={formik.submitForm}
    //             className="flex flex-col items-center gap-2 w-full px-10"
    //         >
    //             <FormikInput
    //                 name="email"
    //                 formik={formik}
    //                 formItemProps={{ className: clsx("w-full") }}
    //                 inputProps={{
    //                     placeholder: "Email",
    //                     size: "large",
    //                 }}
    //             />

    //             <FormikPasswordInput
    //                 name="password"
    //                 formik={formik}
    //                 formItemProps={{ className: clsx("w-full") }}
    //                 inputProps={{
    //                     placeholder: "Password",
    //                     size: "large",
    //                     type: "password",
    //                 }}
    //             />
    //             <Form.Item className="w-full">
    //                 <Button
    //                     htmlType="submit"
    //                     type="primary"
    //                     size={"large"}
    //                     loading={mutation.isPending}
    //                     className={clsx("w-full")}
    //                 >
    //                     Sign in
    //                 </Button>
    //             </Form.Item>

    //             <Link
    //                 href={getHref("/auth/register")}
    //                 className="!p-0 !text-primary w-full"
    //             >
    //                 Don&apos;t have an account? Register here
    //             </Link>
    //         </Form>
    //     </div>
    // </main>
}
