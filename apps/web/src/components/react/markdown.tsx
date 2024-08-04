import { useEffect, useRef, useState } from "react";
import { toHTML } from "../../markdown.js";

export function Markdown({
  value: initialValue,
  discordCallback = {},
}: {
  value: string;
  discordCallback: any;
}) {
  const [value, setValue] = useState(initialValue);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    updateHTML(value, discordCallback);
  }, []);

  const updateHTML = (value: string, options?: any) => {
    const discordCallback = Object.keys(options).reduce(
      (acc: any, key: string) => {
        acc[key] = () => options[key];
        return acc;
      },
      {},
    );

    const newHtml = toHTML(value, { discordCallback });
    setHtml(newHtml);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);

    const newHtml = toHTML(e.target.value, {
      discordCallback: {
        user: () => "@hacksore",
      },
    });
    setHtml(newHtml);
  };

  return (
    <div className="grid grid-cols-2">
      <textarea
        value={value}
        onChange={handleChange}
        className="p-2 w-full bg-zinc-900"
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
