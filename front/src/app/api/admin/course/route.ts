import { saveItem } from "@/lib/firebase/firestore";

export async function POST(req: Request, res: Response) {
    const body = await req.json();

    const courseId = await saveItem("courses", body);

    if (courseId) {
        return new Response("Success!", { status: 200 });
    }
    return new Response("Bad request!", { status: 400 });
}
