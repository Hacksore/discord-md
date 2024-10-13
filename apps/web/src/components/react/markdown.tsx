import { useEffect, useRef, useState } from "react";
import { toHTML } from "../../markdown.js";
import { decode } from "html-entities";

export function Markdown({
  value: initialValue,
  discordCallback = {},
  children = ""
}: {
  value?: string;
  discordCallback?: any;
  children?: any
}) {

  const valuePropOrChildren = initialValue ?? decode(children.props.value.trim());

  const [value, setValue] = useState(valuePropOrChildren);
  const previewRef = useRef<HTMLDivElement | null>(null);
  const [html, setHtml] = useState("");

  useEffect(() => {
    updateHTML(value, discordCallback);
  }, [value]);

  const updateHTML = (value: string, options: any) => {
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
  };

  return (
    <div className="grid grid-cols-2">
      <textarea
        value={value}
        onChange={handleChange}
        className="p-2 w-full bg-zinc-900"
      />
      <div className="flex bg-zinc-900">
        <div className="flex-grow p-2" ref={previewRef} dangerouslySetInnerHTML={{ __html: html }}></div>

        <div className="rounded-md h-6 text-xs bg-blue-900 font-bold p-1">
          Preview
        </div>
      </div>
    </div>
  );
}
