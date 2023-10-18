import prisma from "@/prisma/prisma";
export default async function getbookmarks() {
    const id = '48c04d8e-9f52-4ba1-8549-d4655917ff0e'
    const bookmarks = await prisma.$queryRaw`SELECT DISTINCT tweets.*
    FROM tweets
    JOIN bookmarks ON tweets.id = bookmarks.tweet_id
    WHERE bookmarks.user_id = ${id}::uuid;
    `
    console.log("therse",bookmarks)
    return bookmarks;
}