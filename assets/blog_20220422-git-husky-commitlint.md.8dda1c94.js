import{_ as s,c as a,o as n,a as e}from"./app.228f4434.js";var l="/assets/755ee69f-5697-408d-8937-110038fa828e.0cb02a53.png";const m=JSON.parse('{"title":"\u4F7F\u7528 Husky + Commitlint \u89C4\u8303 Git \u63D0\u4EA4\u4FE1\u606F","description":"","frontmatter":{"title":"\u4F7F\u7528 Husky + Commitlint \u89C4\u8303 Git \u63D0\u4EA4\u4FE1\u606F","tags":["Git"]},"headers":[{"level":2,"title":"\u524D\u8A00","slug":"\u524D\u8A00"},{"level":2,"title":"Husky \u4F7F\u7528","slug":"husky-\u4F7F\u7528"},{"level":3,"title":"\u5173\u4E8E Git \u94A9\u5B50","slug":"\u5173\u4E8E-git-\u94A9\u5B50"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u8BBE\u7F6E NPM \u7684 prepare\u811A\u672C","slug":"\u8BBE\u7F6E-npm-\u7684-prepare\u811A\u672C"},{"level":3,"title":"\u6DFB\u52A0\u94A9\u5B50","slug":"\u6DFB\u52A0\u94A9\u5B50"},{"level":2,"title":"Commitlint \u4F7F\u7528","slug":"commitlint-\u4F7F\u7528"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5-1"},{"level":3,"title":"\u914D\u7F6E\u4F7F\u7528\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D","slug":"\u914D\u7F6E\u4F7F\u7528\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D"},{"level":3,"title":"\u5728 Husky \u7684 commit-msg \u94A9\u5B50\u4E2D\u4F7F\u7528","slug":"\u5728-husky-\u7684-commit-msg-\u94A9\u5B50\u4E2D\u4F7F\u7528"},{"level":3,"title":"\u6D4B\u8BD5","slug":"\u6D4B\u8BD5"},{"level":2,"title":"lint-staged \u4F7F\u7528","slug":"lint-staged-\u4F7F\u7528"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5-2"},{"level":3,"title":"\u5728 Husky \u7684 pre-commit \u94A9\u5B50\u4E2D\u4F7F\u7528","slug":"\u5728-husky-\u7684-pre-commit-\u94A9\u5B50\u4E2D\u4F7F\u7528"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E"},{"level":2,"title":"\u719F\u6089\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D","slug":"\u719F\u6089\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D"},{"level":3,"title":"\u8BED\u6CD5","slug":"\u8BED\u6CD5"},{"level":3,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":2,"title":"Commitizen \u4F7F\u7528","slug":"commitizen-\u4F7F\u7528"},{"level":3,"title":"\u521D\u59CB\u5316","slug":"\u521D\u59CB\u5316"},{"level":3,"title":"\u914D\u7F6E","slug":"\u914D\u7F6E-1"},{"level":3,"title":"\u4F7F\u7528","slug":"\u4F7F\u7528"}],"relativePath":"blog/20220422-git-husky-commitlint.md"}'),p={name:"blog/20220422-git-husky-commitlint.md"},o=e(`<h1 id="\u4F7F\u7528-husky-commitlint-\u89C4\u8303-git-\u63D0\u4EA4\u4FE1\u606F" tabindex="-1">\u4F7F\u7528 Husky + Commitlint \u89C4\u8303 Git \u63D0\u4EA4\u4FE1\u606F <a class="header-anchor" href="#\u4F7F\u7528-husky-commitlint-\u89C4\u8303-git-\u63D0\u4EA4\u4FE1\u606F" aria-hidden="true">#</a></h1><h2 id="\u524D\u8A00" tabindex="-1">\u524D\u8A00 <a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a></h2><p>\u4F18\u96C5\u7684 Git \u63D0\u4EA4\u4FE1\u606F\uFF0C\u53EF\u4EE5\u5F88\u76F4\u89C2\u8868\u8FBE\u4ED3\u5E93\u7684\u53D8\u66F4\uFF0C\u65B9\u4FBF\u56E2\u961F\u534F\u4F5C\u3001\u95EE\u9898\u8FFD\u6EAF\u3002\u5E76\u4E14\u76F4\u63A5\u53EF\u4EE5\u6839\u636E <code>git log</code>\u4EA7\u51FA <code>CHANGELOG</code>\u3002</p><p>\u600E\u4E48\u6837\u624D\u80FD\u7B97\u662F<strong>\u4F18\u96C5</strong>\u7684 Git \u63D0\u4EA4\u4FE1\u606F\u5462\uFF1F</p><p>\u300CConventional Commits\u300D\u56E2\u961F\u4E3A\u6211\u4EEC\u63D0\u4F9B\u4E86<a href="https://www.conventionalcommits.org/zh-hans/v1.0.0/" target="_blank" rel="noopener noreferrer">\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303</a>\uFF0C\u4E00\u79CD\u7528\u4E8E\u7ED9\u63D0\u4EA4\u4FE1\u606F\u589E\u52A0\u4EBA\u673A\u53EF\u8BFB\u542B\u4E49\u7684\u89C4\u8303\u3002\u8BE5\u89C4\u8303\u5F88\u5927\u7A0B\u5EA6\u4E0A\u57FA\u4E8E <a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines" target="_blank" rel="noopener noreferrer">Angular Commit Guidelines</a>\u3002</p><p>\u5F53\u7136\uFF0C\u5149\u6709\u89C4\u8303\u80AF\u5B9A\u4E0D\u884C\uFF0C\u89C4\u8303\u662F\u6B7B\u7684\uFF0C\u4EBA\u662F\u6D3B\u7684\uFF0C\u5982\u679C\u6CA1\u6709\u5DE5\u5177\u7EA6\u675F\uFF0C\u89C4\u8303\u5C31\u662F\u767D\u8C08\u3002</p><p>\u4EE5\u4E0B\u662F\u5173\u4E8E\u4F7F\u7528\u76F8\u5173\u5DE5\u5177\u89C4\u8303 Git \u63D0\u4EA4\u4FE1\u606F\u7684\u6559\u7A0B\u3002</p><h2 id="husky-\u4F7F\u7528" tabindex="-1">Husky \u4F7F\u7528 <a class="header-anchor" href="#husky-\u4F7F\u7528" aria-hidden="true">#</a></h2><h3 id="\u5173\u4E8E-git-\u94A9\u5B50" tabindex="-1">\u5173\u4E8E Git \u94A9\u5B50 <a class="header-anchor" href="#\u5173\u4E8E-git-\u94A9\u5B50" aria-hidden="true">#</a></h3><p>Git \u672C\u8EAB\u5C31\u6709<a href="https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90" target="_blank" rel="noopener noreferrer">\u94A9\u5B50\uFF08hooks\uFF09\u529F\u80FD</a>\uFF0C\u80FD\u5728\u7279\u5B9A\u7684\u91CD\u8981\u52A8\u4F5C\u53D1\u751F\u65F6\u89E6\u53D1\u81EA\u5B9A\u4E49\u811A\u672C\u3002\u94A9\u5B50\u90FD\u88AB\u5B58\u50A8\u5728 Git \u76EE\u5F55\u4E0B\u7684 <code>hooks</code> \u5B50\u76EE\u5F55\u4E2D\uFF0C\u5373\u9879\u76EE\u6839\u76EE\u5F55\u7684 <code>.git/hooks</code> \u4E2D\u3002</p><p>\u4F46\u662F Git \u7684\u94A9\u5B50\uFF0C\u914D\u7F6E\u6BD4\u8F83\u7E41\u7410\uFF0C\u5E76\u4E14\u6211\u4EEC\u9700\u8981\u7528\u5230\u7684\u6BD4\u5982 <code>pre-commit</code>\u94A9\u5B50\uFF0C\u5C5E\u4E8E<strong>\u5BA2\u6237\u7AEF\u94A9\u5B50</strong>\uFF0C\u5E76\u4E0D\u4F1A\u540C\u6B65\u5230\u5176\u4ED6\u534F\u4F5C\u4EBA\u5458\u7684 <code>.git</code>\u76EE\u5F55\u4E2D\u3002</p><p>\u800C <a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">Husky</a> \u7684\u51FA\u73B0\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u5F88\u65B9\u4FBF\u5730\u914D\u7F6E Git \u94A9\u5B50\uFF0C\u89E3\u51B3\u4E86 Git \u539F\u751F\u94A9\u5B50\u914D\u7F6E\u7E41\u7410\u3001\u534F\u4F5C\u4EBA\u5458\u4E4B\u95F4\u4E0D\u80FD\u540C\u6B65\u7684\u95EE\u9898\u3002</p><p>\u4EE5\u4E0B\u5173\u4E8E Husky \u7684\u8BB2\u89E3\uFF0C\u90FD\u662F <code>5.0</code> \u53CA\u4EE5\u540E\u7684\u7248\u672C\u3002<code>5.0</code> \u53CA\u4EE5\u540E\u7684\u7248\u672C\uFF0C\u521D\u59CB\u5316\u540E\uFF0C\u4F1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u751F\u6210 <code>.husky</code> \u76EE\u5F55\uFF0C\u53EF\u4EE5\u5728\u5176\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u94A9\u5B50\u914D\u7F6E\u6587\u4EF6\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">npm install husky -D</span></span>
<span class="line"></span></code></pre></div><h3 id="\u8BBE\u7F6E-npm-\u7684-prepare\u811A\u672C" tabindex="-1">\u8BBE\u7F6E NPM \u7684 <code>prepare</code>\u811A\u672C <a class="header-anchor" href="#\u8BBE\u7F6E-npm-\u7684-prepare\u811A\u672C" aria-hidden="true">#</a></h3><blockquote><p>\u62D3\u5C55\u77E5\u8BC6\uFF1A<code>prepare</code> \u811A\u672C\u5C5E\u4E8E\u751F\u547D\u5468\u671F\u811A\u672C\uFF0C\u5982\u679C\u4F60\u914D\u7F6E\u4E86\u8BE5\u811A\u672C\uFF0C\u90A3\u4E48\u5728\u4F60\u6BCF\u6B21 <code>npm install</code> \u7684\u65F6\u5019\uFF0C<code>prepare</code> \u811A\u672C\u90FD\u4F1A\u81EA\u52A8\u6267\u884C\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u624B\u52A8\u8C03\u7528\uFF1A<code>npm run prepare</code>\u3002\u4F60\u53EF\u4EE5\u67E5\u9605<a href="https://docs.npmjs.com/cli/v8/using-npm/scripts#life-cycle-scripts" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a>\uFF0C\u4E86\u89E3\u5176\u4ED6\u7684\u751F\u547D\u5468\u671F\u811A\u672C\uFF0C\u4EE5\u53CA\u4F1A\u89E6\u53D1\u751F\u547D\u5468\u671F\u811A\u672C\u7684\u547D\u4EE4\u3002</p></blockquote><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#7B7F8B;"># \u5199\u5165 prepare \u811A\u672C\u5230 package.json</span></span>
<span class="line"><span style="color:#F6F6F4;">npm set-script prepare </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">husky install</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># \u624B\u52A8\u8FD0\u884C\u4E00\u6B21</span></span>
<span class="line"><span style="color:#F6F6F4;">npm run prepare</span></span>
<span class="line"></span></code></pre></div><p>\u6BCF\u6B21\u8FD0\u884C <code>npm run prepare</code>\uFF0C\u90FD\u4F1A\u5728 <code>.husky/_</code>\u4E0B\u751F\u6210 <code>husky.sh</code>\u548C <code>.gitignore</code>\u4E24\u4E2A\u6587\u4EF6\uFF0C\u5982\u679C\u539F\u672C\u6709\u7684\u8BDD\uFF0C\u4F1A\u88AB\u8986\u76D6\u3002</p><p>\u5728 <code>.husky</code> \u4E0B\u7684\u81EA\u5B9A\u4E49\u94A9\u5B50\u6587\u4EF6\uFF0C\u90FD\u9700\u8981\u5F15\u5165 <code>.husky/_/husky.sh</code> \u811A\u672C\uFF0C\u7531\u4E8E <code>.husky/_</code> \u4E0B\u7684\u4E24\u4E2A\u6587\u4EF6\u6CA1\u6709\u88AB Git \u7BA1\u7406\uFF0C\u6709\u65F6\u5019\u5207\u6362\u5206\u652F\u65F6\uFF0C<code>.husky/_</code> \u4E0B\u7684\u6587\u4EF6\u4F1A\u4E22\u5931\uFF0C\u5BFC\u81F4 <code>git commit</code> \u65F6\u62A5\u9519\uFF0C\u8FD9\u65F6\u53EA\u9700\u91CD\u65B0\u6267\u884C\u4E0B <code>npm run prepare</code>\u3002</p><h3 id="\u6DFB\u52A0\u94A9\u5B50" tabindex="-1">\u6DFB\u52A0\u94A9\u5B50 <a class="header-anchor" href="#\u6DFB\u52A0\u94A9\u5B50" aria-hidden="true">#</a></h3><p>\u6DFB\u52A0\u4E24\u4E2A\u94A9\u5B50\uFF1A<code>pre-commit</code>\u3001<code>commit-msg</code>\uFF0C\u540E\u9762\u9700\u8981\u7528\u5230\u3002</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">npx husky add .husky/pre-commit </span><span style="color:#DEE492;">&quot;&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">npx husky add .husky/commit-msg </span><span style="color:#DEE492;">&quot;&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="commitlint-\u4F7F\u7528" tabindex="-1">Commitlint \u4F7F\u7528 <a class="header-anchor" href="#commitlint-\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u6211\u4EEC\u5B89\u88C5\u4E86 Husky\uFF0C\u5E76\u4E14\u6DFB\u52A0\u4E86\u4E24\u4E2A\u94A9\u5B50\uFF0C\u4F46\u6B64\u65F6\u8FD8\u4E0D\u80FD\u7EA6\u675F\u5F00\u53D1\u4EBA\u5458\u7684 Git \u63D0\u4EA4\u4FE1\u606F\u3002\u6211\u4EEC\u9700\u8981\u501F\u52A9 <a href="https://github.com/conventional-changelog/commitlint" target="_blank" rel="noopener noreferrer">Commitlint</a> \u6765\u8F85\u52A9\u6821\u9A8C\u63D0\u4EA4\u4FE1\u606F\u3002</p><h3 id="\u5B89\u88C5-1" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">npm install @commitlint/cli @commitlint/config-conventional -D</span></span>
<span class="line"></span></code></pre></div><ul><li><code>@commitlint/cli</code> \u662F Commitlint \u547D\u4EE4\u884C\u5DE5\u5177\u672C\u4F53</li><li><code>@commitlint/config-conventional</code> \u662F\u57FA\u4E8E\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D\u7684\u914D\u7F6E\u6587\u4EF6</li></ul><h3 id="\u914D\u7F6E\u4F7F\u7528\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D" tabindex="-1">\u914D\u7F6E\u4F7F\u7528\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D <a class="header-anchor" href="#\u914D\u7F6E\u4F7F\u7528\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#97E1F1;">echo</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">module.exports = {extends: [&#39;@commitlint/config-conventional&#39;]}</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;"> commitlint.config.js</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5728-husky-\u7684-commit-msg-\u94A9\u5B50\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 Husky \u7684 <code>commit-msg</code> \u94A9\u5B50\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-husky-\u7684-commit-msg-\u94A9\u5B50\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><ul><li>\u53EF\u4EE5\u901A\u8FC7\u811A\u672C\u5199\u5165\u5230 <code>.husky/commit-msg</code></li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">npx husky add .husky/commit-msg </span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">npx --no -- commitlint --edit &quot;$1&quot;</span><span style="color:#DEE492;">&#39;</span></span>
<span class="line"></span></code></pre></div><ul><li>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728 <code>.husky/commit-msg</code> \u4E2D\u6DFB\u52A0</li></ul><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#7B7F8B;">#!/bin/sh</span></span>
<span class="line"><span style="color:#97E1F1;">.</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">dirname </span><span style="color:#DEE492;">&quot;</span><span style="color:#BF9EEE;">$0</span><span style="color:#DEE492;">&quot;)</span><span style="color:#E7EE98;">/_/husky.sh</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">npx --no -- commitlint --edit </span><span style="color:#DEE492;">&quot;</span><span style="color:#BF9EEE;">$1</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u6D4B\u8BD5" tabindex="-1">\u6D4B\u8BD5 <a class="header-anchor" href="#\u6D4B\u8BD5" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">git add </span><span style="color:#97E1F1;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># \u5E94\u8BE5\u5931\u8D25</span></span>
<span class="line"><span style="color:#F6F6F4;">git commit -m </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">\u6D4B\u8BD5</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># \u5E94\u8BE5\u6210\u529F</span></span>
<span class="line"><span style="color:#F6F6F4;">git commit -m </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">chore: \u4F7F\u7528 Husky + Commitlint \u89C4\u8303 Git \u63D0\u4EA4\u4FE1\u606F</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="lint-staged-\u4F7F\u7528" tabindex="-1">lint-staged \u4F7F\u7528 <a class="header-anchor" href="#lint-staged-\u4F7F\u7528" aria-hidden="true">#</a></h2><p><a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged</a> \u53EF\u4EE5\u914D\u5408 Husky \u7684 <code>pre-commit</code> \u94A9\u5B50\uFF0C\u5728 Git \u63D0\u4EA4\u4E4B\u524D\uFF0C\u5BF9\u6682\u5B58\u7684\u6587\u4EF6\u8FD0\u884C linters \u6821\u9A8C\u3002</p><h3 id="\u5B89\u88C5-2" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5-2" aria-hidden="true">#</a></h3><p>\u5B98\u65B9\u63A8\u8350\u7684\u65B9\u5F0F\u662F\u8FD0\u884C <code>npx mrm@2 lint-staged</code>\uFF0C\u9ED8\u8BA4\u4F1A\u628A\u914D\u7F6E\u5199\u5165\u5230 <code>package.json</code>\uFF0C\u4E0D\u8FC7\u6211\u4E0D\u559C\u6B22\uFF0C\u6211\u9009\u62E9\u624B\u52A8\u5B89\u88C5\u3002</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">npm i lint-staged -D</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5728-husky-\u7684-pre-commit-\u94A9\u5B50\u4E2D\u4F7F\u7528" tabindex="-1">\u5728 Husky \u7684 <code>pre-commit</code> \u94A9\u5B50\u4E2D\u4F7F\u7528 <a class="header-anchor" href="#\u5728-husky-\u7684-pre-commit-\u94A9\u5B50\u4E2D\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#7B7F8B;">#!/bin/sh</span></span>
<span class="line"><span style="color:#97E1F1;">.</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;$(</span><span style="color:#E7EE98;">dirname </span><span style="color:#DEE492;">&quot;</span><span style="color:#BF9EEE;">$0</span><span style="color:#DEE492;">&quot;)</span><span style="color:#E7EE98;">/_/husky.sh</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">npx lint-staged</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a></h3><p>lint-staged \u9ED8\u8BA4\u4F1A\u5BF9\u6240\u6709\u6682\u5B58\u7684\u6587\u4EF6\u8FDB\u884C lint\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u7F29\u5C0F\u6587\u4EF6\u8303\u56F4\uFF0C\u4EE5\u53CA\u914D\u7F6E lint \u7684\u65B9\u5F0F\u3002</p><p>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>.lintstagedrc</code> \u914D\u7F6E\u6587\u4EF6\uFF0C\u6211\u5E38\u7528\u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">src/**/*.{js,jsx,md,ts,tsx,json,vue,css}</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> [</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">prettier --write</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">,</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">eslint --fix</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  ]</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u66F4\u591A\u914D\u7F6E\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/okonet/lint-staged#readme" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a>\u3002</p><h2 id="\u719F\u6089\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D" tabindex="-1">\u719F\u6089\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D <a class="header-anchor" href="#\u719F\u6089\u300C\u7EA6\u5B9A\u5F0F\u63D0\u4EA4\u89C4\u8303\u300D" aria-hidden="true">#</a></h2><p>\u4E0A\u9762\u914D\u7F6E\u4E86\u4E00\u901A\u63D2\u4EF6\uFF0C\u4E5F\u662F\u65F6\u5019\u4E86\u89E3\u4E0B\uFF0C\u8BE5\u600E\u4E48\u6837\u4E66\u5199\u89C4\u8303\u7684 Git \u63D0\u4EA4\u4FE1\u606F\u4E86\u3002</p><h3 id="\u8BED\u6CD5" tabindex="-1">\u8BED\u6CD5 <a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;">type</span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;">[optional scope]: </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;">description</span><span style="color:#F286C4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">[optional body]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">[optional footer(s)]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># \u8BD1\u6587</span></span>
<span class="line"><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;">\u7C7B\u578B</span><span style="color:#F286C4;">&gt;</span><span style="color:#F6F6F4;">[\u53EF\u9009 \u8303\u56F4]: </span><span style="color:#F286C4;">&lt;</span><span style="color:#F6F6F4;">\u63CF\u8FF0</span><span style="color:#F286C4;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">[\u53EF\u9009 \u6B63\u6587]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">[\u53EF\u9009 \u811A\u6CE8]</span></span>
<span class="line"></span></code></pre></div><ol><li>\u7C7B\u578B\u548C\u63CF\u8FF0\u5FC5\u586B\uFF0C\u5176\u4ED6\u53EF\u9009\u3002</li><li>\u7C7B\u578B\u5305\u62EC\uFF08\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type" target="_blank" rel="noopener noreferrer">Angular \u7EA6\u5B9A</a>\uFF09\uFF1A <ul><li><code>**build**</code>\uFF1A\u5F71\u54CD\u6784\u5EFA\u7CFB\u7EDF\u6216\u5916\u90E8\u4F9D\u8D56\u5173\u7CFB\u7684\u66F4\u6539\uFF08\u793A\u4F8B\u8303\u56F4\uFF1Agulp\u3001Brocoli\u3001npm\uFF09</li><li><code>**ci**</code>\uFF1A\u5BF9 CI \u914D\u7F6E\u6587\u4EF6\u548C\u811A\u672C\u7684\u66F4\u6539\uFF08\u793A\u4F8B\u8303\u56F4\uFF1ATravis\u3001Circle\u3001BrowserStack\u3001SauceLabs\uFF09</li><li><code>**docs**</code>\uFF1A\u4EC5\u6587\u6863\u7684\u66F4\u6539</li><li><code>**feat**</code>\uFF1A\u65B0\u529F\u80FD\u5F00\u53D1</li><li><code>**fix**</code>\uFF1Abug \u4FEE\u590D</li><li><code>**perf**</code>\uFF1A\u63D0\u9AD8\u6027\u80FD\u7684\u4EE3\u7801\u66F4\u6539\uFF08\u6027\u80FD\u4F18\u5316\uFF09</li><li><code>**refactor**</code>\uFF1A\u65E2\u4E0D\u4FEE\u590D\u9519\u8BEF\u4E5F\u4E0D\u6DFB\u52A0\u529F\u80FD\u7684\u4EE3\u7801\u66F4\u6539\uFF08\u4EE3\u7801\u91CD\u6784\uFF09</li><li><code>**style**</code>\uFF1A\u4E0D\u5F71\u54CD\u4EE3\u7801\u542B\u4E49\u7684\u66F4\u6539\uFF08\u7A7A\u767D\u3001\u683C\u5F0F\u3001\u7F3A\u5C11\u5206\u53F7\u7B49\uFF09</li><li><code>**test**</code>\uFF1A\u6DFB\u52A0\u7F3A\u5931\u7684\u6D4B\u8BD5\u4EE3\u7801\u6216\u4FEE\u6539\u73B0\u6709\u7684\u6D4B\u8BD5\u4EE3\u7801</li></ul></li><li>\u8303\u56F4\u5728 Commitlint \u7684\u62D3\u5C55\u4E0B\uFF0C\u53EF\u4EE5\u652F\u6301\u591A\u4E2A\uFF0C\u7528 <code>/</code>\u3001<code>\\</code> \u6216 <code>,</code> \u5206\u5272\u3002</li><li>\u6B63\u6587\u53EF\u4EE5\u591A\u884C\uFF0C\u6BCF\u884C\u6B63\u6587\u90FD\u662F\u4E00\u6BB5\u63CF\u8FF0\u6027\u7684\u53E5\u5B50\uFF0C\u6BCF\u884C\u6B63\u6587\u524D\u540E\u90FD\u9700\u8981\u6709\u7A7A\u884C\u3002</li><li>\u811A\u6CE8\u53EF\u4EE5\u591A\u884C\uFF0C\u811A\u6CE8\u548C\u811A\u6CE8\u4E4B\u524D\u4E0D\u9700\u8981\u7A7A\u884C\u3002\u811A\u6CE8\u8BED\u6CD5\uFF1A</li></ol><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">&lt;Word-token&gt;:&lt;space&gt;&lt;value&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;">&lt;Word-token&gt;&lt;space&gt;#&lt;value&gt;</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h3 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h3><h4 id="_1-\u4E0D\u5305\u542B\u6B63\u6587\u7684\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">1. \u4E0D\u5305\u542B\u6B63\u6587\u7684\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#_1-\u4E0D\u5305\u542B\u6B63\u6587\u7684\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">docs: \u66F4\u65B0 README.md</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h4 id="_2-\u5305\u542B\u8303\u56F4\u7684\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">2. \u5305\u542B\u8303\u56F4\u7684\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#_2-\u5305\u542B\u8303\u56F4\u7684\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">feat(userManage): \u5F00\u53D1\u7528\u6237\u7BA1\u7406\u6A21\u5757</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h4 id="\u5305\u542B\u4E86-\u5B57\u7B26\u4EE5\u63D0\u9192\u6CE8\u610F\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">\u5305\u542B\u4E86 <code>!</code> \u5B57\u7B26\u4EE5\u63D0\u9192\u6CE8\u610F\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#\u5305\u542B\u4E86-\u5B57\u7B26\u4EE5\u63D0\u9192\u6CE8\u610F\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">feat!: \u4EA7\u54C1\u53D1\u8D27\u65F6\u5411\u5BA2\u6237\u53D1\u9001\u90AE\u4EF6</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h4 id="\u5305\u542B\u4E86\u8303\u56F4\u548C\u7834\u574F\u6027\u53D8\u66F4-\u7684\u63D0\u4EA4\u8AAA\u660E" tabindex="-1">\u5305\u542B\u4E86\u8303\u56F4\u548C\u7834\u574F\u6027\u53D8\u66F4 <code>!</code> \u7684\u63D0\u4EA4\u8AAA\u660E <a class="header-anchor" href="#\u5305\u542B\u4E86\u8303\u56F4\u548C\u7834\u574F\u6027\u53D8\u66F4-\u7684\u63D0\u4EA4\u8AAA\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">feat(api)!: \u4EA7\u54C1\u53D1\u8D27\u65F6\u5411\u5BA2\u6237\u53D1\u9001\u90AE\u4EF6</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h4 id="\u5305\u542B\u4E86\u63CF\u8FF0\u5E76\u4E14\u811A\u6CE8\u4E2D\u6709\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">\u5305\u542B\u4E86\u63CF\u8FF0\u5E76\u4E14\u811A\u6CE8\u4E2D\u6709\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#\u5305\u542B\u4E86\u63CF\u8FF0\u5E76\u4E14\u811A\u6CE8\u4E2D\u6709\u7834\u574F\u6027\u53D8\u66F4\u7684\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">feat: \u5141\u8BB8\u9ED8\u8BA4\u7684\u914D\u7F6E\u5BF9\u8C61\u6269\u5C55\u5176\u4ED6\u914D\u7F6E</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">BREAKING CHANGE: \u914D\u7F6E\u6587\u4EF6\u4E2D\u7684 \`extends\` \u73B0\u5728\u7528\u4E8E\u6269\u5C55\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h4 id="\u5305\u542B\u4E86-\u548C-breaking-change-\u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">\u5305\u542B\u4E86 ! \u548C BREAKING CHANGE \u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#\u5305\u542B\u4E86-\u548C-breaking-change-\u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">chore!: \u653E\u5F03\u5BF9 Node 6 \u7684\u652F\u6301</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">BREAKING CHANGE: \u4F7F\u7528\u7684 JavaScript \u529F\u80FD\u5C06\u4E0D\u518D\u652F\u6301 Node 6</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h4 id="\u5305\u542B\u591A\u884C\u6B63\u6587\u548C\u591A\u884C\u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E" tabindex="-1">\u5305\u542B\u591A\u884C\u6B63\u6587\u548C\u591A\u884C\u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E <a class="header-anchor" href="#\u5305\u542B\u591A\u884C\u6B63\u6587\u548C\u591A\u884C\u811A\u6CE8\u7684\u63D0\u4EA4\u8BF4\u660E" aria-hidden="true">#</a></h4><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#f6f6f4;">fix: \u9632\u6B62\u8BF7\u6C42\u6253\u67B6</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">\u4E3A\u5F53\u524D\u8BF7\u6C42\u8BBE\u7F6E\u8BF7\u6C42 ID \u548C\u4E00\u4E2A\u552F\u4E00\u6807\u5FD7\u3002\u53D6\u6D88\u6389\u5F53\u524D\u8BF7\u6C42\u4E4B\u524D\u7684\u8BF7\u6C42\u54CD\u5E94\u3002</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">\u5220\u9664\u4E4B\u524D\u7528\u4E8E\u7F13\u89E3\u8BF7\u6C42\u6253\u67B6\u95EE\u9898\u8BBE\u7F6E\u7684\u8D85\u65F6\u5668\uFF0C\u73B0\u5728\u5DF2\u7ECF\u4E0D\u9700\u8981\u4E86\u3002</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span>
<span class="line"><span style="color:#f6f6f4;">Reviewed-by: Wang</span></span>
<span class="line"><span style="color:#f6f6f4;">Refs: #demo</span></span>
<span class="line"><span style="color:#f6f6f4;"></span></span></code></pre></div><h2 id="commitizen-\u4F7F\u7528" tabindex="-1">Commitizen \u4F7F\u7528 <a class="header-anchor" href="#commitizen-\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u4E0D\u80FD\u6E05\u695A\u7684\u8BB0\u5F97\u4E0D\u540C\u7684\u7C7B\u578B\u5BF9\u5E94\u7684\u542B\u4E49\uFF0C\u53C8\u4E0D\u60F3\u9891\u7E41\u7FFB\u9605\u6587\u6863\uFF0C\u53EF\u4EE5\u9009\u62E9\u5B89\u88C5 Commitizen\u3002</p><h3 id="\u521D\u59CB\u5316" tabindex="-1">\u521D\u59CB\u5316 <a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a></h3><p>\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F **npm 5.2+\uFF0C**\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 <code>npx</code>\uFF0C\u4E0D\u9700\u8981\u5168\u5C40\u5B89\u88C5 Commitizen\u3002\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F **npm 5.2 **\u4EE5\u4E0B\u7684\u7248\u672C\uFF0C\u8BF7\u81EA\u884C\u67E5\u9605<a href="https://github.com/commitizen/cz-cli#making-your-repo-commitizen-friendly" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a>\u3002</p><p>\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u8FDB\u884C\u521D\u59CB\u5316\uFF1A</p><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">npx commitizen init cz-conventional-changelog --save-dev --save-exact</span></span>
<span class="line"></span></code></pre></div><h3 id="\u914D\u7F6E-1" tabindex="-1">\u914D\u7F6E <a class="header-anchor" href="#\u914D\u7F6E-1" aria-hidden="true">#</a></h3><p>\u4E0A\u4E00\u6B65\u7684\u521D\u59CB\u5316\u64CD\u4F5C\uFF0C\u4F1A\u5E2E\u6211\u4EEC\u5B89\u88C5 <code>cz-conventional-changelog</code>\uFF0C\u5E76\u4E14\u5728 <code>package.json</code> \u4E2D\u5199\u5165 <code>config</code> \u914D\u7F6E\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">config</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">commitizen</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> {</span></span>
<span class="line"><span style="color:#F6F6F4;">    </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">path</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./node_modules/cz-conventional-changelog</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">  }</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u4F46\u662F\u6211\u4E0D\u559C\u6B22\u628A\u914D\u7F6E\u4FE1\u606F\u653E\u5728 <code>package.json</code> \u4E2D\uFF0C\u663E\u5F97\u6742\u4E71\uFF0C\u6211\u9009\u62E9\u628A\u914D\u7F6E\u5265\u79BB\u3002</p><p>\u5728\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA <code>.czrc</code> \u6587\u4EF6\uFF0C\u5728\u5176\u4E2D\u5199\u5165\u540C\u6837\u7684\u914D\u7F6E\uFF0C\u5E76\u628A <code>package.json</code> \u4E2D\u7684 <code>config</code> \u5220\u9664\u3002</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#F6F6F4;">{</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">path</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">./node_modules/cz-conventional-changelog</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6700\u540E\u5728 <code>package.json</code> \u914D\u7F6E\u4E00\u4E2A\u547D\u4EE4\uFF0C\u907F\u514D\u6BCF\u6B21\u90FD\u8981\u6572 <code>npx cz</code> \u8FD9\u6837\u4E0D\u592A\u719F\u6089\u7684\u547D\u4EE4\uFF1A</p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">scripts</span><span style="color:#DEE492;">&quot;</span><span style="color:#F6F6F4;">: {</span></span>
<span class="line"><span style="color:#F6F6F4;">  </span><span style="color:#97E2F2;">&quot;</span><span style="color:#97E1F1;">commit</span><span style="color:#97E2F2;">&quot;</span><span style="color:#F286C4;">:</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&quot;</span><span style="color:#E7EE98;">cz</span><span style="color:#DEE492;">&quot;</span></span>
<span class="line"><span style="color:#F6F6F4;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="\u4F7F\u7528" tabindex="-1">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-shell"><span class="copy"></span><pre><code><span class="line"><span style="color:#7B7F8B;"># \u5148\u6682\u5B58\u9700\u8981\u63D0\u4EA4\u7684\u6587\u4EF6</span></span>
<span class="line"><span style="color:#F6F6F4;">git add xxx</span></span>
<span class="line"><span style="color:#7B7F8B;"># or \u6682\u5B58\u6240\u6709</span></span>
<span class="line"><span style="color:#F6F6F4;">git add </span><span style="color:#97E1F1;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7B7F8B;"># \u542F\u52A8 Commitizen</span></span>
<span class="line"><span style="color:#F6F6F4;">npm run commit</span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u4F1A\u770B\u5230\u4EE5\u4E0B\u547D\u4EE4\u884C\u5F15\u5BFC\uFF1A <img src="`+l+'" alt=""></p><p>\u53EA\u9700\u8981\u8DDF\u7740\u5F15\u5BFC\u9009\u62E9\u3001\u8F93\u5165\u3001\u56DE\u8F66\u3002</p><hr><p>\u4EE5\u4E0A\uFF0C\u5E0C\u671B\u5BF9\u4F60\u6709\u5E2E\u52A9\u3002</p>',90),c=[o];function t(i,r,d,h,y,u){return n(),a("div",null,c)}var g=s(p,[["render",t]]);export{m as __pageData,g as default};