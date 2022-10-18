import{_ as s,c as n,o as a,a as o}from"./app.6adfa164.js";const B=JSON.parse('{"title":"JavaScript\u5224\u65AD\u6570\u636E\u7C7B\u578B","description":"","frontmatter":{"title":"JavaScript\u5224\u65AD\u6570\u636E\u7C7B\u578B","tags":["JavaScript"]},"headers":[{"level":2,"title":"\u6570\u636E\u7C7B\u578B","slug":"\u6570\u636E\u7C7B\u578B","link":"#\u6570\u636E\u7C7B\u578B","children":[]},{"level":2,"title":"\u5224\u65AD\u65B9\u6CD5","slug":"\u5224\u65AD\u65B9\u6CD5","link":"#\u5224\u65AD\u65B9\u6CD5","children":[{"level":3,"title":"typeof","slug":"typeof","link":"#typeof","children":[]},{"level":3,"title":"instanceof","slug":"instanceof","link":"#instanceof","children":[]},{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]},{"level":3,"title":"Object.prototype.toString.call","slug":"object-prototype-tostring-call","link":"#object-prototype-tostring-call","children":[]}]}],"relativePath":"blog/11.md"}'),l={name:"blog/11.md"},p=o(`<h1 id="javascript-\u5224\u65AD\u6570\u636E\u7C7B\u578B" tabindex="-1">JavaScript \u5224\u65AD\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#javascript-\u5224\u65AD\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u6570\u636E\u7C7B\u578B" tabindex="-1">\u6570\u636E\u7C7B\u578B <a class="header-anchor" href="#\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a></h2><ul><li>\u503C\u7C7B\u578B(\u57FA\u672C\u7C7B\u578B)\uFF1A<code>String</code>\u3001<code>Number</code>\u3001<code>BigInt</code>\u3001<code>Boolean</code>\u3001<code>Null</code>\u3001<code>Undefined</code>\u3001<code>Symbol</code>\u3002</li><li>\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF1A<code>Object</code>\u3001<code>Array</code>\u3001<code>Function</code>\u3002</li></ul><h2 id="\u5224\u65AD\u65B9\u6CD5" tabindex="-1">\u5224\u65AD\u65B9\u6CD5 <a class="header-anchor" href="#\u5224\u65AD\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u5047\u8BBE\u6709\u4EE5\u4E0B\u6570\u636E\u9700\u8981\u533A\u5206</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> str </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#DEE492;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> num </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">0</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> bi </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">1</span><span style="color:#F286C4;">n</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> bool </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">true</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> nul </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">null</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> und </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#BF9EEE;">undefined</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> sym </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Symbol</span><span style="color:#F6F6F4;">(</span><span style="color:#DEE492;">&#39;</span><span style="color:#E7EE98;">1</span><span style="color:#DEE492;">&#39;</span><span style="color:#F6F6F4;">)</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> obj </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> {}</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> arr </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> []</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">fuc</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">() {}</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> person </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Student</span><span style="color:#F6F6F4;">() {}</span></span>
<span class="line"><span style="color:#97E1F1;">Student</span><span style="color:#F6F6F4;">.prototype </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> student </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Student</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"></span></code></pre></div><p>\u6839\u636E\u4E0D\u540C\u7684\u573A\u666F\uFF0C\u9009\u7528\u5BF9\u5E94\u7684\u65B9\u6848\uFF1A</p><h3 id="typeof" tabindex="-1">typeof <a class="header-anchor" href="#typeof" aria-hidden="true">#</a></h3><div class="info custom-block"><p class="custom-block-title">\u7F3A\u70B9</p><p>\u4E0D\u80FD\u5224\u65AD <code>Null</code>\u3001<code>Object</code>\u3001<code>Array</code> \u548C\u4E0D\u540C\u5B9E\u4F8B\u3002</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> str </span><span style="color:#7B7F8B;">// &quot;string&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> num </span><span style="color:#7B7F8B;">// &quot;number&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> bi </span><span style="color:#7B7F8B;">// &quot;bigint&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> bool </span><span style="color:#7B7F8B;">// &quot;boolean&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> nul </span><span style="color:#7B7F8B;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> und </span><span style="color:#7B7F8B;">// &quot;undefined&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> sym </span><span style="color:#7B7F8B;">// &quot;symbol&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> obj </span><span style="color:#7B7F8B;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> arr </span><span style="color:#7B7F8B;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> fuc </span><span style="color:#7B7F8B;">// &quot;function&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> person </span><span style="color:#7B7F8B;">// &quot;object&quot;</span></span>
<span class="line"><span style="color:#F286C4;">typeof</span><span style="color:#F6F6F4;"> student </span><span style="color:#7B7F8B;">// &quot;object&quot;</span></span>
<span class="line"></span></code></pre></div><h3 id="instanceof" tabindex="-1">instanceof <a class="header-anchor" href="#instanceof" aria-hidden="true">#</a></h3><div class="info custom-block"><p class="custom-block-title">\u7F3A\u70B9</p><p>\u4E0D\u80FD\u5224\u65AD <code>null</code>\u3001<code>undefined</code>\u3001\u4E0D\u662F\u7528 <code>new</code> \u58F0\u660E\u7684\u57FA\u672C\u7C7B\u578B\u548C\u4E0D\u540C\u5B9E\u4F8B\u3002</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F6F6F4;">str </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// false</span></span>
<span class="line"><span style="color:#F6F6F4;">num </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Number</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// false</span></span>
<span class="line"><span style="color:#F6F6F4;">bi </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">BigInt</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// false</span></span>
<span class="line"><span style="color:#F6F6F4;">bool </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// false</span></span>
<span class="line"><span style="color:#F6F6F4;">sym </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Symbol</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// false</span></span>
<span class="line"><span style="color:#F6F6F4;">obj </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">arr </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Array</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">fuc </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Function</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> strNew </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">String</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">strNew </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">String</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> numNew </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Number</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">numNew </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Number</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> boolNew </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Boolean</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">boolNew </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Boolean</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">person </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">student </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Student</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">student </span><span style="color:#F286C4;">instanceof</span><span style="color:#F6F6F4;"> </span><span style="color:#97E1F1;">Person</span><span style="color:#F6F6F4;"> </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span></code></pre></div><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><div class="info custom-block"><p class="custom-block-title">\u7F3A\u70B9</p><p>\u4E0D\u80FD\u5224\u65AD <code>null</code>\u3001<code>undefined</code>\uFF0C\u5E76\u4E14\u5B83\u662F\u4E0D\u5B89\u5168\u7684\uFF0C<code>contructor</code> \u7684\u6307\u5411\u53EF\u4EE5\u88AB\u7BE1\u6539\u3002</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#F6F6F4;">str.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> String </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">num.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Number </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">bi.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> BigInt </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">bool.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Boolean </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">obj.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Object </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">arr.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Array </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"><span style="color:#F6F6F4;">fuc.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Function </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F286C4;">function</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">() {}</span></span>
<span class="line"><span style="color:#F286C4;">let</span><span style="color:#F6F6F4;"> person </span><span style="color:#F286C4;">=</span><span style="color:#F6F6F4;"> </span><span style="color:#F286C4;font-style:italic;">new</span><span style="color:#F6F6F4;"> </span><span style="color:#62E884;">Person</span><span style="color:#F6F6F4;">()</span></span>
<span class="line"><span style="color:#F6F6F4;">person.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Person </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F6F6F4;">student.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Student </span><span style="color:#7B7F8B;">// false</span></span>
<span class="line"><span style="color:#F6F6F4;">student.constructor </span><span style="color:#F286C4;">===</span><span style="color:#F6F6F4;"> Person </span><span style="color:#7B7F8B;">// true</span></span>
<span class="line"></span></code></pre></div><h3 id="object-prototype-tostring-call" tabindex="-1">Object.prototype.toString.call <a class="header-anchor" href="#object-prototype-tostring-call" aria-hidden="true">#</a></h3><div class="info custom-block"><p class="custom-block-title">\u7F3A\u70B9</p><p>\u4E0D\u80FD\u533A\u5206\u4E0D\u540C\u5B9E\u4F8B\u3002</p></div><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(str) </span><span style="color:#7B7F8B;">// &quot;[object String]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(num) </span><span style="color:#7B7F8B;">// &quot;[object Number]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(bi) </span><span style="color:#7B7F8B;">// &quot;[object BigInt]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(bool) </span><span style="color:#7B7F8B;">// &quot;[object Boolean]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(nul) </span><span style="color:#7B7F8B;">// &quot;[object Null]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(und) </span><span style="color:#7B7F8B;">// &quot;[object Undefined]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(sym) </span><span style="color:#7B7F8B;">// &quot;[object Symbol]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(obj) </span><span style="color:#7B7F8B;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(arr) </span><span style="color:#7B7F8B;">// &quot;[object Array]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(fuc) </span><span style="color:#7B7F8B;">// &quot;[object Function]&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(person) </span><span style="color:#7B7F8B;">// &quot;[object Object]&quot;</span></span>
<span class="line"><span style="color:#97E1F1;">Object</span><span style="color:#F6F6F4;">.prototype.toString.</span><span style="color:#62E884;">call</span><span style="color:#F6F6F4;">(student) </span><span style="color:#7B7F8B;">// &quot;[object Object]&quot;</span></span>
<span class="line"></span></code></pre></div>`,19),e=[p];function t(c,F,r,y,i,u){return a(),n("div",null,e)}const b=s(l,[["render",t]]);export{B as __pageData,b as default};
