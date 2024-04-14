"use client";
import { register } from "@/api/auth";
import { useLanguage } from "@/context/LanguageContext";
import { RegisterDTO } from "@/types/api";
import { RegisterData } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

// const validationSchema = Yup.object().shape({});

export const useRegister = () => {
    const router = useRouter();

    const { message } = App.useApp();
    const { getHref } = useLanguage();

    const mutation = useMutation({
        mutationFn: register,
        onSuccess() {
            message.success("Success!");
            router.push(getHref("/auth/login"));
        },
        onError() {
            message.error("Error!");
        },
    });

    const handleSubmit = async () => {
        const registerDTO: RegisterDTO = {
            first_name: formik.values.first_name,
            last_name: formik.values.last_name,
            email: formik.values.email,
            password: formik.values.password,
            profile: {
                address: formik.values.profile.address,
                phone_number: formik.values.profile.phone_number,
            },
        };
        await mutation.mutateAsync(registerDTO);
    };

    const formik = useFormik<RegisterData>({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            repeatPassword: "",
            profile: { address: "", phone_number: "" },
        },
        // validationSchema: validationSchema,
        // validateOnBlur: true,
        // validateOnChange: false,
        onSubmit: handleSubmit,
    });
    return { formik, mutation };
};
