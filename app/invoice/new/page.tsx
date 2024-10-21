import {sql} from 'drizzle-orm';
import {db} from '@/db'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

  export default async function Home() {
    const results = await db.execute(sql`SELECT current_database()`)
    return (
      <main className="flex flex-col gap-6 h-full max-w-5xl mx-auto my-12 px-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Create Invoice</h1>
          <p>{JSON.stringify(results)}</p>
        </div>

        <form className="grid gap-4 max-w-xs">
            <div>
                <Label htmlFor="name" className="block font-semibold text-sm mb-2">Billing Name</Label>
                <Input name="name" id="name" type="text"/>
            </div>
            <div>
                <Label htmlFor="email" className="block font-semibold text-sm mb-2">Billing Email</Label>
                <Input name="email" id="email" type="email"/>
            </div>
            <div>
                <Label htmlFor="value" className="blockfont-semibold text-sm  mb-2">Value</Label>
                <Input name="value" id="value" type="text"/>
            </div>
            <div>
                <Label htmlFor="description" className="block font-semibold text-sm mb-2">Description</Label>
                <Textarea id="description" name="description" />
            </div>
            <div>
            <Button className="w-full font-semibold">Submit</Button>
            </div>
        </form>
        
      </main>
    );
  }
  