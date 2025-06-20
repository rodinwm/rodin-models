import './scripts/load-env';
import {prismaClient} from "../src/backend";

async function test() {
    const users = await prismaClient.user.findMany();
    console.log(users);
}

test();