import React, { ReactNode, useState } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";

import javascript from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import shell from "react-syntax-highlighter/dist/esm/languages/hljs/shell";
import bash from "react-syntax-highlighter/dist/esm/languages/hljs/bash";
import htmlbars from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import html from "react-syntax-highlighter/dist/esm/languages/hljs/htmlbars";
import xml from "react-syntax-highlighter/dist/esm/languages/hljs/xml";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("shell", shell);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("htmlbars", htmlbars);
SyntaxHighlighter.registerLanguage("html", html);
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("css", css);

const Code = ({
  title,
  lang,
  children,
  codeOnly,
  linesToHighlight = [],
  startingLineNumber = 1,
  showNumber,
  isWrap,
  className
}) => {
  const [copy, setCopy] = useState(false);
  const codeString = React.Children.toArray(children).join("");

  return (
    <div className={`w-full relative ${className}`}>
      {/* {copy && ( */}

      <SyntaxHighlighter
        language={lang}
        style={atomOneDark}
        className={`hljs p-14px relative lh-1.6 ${codeOnly ? "br-0.225rem" : "radius-bottom-0.225rem"} `}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
