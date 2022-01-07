import{_ as n,c as s,o as t,a}from"./app.a7b90192.js";const g='{"title":"VSCode \u63D2\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6","description":"","frontmatter":{"title":"VSCode \u63D2\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6","date":"2018/04/14","categories":["\u6280\u672F\u7B14\u8BB0"],"tags":["\u524D\u7AEF","VSCode"]},"headers":[{"level":2,"title":"\u5E38\u7528\u63D2\u4EF6","slug":"\u5E38\u7528\u63D2\u4EF6"},{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6 settings.json","slug":"\u914D\u7F6E\u6587\u4EF6-settings-json"}],"relativePath":"blog/vscode-plugins-and-config-file.md","lastUpdated":1641375529019}',o={},e=a(`<h1 id="vscode-\u63D2\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6" tabindex="-1">VSCode \u63D2\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6 <a class="header-anchor" href="#vscode-\u63D2\u4EF6\u548C\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u5E38\u7528\u63D2\u4EF6" tabindex="-1">\u5E38\u7528\u63D2\u4EF6 <a class="header-anchor" href="#\u5E38\u7528\u63D2\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">\u63D2\u4EF6\u540D\u79F0</th><th style="text-align:left;">\u529F\u80FD\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">Beautify</td><td style="text-align:left;">\u683C\u5F0F\u5316 html\u3001js\u3001json\u3001css\u3001scss \u7B49\u6587\u4EF6</td></tr><tr><td style="text-align:left;">Bracket Pair Colorizer</td><td style="text-align:left;">\u6BCF\u4E00\u5BF9\u62EC\u53F7\u90FD\u662F\u4E00\u79CD\u989C\u8272</td></tr><tr><td style="text-align:left;">Chinese (Simplified) Language Pack for Visual Studio Code</td><td style="text-align:left;">\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09\u8BED\u8A00\u5305\u6269\u5C55</td></tr><tr><td style="text-align:left;">Code Runner</td><td style="text-align:left;">\u76F4\u63A5\u8FD0\u884C\u591A\u79CD\u8BED\u8A00\u7684\u4EE3\u7801\u7247\u6BB5\u6216\u4EE3\u7801\u6587\u4EF6</td></tr><tr><td style="text-align:left;">Code Spell Checker</td><td style="text-align:left;">\u5355\u8BCD\u62FC\u5199\u68C0\u67E5\u5DE5\u5177</td></tr><tr><td style="text-align:left;">Color Highlight</td><td style="text-align:left;">\u989C\u8272\u9AD8\u4EAE\u663E\u793A</td></tr><tr><td style="text-align:left;">Color Info</td><td style="text-align:left;">\u5F39\u51FA\u7684\u63D0\u793A\u6846\u4E2D\u663E\u793A\u5404\u79CD css \u989C\u8272\u4FE1\u606F</td></tr><tr><td style="text-align:left;">cssrem</td><td style="text-align:left;">css \u4E2D\u50CF\u7D20\u503C\u8F6C\u6362\u4E3A rem \u503C</td></tr><tr><td style="text-align:left;">Dart</td><td style="text-align:left;">Dart \u8BED\u8A00\u7684\u6269\u5C55\u652F\u6301\uFF08\u9488\u5BF9 Flutter \u5F00\u53D1\uFF09</td></tr><tr><td style="text-align:left;">EditorConfig for VS Code</td><td style="text-align:left;">\u5FEB\u901F\u521D\u59CB\u5316 <code>.editorconfig</code> \u6587\u4EF6</td></tr><tr><td style="text-align:left;">EJS language support</td><td style="text-align:left;">EJS \u6A21\u677F\u8BED\u6CD5\u6269\u5C55\u652F\u6301</td></tr><tr><td style="text-align:left;">Emoji</td><td style="text-align:left;">\u4E00\u4E2A\u7B80\u5355\u7684\u63D2\u4EF6\uFF0C\u53EF\u4EE5\u4ECE\u547D\u4EE4\u9762\u677F\u4E2D\u63D2\u5165\u8868\u60C5\u7B26\u53F7</td></tr><tr><td style="text-align:left;">ESlint</td><td style="text-align:left;">\u4EE3\u7801\u98CE\u683C\u68C0\u67E5\u5DE5\u5177</td></tr><tr><td style="text-align:left;">Flutter</td><td style="text-align:left;">flutter \u5F00\u53D1\u652F\u6301</td></tr><tr><td style="text-align:left;">Git History</td><td style="text-align:left;">\u53EF\u4EE5\u4FBF\u6377\u5730\u67E5\u770B\u5F53\u524D\u884C\u7684 git \u63D0\u4EA4\u4FE1\u606F</td></tr><tr><td style="text-align:left;">Go</td><td style="text-align:left;">Go \u7F16\u7A0B\u8BED\u8A00\u7684\u6269\u5C55\u652F\u6301</td></tr><tr><td style="text-align:left;">indent-rainbow</td><td style="text-align:left;">\u7F29\u8FDB\u53EF\u89C6\u5316\uFF0C\u4F7F\u7F29\u8FDB\u66F4\u5BB9\u6613\u9605\u8BFB</td></tr><tr><td style="text-align:left;">Indenticator</td><td style="text-align:left;">\u9AD8\u4EAE\u663E\u793A\u5F53\u524D\u7684\u7F29\u8FDB\u6DF1\u5EA6</td></tr><tr><td style="text-align:left;">IntelliSense for CSS class names in HTML</td><td style="text-align:left;">HTML \u4E2D CSS \u7C7B\u540D\u81EA\u52A8\u63D0\u793A</td></tr><tr><td style="text-align:left;">JavaScript (ES6) code snippets</td><td style="text-align:left;">ES6 \u4EE3\u7801\u7247\u6BB5\u63D0\u793A</td></tr><tr><td style="text-align:left;">JSON Tools</td><td style="text-align:left;">JSON \u683C\u5F0F\u5316\u548C\u538B\u7F29</td></tr><tr><td style="text-align:left;">Less IntelliSense</td><td style="text-align:left;">JSON \u683C\u5F0F\u5316\u548C\u538B\u7F29</td></tr><tr><td style="text-align:left;">Lodash</td><td style="text-align:left;">Lodash \u4EE3\u7801\u7247\u6BB5\u63D0\u793A</td></tr><tr><td style="text-align:left;">Markdown Preview Enhanced</td><td style="text-align:left;">markdown \u9884\u89C8\u5DE5\u5177</td></tr><tr><td style="text-align:left;">npm Intellisense</td><td style="text-align:left;">\u5F15\u5165\u4F9D\u8D56\u6216\u8005\u672C\u5730\u6587\u4EF6\u65F6\uFF0C\u81EA\u52A8\u63D0\u793A</td></tr><tr><td style="text-align:left;">Path Intellisense</td><td style="text-align:left;">\u8F93\u5165\u6587\u4EF6\u8DEF\u5F84\u65F6\uFF0C\u81EA\u52A8\u63D0\u793A</td></tr><tr><td style="text-align:left;">Prettier - Code formatter</td><td style="text-align:left;">\u4F18\u79C0\u7684\u4EE3\u7801\u683C\u5F0F\u5316\u5DE5\u5177</td></tr><tr><td style="text-align:left;">stylus</td><td style="text-align:left;">stylus \u8BED\u6CD5\u652F\u6301</td></tr><tr><td style="text-align:left;">SVG</td><td style="text-align:left;">SVG \u5DE5\u5177\uFF0C\u652F\u6301\u5BF9 SVG \u4EE3\u7801\u7684\u538B\u7F29\u3001\u7F8E\u5316\u7B49\uFF0C\u4EE5\u53CA SVG \u7684\u9884\u89C8</td></tr><tr><td style="text-align:left;">TODO Highlight</td><td style="text-align:left;">\u5728\u4EE3\u7801\u4E2D\u9AD8\u4EAE\u663E\u793A TODO\uFF0CFIXME \u548C\u5176\u4ED6\u6CE8\u91CA</td></tr><tr><td style="text-align:left;">Vetur</td><td style="text-align:left;">\u76EE\u524D\u6700\u4F18\u79C0\u7684 Vue \u652F\u6301\u5DE5\u5177</td></tr><tr><td style="text-align:left;">vscode-icons</td><td style="text-align:left;">\u6587\u4EF6\u56FE\u6807</td></tr></tbody></table><h2 id="\u914D\u7F6E\u6587\u4EF6-settings-json" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 settings.json <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6-settings-json" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// vscode \u7248\u672C\uFF1A1.54.1</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Atom One Dark&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u4EF6\u56FE\u6807\u4E3B\u9898\u8BBE\u7F6E</span>
  <span class="token string">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u542F\u7528\u5B57\u4F53\u8FDE\u5B57</span>
  <span class="token string">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u4FDD\u5B58\u65F6\u683C\u5F0F\u5316</span>
  <span class="token string">&quot;editor.minimap.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u663E\u793A\u7F29\u7565\u56FE</span>
  <span class="token string">&quot;editor.renderIndentGuides&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u663E\u793A\u7F29\u8FDB\u53C2\u8003\u7EBF</span>
  <span class="token string">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token comment">// \u7F16\u8F91\u533A\u57DF\u5B57\u4F53\u5927\u5C0F</span>
  <span class="token string">&quot;terminal.integrated.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token comment">// \u7EC8\u7AEF\u5B57\u4F53\u5927\u5C0F</span>
  <span class="token string">&quot;debug.console.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token comment">// \u63A7\u5236\u8C03\u8BD5\u63A7\u5236\u53F0\u4E2D\u7684\u5B57\u4F53\u5927\u5C0F</span>
  <span class="token string">&quot;editor.lineHeight&quot;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token comment">// \u884C\u9AD8</span>
  <span class="token string">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u4E00\u4E2A\u5236\u8868\u7B26\uFF08\u7F29\u8FDB\uFF09\u4E3A\u4E24\u4E2A\u7A7A\u683C</span>
  <span class="token string">&quot;editor.lineNumbers&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u663E\u793A\u7EDD\u5BF9\u884C\u6570</span>
  <span class="token string">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// \u5728120\u4E2A\u5B57\u7B26\u7684\u4F4D\u7F6E\u663E\u793A\u6807\u5C3A</span>
    <span class="token number">80</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token string">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u63A7\u5236\u672C\u6587\u5728\u53EF\u89C6\u533A\u57DF\u5904\u6362\u884C</span>
  <span class="token string">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6765\u81EA\u6240\u6709\u63D2\u4EF6\u7684\u6240\u6709\u53EF\u81EA\u52A8\u4FEE\u590D\u7684ESLint\u9519\u8BEF\u90FD\u5C06\u5728\u4FDD\u5B58\u65F6\u4FEE\u590D</span>
    <span class="token string">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;extensions.ignoreRecommendations&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u663E\u793A\u6269\u5C55\u5EFA\u8BAE\u901A\u77E5</span>

  <span class="token comment">/* ==================== \u641C\u7D22 \u914D\u7F6E ==================== */</span>
  <span class="token string">&quot;search.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5168\u5C40\u641C\u7D22\u65F6\u4E0D\u5305\u542B</span>
    <span class="token string">&quot;**/.vscode&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/dist&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/bower_components&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/build&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.git&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.gitignore&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.svn&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.DS_Store&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/.idea&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string">&quot;**/yarn.lock&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/* ==================== \u6587\u4EF6\u76F8\u5173 \u914D\u7F6E ==================== */</span>
  <span class="token string">&quot;files.trimTrailingWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u4EF6\u4FDD\u5B58\u65F6\u5220\u9664\u6BCF\u4E00\u884C\u672B\u5C3E\u591A\u4F59\u7684\u7A7A\u683C</span>
  <span class="token string">&quot;files.insertFinalNewline&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6587\u4EF6\u4FDD\u5B58\u65F6\u5728\u6587\u4EF6\u672B\u5C3E\u63D2\u5165\u4E00\u4E2A\u65B0\u884C</span>
  <span class="token string">&quot;files.trimFinalNewlines&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u4FDD\u5B58\u65F6\uFF0C\u5220\u9664\u6700\u7EC8\u65B0\u884C\u540E\u7684\u6240\u6709\u7A7A\u884C</span>
  <span class="token string">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u914D\u7F6E\u8BED\u8A00\u7684\u6587\u4EF6\u5173\u8054</span>
    <span class="token string">&quot;*.vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;*.wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/* ==================== emmet \u914D\u7F6E ==================== */</span>
  <span class="token string">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">/* ==================== prettier \u914D\u7F6E ==================== */</span>
  <span class="token comment">// \u5B57\u7B26\u4E32\u4F7F\u7528\u5355\u5F15\u53F7</span>
  <span class="token string">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u53E5\u5C3E\u4E0D\u6DFB\u52A0\u5206\u53F7</span>
  <span class="token string">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7F29\u8FDB\u5B57\u8282\u6570</span>
  <span class="token string">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7F29\u8FDB\u4E0D\u4F7F\u7528 tab</span>
  <span class="token string">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5BF9\u8C61\u4E2D\u6253\u5370\u7A7A\u683C \u9ED8\u8BA4 true</span>
  <span class="token comment">// true: { foo: bar }</span>
  <span class="token comment">// false: {foo: bar}</span>
  <span class="token string">&quot;prettier.bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7BAD\u5934\u51FD\u6570\u53C2\u6570\u62EC\u53F7 \u9ED8\u8BA4 avoid\uFF0C\u53EF\u9009 avoid| always</span>
  <span class="token comment">// avoid \u80FD\u7701\u7565\u62EC\u53F7\u7684\u65F6\u5019\u5C31\u7701\u7565 \u4F8B\u5982 x =&gt; x</span>
  <span class="token comment">// always \u603B\u662F\u6709\u62EC\u53F7</span>
  <span class="token string">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6362\u884C\u957F\u5EA6\uFF0C\u9ED8\u8BA480</span>
  <span class="token string">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token comment">// \u591A\u884C JSX \u5143\u7D20\u65F6\uFF0C\u5C06 \`&gt;\` \u653E\u5728\u6700\u540E\u4E00\u884C\u7684\u672B\u5C3E\uFF0C\u800C\u4E0D\u662F\u5355\u72EC\u653E\u5728\u4E0B\u4E00\u884C</span>
  <span class="token comment">// &lt;button</span>
  <span class="token comment">//   className=&quot;prettier-class&quot;</span>
  <span class="token comment">//   id=&quot;prettier-id&quot;</span>
  <span class="token comment">//   onClick={this.handleClick}&gt;</span>
  <span class="token comment">//   Click Here</span>
  <span class="token comment">// &lt;/button&gt;</span>
  <span class="token comment">// \u8BBE\u7F6E\u4E3A false \u65F6</span>
  <span class="token comment">// &lt;button</span>
  <span class="token comment">//   className=&quot;prettier-class&quot;</span>
  <span class="token comment">//   id=&quot;prettier-id&quot;</span>
  <span class="token comment">//   onClick={this.handleClick}</span>
  <span class="token comment">// &gt;</span>
  <span class="token comment">//   Click Here</span>
  <span class="token comment">// &lt;/button&gt;</span>
  <span class="token string">&quot;prettier.jsxBracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// jsx \u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u4EE3\u66FF\u53CC\u5F15\u53F7</span>
  <span class="token string">&quot;prettier.jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728\u5BF9\u8C61\u6216\u6570\u7EC4\u6700\u540E\u4E00\u4E2A\u5143\u7D20\u540E\u9762\u4E0D\u52A0\u9017\u53F7</span>
  <span class="token string">&quot;prettier.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6BCF\u884C\u7ED3\u5C3E\u6362\u884C\u7B26\u53F7\u8BBE\u7F6E\u4E3A lf</span>
  <span class="token string">&quot;prettier.endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lf&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">/* ==================== cssrem \u914D\u7F6E ==================== */</span>
  <span class="token string">&quot;cssrem.rootFontSize&quot;</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span>

  <span class="token comment">/* ==================== \u683C\u5F0F\u5316\u89C4\u5219 \u914D\u7F6E ==================== */</span>
  <span class="token string">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[scss]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[less]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[jsx]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \u6587\u4EF6\u6362\u884C\u7B26\u4E3A LF</span>
  <span class="token string">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u56E0\u4E3A\u5B89\u88C5\u4E86 Color Highlight\uFF0C\u7981\u7528\u6389\u81EA\u5E26\u7684\u989C\u8272\u4FEE\u9970\u5668</span>
  <span class="token string">&quot;editor.colorDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token string">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token string">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;go.useLanguageServer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token string">&quot;todo-tree.tree.showScanModeButton&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),p=[e];function l(c,r,u,i,k,d){return t(),s("div",null,p)}var m=n(o,[["render",l]]);export{g as __pageData,m as default};
