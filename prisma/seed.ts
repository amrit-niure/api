import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.createMany({
        data: [
            { name: 'Amrit' },
            { name: 'John' },
            { name: 'Jane' },
        ],
    });

    console.log(`${users.count} users created.`);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
