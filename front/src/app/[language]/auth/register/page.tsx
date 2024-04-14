"use client";
import { Logo } from "@/components/shared/Logo";
import { useLanguage } from "@/context/LanguageContext";
import { useRegister } from "@/hooks/auth/useRegister";
import { Switch } from "@headlessui/react";

import Link from "next/link";
import { useState } from "react";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
export default function RegisterPage() {
    const { formik } = useRegister();
    const { getHref } = useLanguage();
    const [agreed, setAgreed] = useState(false);

    return (
        <div
            className="
         bg-white px-6 py-10 sm:py-12 lg:px-8 flex flex-col items-center justify-center"
        >
            <Logo />

            <form
                onSubmit={formik.handleSubmit}
                className="mx-auto mt-8 max-w-xl sm:mt-10"
            >
                <h2 className="text-2xl flex gap-4 text-primary uppercase font-medium pb-6">
                    Персональная информация
                </h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="first-name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Имя
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={formik.values.first_name}
                                onChange={formik.handleChange}
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="last_name"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Фамилия
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={formik.values.last_name}
                                onChange={formik.handleChange}
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="family-name"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Почта
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="company"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Пароль
                        </label>
                        <div className="mt-2.5">
                            <input
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                name="password"
                                id="password"
                                autoComplete="password"
                                type="password"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label
                            htmlFor="phone_number"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Номер телефона
                        </label>
                        <div className="relative mt-2.5">
                            <input
                                value={formik.values.profile.phone_number}
                                onChange={formik.handleChange}
                                type="tel"
                                name="profile.phone_number"
                                id="phone_number"
                                autoComplete="tel"
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label
                            htmlFor="address"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                            Адрес
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="profile.address"
                                id="address"
                                autoComplete="address"
                                value={formik.values.profile.address}
                                onChange={formik.handleChange}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <Switch.Group
                        as="div"
                        className="flex gap-x-4 sm:col-span-2"
                    >
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className={classNames(
                                    agreed ? "bg-indigo-600" : "bg-gray-200",
                                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                )}
                            >
                                <span className="sr-only">
                                    Согласие на обработку данных
                                </span>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        agreed
                                            ? "translate-x-3.5"
                                            : "translate-x-0",
                                        "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                                    )}
                                />
                            </Switch>
                        </div>
                        <Switch.Label className="text-sm leading-6 text-gray-600">
                            Выбирая это, вы соглашаетесь с нашими{" "}
                            <a
                                href="#"
                                className="font-semibold text-indigo-600"
                            >
                                Политика&nbsp;конфиденциальности
                            </a>
                            .
                        </Switch.Label>
                    </Switch.Group>
                    <Link
                        href={getHref("/auth/login")}
                        className="!p-0 !text-primary w-full text-sm leading-6"
                    >
                        У вас уже есть аккаунт? Войдите здесь
                    </Link>
                </div>

                <div className="mt-10">
                    <button
                        disabled={!agreed}
                        className={
                            "block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        }
                        type="submit"
                    >
                        Регистрация
                    </button>
                </div>
            </form>
        </div>
    );
}
