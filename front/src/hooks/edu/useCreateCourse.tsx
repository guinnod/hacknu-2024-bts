"use client";
import { axiosShared } from "@/lib/axios";
import { CourseDetailsType } from "@/types/edu";
import { requiredNumberSchema, requiredStringSchema } from "@/utils/form.util";
import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    title: requiredStringSchema(),
    photoUrl: requiredStringSchema(),
    level: requiredStringSchema(),
    duringInHours: requiredNumberSchema().min(1),
    description: requiredStringSchema(),
    skills: Yup.array().of(Yup.string()).required(),
    goals: Yup.array().of(Yup.string()).required(),
});

export const useCreateCourse = () => {
    const router = useRouter();

    const { message } = App.useApp();

    const mutation = useMutation({
        mutationFn: async (value: CourseDetailsType) => {
            const { data } = await axiosShared.post("/api/admin/course", value);
            return data;
        },
        onSuccess() {
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

    const formik = useFormik<CourseDetailsType>({
        initialValues: {
            title: "",
            photoUrl:
                "https://img.freepik.com/free-psd/3d-illustration-people-with-gadget-use-highspeed-internet_1150-65899.jpg?size=626&ext=jpg",
            level: "beginner",
            duringInHours: 0,
            description: "",
            skills: [],
            goals: [],
        },
        validationSchema: validationSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: handleSubmit,
    });
    return { formik, mutation };
};
