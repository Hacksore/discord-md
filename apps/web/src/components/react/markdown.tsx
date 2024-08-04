import { useRef, useState } from "react";
import { toHTML } from "../../markdown.js";

export function Markdown({
  value,
  discordCallback,
}: {
  value: string;
  discordCallback: any
}) {
  const inputRef = useRef<HTMLTextAreaElement | null> (null);
  const previewRef = useRef<HTMLDivElement | null> (null);
  const [html, setHtml] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("handling")
    setHtml(toHTML(e.target.value, { discordCallback }));
  };

  console.log(html)

  return (
    <div className="grid grid-cols-2">
      <textarea
        value={value}
        onChange={handleChange}
        className="p-2 w-full bg-zinc-900"
        ref={inputRef}
      />
      <div className="relative bg-zinc-900">
        <div className="absolute top-0 right-0 rounded-md text-xs bg-blue-700 p-1">
          Preview
        </div>
        <div ref={previewRef} dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
    </div>
  );
}
