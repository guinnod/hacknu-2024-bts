import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
    try {
        const data: RevalidatePostBody = await request.json();
        const { tag } = data;
        revalidateTag(tag);
        return Response.json({ message: "ok" });
    } catch (error) {
        return new Response(JSON.stringify({ message: "Error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

interface RevalidatePostBody {
    tag: string;
}
