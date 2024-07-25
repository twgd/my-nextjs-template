import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/modeToggle'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-24">
      <div className="flex justify-between">
        <Button>Click me</Button>
        <ModeToggle />
      </div>
      <div className="mt-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Joke Tax Chronicles
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging
          on his throne. One day, his advisors came to him with a problem: the kingdom was running
          out of money.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The Plan
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king thought long and hard, and finally came up with{' '}
          <a href="#" className="font-medium text-primary underline underline-offset-4">
            a brilliant plan
          </a>
          : he would tax the jokes in the kingdom.
        </p>
      </div>
    </div>
  )
}
