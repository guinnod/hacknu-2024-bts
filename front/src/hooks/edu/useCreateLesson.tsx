"use client";
import { axiosShared } from "@/lib/axios";
import { LessonType } from "@/types/edu";
import { requiredStringSchema } from "@/utils/form.util";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: requiredStringSchema(),
});

export const useCreateLesson = (courseId: string) => {
    const router = useRouter();

    const { message } = App.useApp();

    const mutation = useMutation({
        mutationFn: async (value: LessonType) => {
            const { data } = await axiosShared.post<{ lessonId: string }>(
                "/api/admin/lesson",
                { ...value, courseId }
            );
            return data;
        },
        onSuccess(data) {
            message.success("Success!");
            router.push("/en/admin/");
        },
        onError() {
            message.error("Error!");
        },
    });

    const handleSubmit = async () => {
        await mutation.mutateAsync(formik.values);
    };

    const formik = useFormik<LessonType>({
        initialValues: {
            title: "",
            lessonContents: [
                {
                    title: "Example title",
                    photoUrl:
                        "https://img.freepik.com/free-psd/3d-illustration-people-with-gadget-use-highspeed-internet_1150-65899.jpg?size=626&ext=jpg",
                },
            ],
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: handleSubmit,
    });
    return { formik, mutation };
};
