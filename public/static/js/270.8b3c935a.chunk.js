(this["webpackJsonpproject3-app"]=this["webpackJsonpproject3-app"]||[]).push([[270],{364:function(e,a){!function(e){var a=/\{[^\r\n\[\]{}]*\}/,n={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:a,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function t(e){return"string"===typeof e?e:Array.isArray(e)?e.map(t).join(""):t(e.content)}e.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:a,greedy:!0,alias:"selector"},"command-params":{pattern:/[\s\S]*\S[\s\S]*/,inside:n}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:a,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w+[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:n},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},e.languages.nani=e.languages.naniscript,e.hooks.add("after-tokenize",(function(e){e.tokens.forEach((function(e){if("string"!==typeof e&&"generic-text"===e.type){var a=t(e);(function(e){for(var a="[]{}",n=[],t=0;t<e.length;t++){var r=e[t],i=a.indexOf(r);if(-1!==i)if(i%2===0)n.push(i+1);else if(n.pop()!==i)return!1}return 0===n.length})(a)||(e.type="bad-line",e.content=a)}}))}))}(Prism)}}]);
//# sourceMappingURL=270.8b3c935a.chunk.js.map