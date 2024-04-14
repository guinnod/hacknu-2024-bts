"use client";
import { login } from "@/api/auth";
import { useAuthContext } from "@/context/AuthContext";
import { useLanguage } from "@/context/LanguageContext";
import jwtService from "@/lib/jwt";
import { LoginDTO } from "@/types/api";
import { requiredStringSchema } from "@/utils/form.util";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    username: requiredStringSchema(),
    password: requiredStringSchema(),
});

export const useLogin = () => {
    const router = useRouter();

    const { message } = App.useApp();
    const { getHref } = useLanguage();
    const { setIsAuth } = useAuthContext();
    const mutation = useMutation({
        mutationFn: login,
        onSuccess(data) {
            const jwtToken = data;
            jwtService.saveJwt(jwtToken);
            message.success("Success!");
            setIsAuth(true);
            router.push(getHref("/home"));
        },
        onError() {
            message.error("Error!");
        },
    });

    const handleSubmit = async () => {
        await mutation.mutateAsync(formik.values);
    };

    const formik = useFormik<LoginDTO>({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: handleSubmit,
    });
    return { formik, mutation };
};
