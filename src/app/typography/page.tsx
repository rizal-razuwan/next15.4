import { Separator } from "@/components/ui/shadcn-components/separator";

export default function Page() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center">
      <div className="flex flex-col text-center min-h-screen justify-center gap-8 py-4">
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance border-b pb-2 border-gray-800">
          Shadcn Typography Examples
        </h1>
        <Separator className="my-4" />
        {/* H1 */}
        <b>H1</b>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
          Taxing Laughter: The Joke Tax Chronicles
        </h1>
        {/* H2 */}
        <b>H2</b>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          The People of the Kingdom
        </h2>
        {/* H3 */}
        <b>H3</b>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          The Joke Tax
        </h3>
        {/* H4 */}
        <b>H4</b>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          People stopped telling jokes
        </h4>
        {/* p */}
        <b>p</b>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
        {/* blockquoute */}
        <b>blockquoute</b>
        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
          it&apos;s only fair that they should pay for the privilege.&quot;
        </blockquote>
        {/* table */}
        <b>table</b>
        <div className="my-6 w-full overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="even:bg-muted m-0 border-t p-0">
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  King's Treasury
                </th>
                <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  People's happiness
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-muted m-0 border-t p-0">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Empty
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Overflowing
                </td>
              </tr>
              <tr className="even:bg-muted m-0 border-t p-0">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Modest
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Satisfied
                </td>
              </tr>
              <tr className="even:bg-muted m-0 border-t p-0">
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Full
                </td>
                <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                  Ecstatic
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* list */}
        <b>list</b>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          <li>1st level of puns: 5 gold coins</li>
          <li>2nd level of jokes: 10 gold coins</li>
          <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
        {/* inline code */}
        <b>inline code</b>
        <div className="">
          <code className="bg-muted  relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            @radix-ui/react-alert-dialog
          </code>
        </div>
        {/* lead */}
        <b>lead</b>
        <p className="text-muted-foreground text-xl">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
        {/* large */}
        <b>large</b>
        <div className="text-lg font-semibold">Are you absolutely sure?</div>
        {/* small */}
        <b>small</b>
        <small className="text-sm leading-none font-medium">
          Email address
        </small>

        {/* muted */}
        <b>muted</b>
        <p className="text-muted-foreground text-sm">
          Enter your email address.
        </p>
      </div>
    </div>
  );
}
