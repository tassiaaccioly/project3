(this["webpackJsonpproject3-app"]=this["webpackJsonpproject3-app"]||[]).push([[439],{533:function(e,n){!function(e){e.languages.velocity=e.languages.extend("markup",{});var n={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:true|false)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/};n.variable.inside={string:n.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:n.number,boolean:n.boolean,punctuation:n.punctuation},e.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?]]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|]]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,inside:{punctuation:/[{}]/}},rest:n}},variable:n.variable}),e.languages.velocity.tag.inside["attr-value"].inside.rest=e.languages.velocity}(Prism)}}]);
//# sourceMappingURL=439.c4c9142c.chunk.js.map