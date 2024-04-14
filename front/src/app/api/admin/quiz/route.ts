import { saveItem } from "@/lib/firebase/firestore";

export async function POST(req: Request, res: Response) {
    const body = await req.json();

    const quizId = await saveItem("quizzes", body);

    if (quizId) {
        return new Response("Success!", { status: 200 });
    }
    return new Response("Bad request!", { status: 400 });
}
