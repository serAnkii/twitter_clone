import prisma from "@/prisma/prisma";
import { getuserdata } from "@/utility/helpers";
export default async function getbookmarks() {
    const {uid} = await getuserdata()
    const bookmarks = await prisma.$queryRaw`SELECT DISTINCT tweets.*
    FROM tweets
    JOIN bookmarks ON tweets.id = bookmarks.tweet_id
    WHERE bookmarks.user_id = ${uid}::uuid;
    `
    
    
    return bookmarks;
}