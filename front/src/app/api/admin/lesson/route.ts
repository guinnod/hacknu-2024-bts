import { saveItem } from "@/lib/firebase/firestore";

export async function POST(req: Request, res: Response) {
    const body = await req.json();

    const lessonId = await saveItem("lessons", body);

    if (lessonId) {
        return Response.json({ lessonId });
    }
    return new Response("Bad request!", { status: 400 });
}
