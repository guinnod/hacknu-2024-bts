"use client";
import { compensationSend } from "@/api/chat";
import { useLanguage } from "@/context/LanguageContext";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
interface FormValues {
    id: number;
    statement: string;
    iin: string;
    policy_number: string;
    medical_documents: string;
    status: string;
    content: string; // Add the 'content' property
}
const validationSchema = Yup.object().shape({
    statement: Yup.string().required("Required"),
    iin: Yup.string().required("Required"),
    policy_number: Yup.string().required("Required"),
    medical_documents: Yup.string().url("Invalid URL").required("Required"),
    // status: Yup.string().required("Required"),
});

export const useFormInfo = () => {
    const router = useRouter();

    const { message } = App.useApp();
    const { getHref } = useLanguage();

    const mutation = useMutation({
        mutationFn: compensationSend,
        onSuccess(data) {},
        onError() {
            message.error("Error!");
        },
    });

    const handleSubmit = async () => {
        await mutation.mutateAsync(formik.values);
    };

    const formik = useFormik<FormValues>({
        initialValues: {
            id: 1,
            statement: "",
            iin: "",
            policy_number: "",
            medical_documents: "",
            status: "",
            content: "", // Add the 'content' property
        },
        // validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: handleSubmit,
    });
    return { formik, mutation };
};
