import './scripts/load-env';
import {prisma} from "../src";

async function test() {
    const users = await prisma.user.findMany();
    console.log(users);
}

test();