(this["webpackJsonpproject3-app"]=this["webpackJsonpproject3-app"]||[]).push([[110],{204:function(a,e){!function(a){a.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:a.languages.javascript}},a.hooks.add("before-tokenize",(function(e){a.languages["markup-templating"].buildPlaceholders(e,"ejs",/<%(?!%)[\s\S]+?%>/g)})),a.hooks.add("after-tokenize",(function(e){a.languages["markup-templating"].tokenizePlaceholders(e,"ejs")})),a.languages.eta=a.languages.ejs}(Prism)}}]);
//# sourceMappingURL=110.44ae1856.chunk.js.map