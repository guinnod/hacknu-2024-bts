import { getAllItems, getItemById } from "@/lib/firebase/firestore";

export async function GET(req: Request, res: Response) {
    const { searchParams } = new URL(req.url);

    const all = searchParams.get("all") || "";
    if (all === "true") {
        const courses = await getAllItems("courses");
        return Response.json(courses);
    }

    const id = searchParams.get("id") || "";
    const course = await getItemById("courses", id);
    if (course) {
        return Response.json(course);
    }

    return new Response("Nor found!", { status: 404 });
}
