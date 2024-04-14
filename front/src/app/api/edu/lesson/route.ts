import {
    getAllItems,
    getItemById,
    getItemsByAttribute,
} from "@/lib/firebase/firestore";

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);

    const all = searchParams.get("all") || "";
    if (all === "true") {
        const lessons = await getAllItems("lessons");
        return Response.json(lessons);
    }

    const id = searchParams.get("id") || "";
    const lesson = await getItemById("lessons", id);
    if (lesson) {
        return Response.json(lesson);
    }

    return new Response("Nor found!", { status: 404 });
}

export async function PUT(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);

    const courseId = searchParams.get("courseId") || "";
    try {
        if (courseId) {
            const lessons = await getItemsByAttribute(
                "lessons",
                "courseId",
                courseId
            );
            return Response.json(lessons);
        }
    } catch (error) {}

    return Response.json([]);
}
